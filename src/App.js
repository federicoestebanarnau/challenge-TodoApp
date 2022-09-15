import "./index.css";
import { useState } from "react";
import ToDoItem from "./components/TodoItem";
import FilterButton from "./components/FilterButton";

const initialData = [
  { id: 1, title: "Lorem ipsum dolor sit amet", completed: false },
  { id: 2, title: "Vivamus id arcu laoreet", completed: false },
  { id: 3, title: "Donec cursus mi", completed: true },
  { id: 4, title: "Aenean id fringilla justo", completed: false },
];

const ToDo = () => {
  const [addTodo, setAddTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState(initialData);

  const handleStatus = (item) => {
    // marcar como completada o no una tarea
    setTodos(
      todos.map((e) => {
        if (e.id === item.id) {
          return {
            ...e,
            completed: !item.completed,
          };
        }
        return e;
      })
    );
  };

  const handleRemove = (item) => {
    // eliminar una tarea
    setTodos(todos.filter((el) => el.id !== item.id));
  };

  const handleAddTodo = () => {
    // agregar una tarea
    setTodos([...todos, { id: Date.now(), title: addTodo, completed: false }]);
    setAddTodo("");
  };

  const filterTodos = () => {
    // filtrar tareas por completadas, no completadas, todas.

    if (filter === "all") {
      return todos;
    } else if (filter === "complete") {
      return todos.filter((i) => i.completed);
    } else if (filter === "incomplete") {
      return todos.filter((i) => !i.completed);
    }
  };

  const handleChange = (e) => {
    setAddTodo(e.target.value);
  };

  const visibleTodos = filterTodos();

  let doneCount = todos.filter((i) => i.completed === true).length;

  return (
    <div>
      <div className="field">
        <input placeholder="" value={addTodo} onChange={handleChange} />
        <button
          className="btn btn--add"
          onClick={handleAddTodo}
          disabled={addTodo.length < 1}
        >
          Add
        </button>
      </div>
      <div className="filter-wrapper">
        <div className="filter-tabs">
          <FilterButton
            activeFilter={filter}
            filter="all"
            onClick={() => setFilter("all")}
          />
          <FilterButton
            activeFilter={filter}
            filter="complete"
            onClick={() => setFilter("complete")}
          />
          <FilterButton
            activeFilter={filter}
            filter="incomplete"
            onClick={() => setFilter("incomplete")}
          />
        </div>
        <p style={{ lineHeight: 1.5 }}>
          {doneCount === todos.length
            ? `🎉 ${doneCount}/${todos.length} all todos complete!`
            : `${doneCount}/${todos.length} todos complete`}
        </p>
      </div>
      {visibleTodos.length === 0 && (
        <p style={{ paddingLeft: "1rem" }}>No todos to show here...</p>
      )}
      {visibleTodos.length > 0 &&
        visibleTodos.map((item, idx) => {
          return (
            <ToDoItem
              key={item.id}
              item={item}
              handleStatus={() => handleStatus(item)}
              handleRemove={() => handleRemove(item)}
            />
          );
        })}
    </div>
  );
};

export default function App() {
  return (
    <div className="container">
      <h1>
        <strong>ToDo</strong> List
      </h1>
      <ToDo />
    </div>
  );
}

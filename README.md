# ToDo List - Challenge

Instrucciones:

- Para empezar el ejercicio, hacer un clon del repositorio.
- La entrega del ejercicio resuelto debe ser comunicada al reclutador o en su defecto al responsable del mismo.
- La entrega será el enlace de GitHub al repositorio público del candidato.

Objetivo: Desarrollar una aplicación de React que permita crear una tarea, eliminarla, completarla, descompletar y permita filtros.

1. Al iniciar la aplicación el input debe estar vacío, cuando el usuario escriba una tarea y presione el botón “Add” ésta debe agregarse en el listado de forma inmediata, sin necesidad de recargar la página.
2. En el listado, cada tarea debe tener un botón que permita eliminar la misma de forma individual.
3. En el listado, cada tarea debe tener un checkbox, cuando el usuario lo presione la tarea debe marcarse como completada y tacharse.
4. Si una tarea fue marcada como completada, debe poder desmarcarse y volver a su estado inicial.
5. La aplicación debe permitir 3 filtros: “All”, “Complete”, “Incomplete”.
    1. **All**: al presionar este filtro deben mostrarse todas las tareas. Inclusive las que fueron marcadas como completadas.
    2. **Complete**: al presionar este filtro deben mostrarse únicamente las tareas completadas. Debe permitir marcar las tareas como incompletas. Si no hay tareas completas debe mostrar un texto informando que no hay tareas completadas.
    3. **Incomplete**: al presionar este filtro deben mostrarse únicamente las tareas incompletas. Debe permitir marcar las tareas como completadas. Si no hay tareas completas debe mostrar un texto informando que no hay tareas incompletas.
6. La aplicación debe tener un contador de tareas, mostrar el total de tareas pendientes, y cuando una se marque como completada sumarla al contador. ej: 0 / 5, siendo 0 la cantidad de tareas completas y 5 el total de tareas a completar.
7. Agregar Test unitarios https://es.reactjs.org/docs/testing.html


![](https://github.com/pjcaro/React-Challenge/blob/master/todo-app.gif)

# Tarea: Mi componente interactivo

## Componente elegido

Lista de tareas interactiva (To-Do List) con validación de entradas, estado de tarea completada y eliminación de elementos.

## Version 1: solo DOM

En esta versión inicial creamos la estructura base directamente desde JavaScript agregando elementos fijos al árbol DOM.

```js
const listaTareas = document.querySelector("#listaTareas");
const li = document.createElement("li");
li.textContent = "Tarea inicial de prueba";
listaTareas.appendChild(li);
```

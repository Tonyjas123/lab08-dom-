## Tarea: Mi componente interactivo

## Version 1: solo DOM

En esta versión se utilizó el DOM para crear elementos HTML y mostrar una tarea en la página.

```javascript
const lista = document.getElementById("listaTareas");
const elemento = document.createElement("li");

elemento.textContent = "Mi primera tarea";
lista.appendChild(elemento);
```

## Version 2: con eventos

Se agregó un formulario para escribir tareas y el evento `submit` para agregarlas sin recargar la página.

```javascript
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const titulo = input.value.trim();

  if (titulo === "") {
    mensaje.textContent = "Escribe una tarea.";
    return;
  }
});
```

## Version 3: con clases y objetos

Se creó la clase `Tarea`, que permite guardar el título y el estado de cada tarea.

```javascript
class Tarea {
  constructor(titulo) {
    this.titulo = titulo;
    this.completada = false;
  }

  completar() {
    this.completada = !this.completada;
  }

  obtenerTexto() {
    return this.titulo;
  }
}
```

**¿Qué se agregó y por qué?**

Se agregó una clase para organizar la información de cada tarea. También se implementaron eventos para agregar, completar y eliminar tareas. La validación muestra un mensaje cuando el usuario intenta agregar una tarea vacía.

## Relación con los conceptos

| Concepto | Aplicación                               |
| -------- | ---------------------------------------- |
| DOM      | Crear, mostrar y eliminar elementos.     |
| Eventos  | `submit`, `click` e `input`.             |
| Objetos  | Instancias creadas con la clase `Tarea`. |

## Pruebas realizadas

| Prueba                  | Resultado esperado                  | Resultado obtenido |
| ----------------------- | ----------------------------------- | ------------------ |
| Agregar una tarea       | Aparece en la lista.                | Correcto           |
| Agregar una tarea vacía | Aparece un mensaje.                 | Correcto           |
| Completar una tarea     | El texto aparece tachado.           | Correcto           |
| Eliminar una tarea      | Desaparece de la lista.             | Correcto           |
| Revisar el contador     | Se actualiza al agregar o eliminar. | Correcto           |

## Explicación de la clase

La clase `Tarea` tiene dos atributos: `titulo` y `completada`. Además, posee dos métodos: `completar()`, que cambia el estado de la tarea, y `obtenerTexto()`, que devuelve su título.

// Clase Tarea con sus atributos y métodos
class Tarea {
  constructor(titulo) {
    this.titulo = titulo;
    this.completada = false;
  }

  completar() {
    this.completada = !this.completada;
  }

  obtenerTexto() {
    return this.completada ? `${this.titulo} (Completada)` : this.titulo;
  }
}

// Selección de elementos del DOM
const formTarea = document.querySelector("#formTarea");
const inputTarea = document.querySelector("#inputTarea");
const mensajeValidacion = document.querySelector("#mensajeValidacion");
const listaTareas = document.querySelector("#listaTareas");
const contadorTareas = document.querySelector("#contadorTareas");

let arregloTareas = [];

function actualizarContador() {
  if (contadorTareas) {
    contadorTareas.textContent = arregloTareas.length;
  }
}

// Evento 1: submit en el formulario
formTarea.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validación: revisa que no esté vacío
  if (inputTarea.value.trim() === "") {
    if (mensajeValidacion) {
      mensajeValidacion.textContent =
        "Error: El nombre de la tarea no puede estar vacío.";
      mensajeValidacion.className = "error";
    }
    return;
  }

  if (mensajeValidacion) {
    mensajeValidacion.textContent = "";
  }

  // Uso de la clase Tarea (Creación del objeto)
  const nuevaTarea = new Tarea(inputTarea.value.trim());
  arregloTareas.push(nuevaTarea);

  // Creación de elementos dinámicos en el DOM
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btnBorrar = document.createElement("button");

  span.textContent = nuevaTarea.obtenerTexto();
  btnBorrar.textContent = "Borrar";
  btnBorrar.className = "btn-borrar";

  // Evento 2: click para marcar completada
  span.addEventListener("click", () => {
    nuevaTarea.completar();
    span.textContent = nuevaTarea.obtenerTexto();
    li.classList.toggle("completada");
  });

  // Evento 3: click para eliminar elemento del DOM
  btnBorrar.addEventListener("click", () => {
    listaTareas.removeChild(li);
    arregloTareas = arregloTareas.filter((t) => t !== nuevaTarea);
    actualizarContador();
  });

  li.appendChild(span);
  li.appendChild(btnBorrar);
  listaTareas.appendChild(li);

  actualizarContador();
  formTarea.reset();
});

// Evento 4: input para limpiar el mensaje de error mientras el usuario escribe
inputTarea.addEventListener("input", () => {
  if (mensajeValidacion && inputTarea.value.trim() !== "") {
    mensajeValidacion.textContent = "";
  }
});

# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: Google Chrome

## Ejercicio 2: Seleccionar y modificar el DOM

| Instrucción                      | Qué cambió en la pantalla                   | Se mantiene al recargar (Sí/No) |
| :------------------------------- | :------------------------------------------ | :------------------------------ |
| **textContent desde la consola** | El título cambió a "Hola desde la consola". | **No**                          |
| **textContent desde app.js**     | El título cambió a "Hola TECSUP".           | **Sí**                          |
| **style.color**                  | El texto del título cambió a color azul.    | **Sí**                          |
| **classList.add**                | El párrafo tomó fondo amarillo.             | **Sí**                          |
| **createElement + appendChild**  | Se agregó "JavaScript" a la lista.          | **Sí**                          |

## Ejercicio 3: Evento click

| Tipo de evento | Qué acción lo dispara                             | Cuánto suma por acción |
| :------------- | :------------------------------------------------ | :--------------------- |
| **click**      | Hacer un clic simple con el mouse sobre el botón. | Suma 1                 |
| **dblclick**   | Hacer doble clic rápido sobre el botón.           | Suma 1                 |
| **mouseover**  | Pasar el puntero del mouse por encima del botón.  | Suma 1                 |

**Información observada en la consola:**

- **`evento.type`:** Muestra el nombre del tipo de evento ejecutado (por ejemplo, `click`).
- **`evento.target`:** Muestra el elemento HTML específico que recibió la acción (en este caso, `<button id="btnSumar">Sumar 1</button>`).

## Ejercicio 4: Eventos input y submit

| Prueba                                      | Qué pasó en la pantalla                                                            | Se recargó la página (Sí/No) |
| :------------------------------------------ | :--------------------------------------------------------------------------------- | :--------------------------- |
| **Escribir en el campo nombre**             | El texto "Hola, ..." se actualiza en tiempo real letra por letra.                  | **No**                       |
| **Enviar sin preventDefault**               | El mensaje de envío aparece un instante y desaparece porque la página se refresca. | **Sí**                       |
| **Enviar con preventDefault, correo sin @** | Muestra "Correo no valido: falta @" en texto rojo.                                 | **No**                       |
| **Enviar con preventDefault, correo con @** | Muestra "Enviado: " seguido del correo ingresado.                                  | **No**                       |

## Ejercicio 5: Clases y objetos

| Objeto      | nombre  | precio | descripcion()       | conDescuento(0.25) |
| :---------- | :------ | :----- | :------------------ | :----------------- |
| **laptop**  | Laptop  | 2500   | Laptop - S/ 2500.00 | 1875.00            |
| **mouse**   | Mouse   | 45     | Mouse - S/ 45.00    | 33.75              |
| **teclado** | Teclado | 120    | Teclado - S/ 120.00 | 90.00              |
| **monitor** | Monitor | 680    | Monitor - S/ 680.00 | 510.00             |

**Ventajas de usar clases en lugar de escribir cada producto a mano en el HTML:**

- Permite definir la estructura (propiedades y métodos) una sola vez y reutilizarla para crear múltiples objetos sin duplicar código.
- Facilita la renderización dinámica de listas desde JavaScript, permitiendo agregar nuevos elementos al sitio sin tocar la estructura HTML.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba              | Total que muestra la página                                                               | Correcto (Sí/No) |
| :------------------ | :---------------------------------------------------------------------------------------- | :--------------- |
| **Cuaderno 12.50**  | 12.50                                                                                     | **Sí**           |
| **+ Lapicero 3.20** | 15.70                                                                                     | **Sí**           |
| **+ Mochila 89.90** | 105.60                                                                                    | **Sí**           |
| **Sin Number()**    | Muestra error en consola (`this.precio.toFixed is not a function`) y no calcula el total. | **No**           |

| Pieza      | Línea de tu código donde aparece                                | Para qué sirve                                                    |
| :--------- | :-------------------------------------------------------------- | :---------------------------------------------------------------- |
| **DOM**    | `document.createElement("li")` / `listaCarrito.appendChild(li)` | Crea y modifica los nodos del árbol DOM en pantalla.              |
| **Evento** | `formProducto.addEventListener("submit", ...)`                  | Captura la acción del usuario al enviar el formulario.            |
| **Objeto** | `new Producto(...)` / `new Carrito()`                           | Instancia estructuras de datos con atributos y métodos asociados. |

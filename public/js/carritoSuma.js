// carrito.js


const cantidadElement = document.getElementById('cantidad');
const sumarBtn = document.getElementById('sumar');
const restarBtn = document.getElementById('restar');


function actualizarCantidad(cantidad) {
  cantidadElement.textContent = cantidad;
}


function sumar() {
  let cantidadActual = parseInt(cantidadElement.textContent);
  cantidadActual++;
  actualizarCantidad(cantidadActual);
}


function restar() {
  let cantidadActual = parseInt(cantidadElement.textContent);
  if (cantidadActual > 1) {
    cantidadActual--;
    actualizarCantidad(cantidadActual);
  }
}


sumarBtn.addEventListener('click', sumar);
restarBtn.addEventListener('click', restar);
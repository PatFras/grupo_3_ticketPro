const fechaActual = new Date();

const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const año = fechaActual.getFullYear();

const fechaFormateada = dia + "/" + mes + "/" + año;

document.getElementById("fecha").innerHTML = fechaFormateada;

const hora = fechaActual.getHours();
const minutos = fechaActual.getMinutes();

const horaFormateada = hora + ":" + minutos;

document.getElementById("hora").innerHTML = horaFormateada;

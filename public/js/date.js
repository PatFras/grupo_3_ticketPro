// Obtener la fecha actual
var fechaActual = new Date();

// Obtener los componentes de la fecha
var dia = fechaActual.getDate();
var mes = fechaActual.getMonth() + 1; 
var año = fechaActual.getFullYear();

// Formatear los componentes como cadena de texto
var fechaFormateada = dia + "/" + mes + "/" + año;

// Mostrar la fecha en el elemento HTML correspondiente
document.getElementById("fecha").innerHTML = fechaFormateada;

//  la hora actual
var hora = fechaActual.getHours();
var minutos = fechaActual.getMinutes();


// Formatear los componentes como cadena de texto
var horaFormateada = hora + ":" + minutos ;

// Mostrar la hora en el elemento HTML correspondiente
document.getElementById("hora").innerHTML =  horaFormateada;

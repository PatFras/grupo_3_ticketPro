
var fechaActual = new Date();


var dia = fechaActual.getDate();
var mes = fechaActual.getMonth() + 1; 
var año = fechaActual.getFullYear();


var fechaFormateada = dia + "/" + mes + "/" + año;

document.getElementById("fecha").innerHTML = fechaFormateada;


var hora = fechaActual.getHours();
var minutos = fechaActual.getMinutes();



var horaFormateada = hora + ":" + minutos ;


document.getElementById("hora").innerHTML =  horaFormateada;

export default {Hora, FechaExacta};

function Hora(){
let ahora = new Date();
let hora = ahora.getHours();
let minutos = ahora.getMinutes();

return `La hora es ${hora}:${minutos}`;
}

function FechaExacta(){
let fechaExacta = new Date().toLocaleDateString('es-ES',)
let horaExacta = new Date().toLocaleTimeString('es-ES', { hour12: false });

return `La hora exacta es ${fechaExacta}:${horaExacta}`;
}

//1
let diaSemana = prompt('Qué día de la semana es?:');

console.log('día ingresado:', diaSemana);

if (diaSemana == 'Sábado' || diaSemana == 'Domingo'){
    alert ('¡Buen fin de semana!');
}else {
    alert ('¡Buena semana!');
}

//2

let numeroUsuario = prompt ('Ingrese un número positivo o negativo:');

console.log('Numero ingresado:', numeroUsuario);

if (numeroUsuario >= 0){
    console.log('Es positivo:', numeroUsuario >= 0);
    alert (`El número ${numeroUsuario} es POSITIVO`);
}else {
    alert(`El número ${numeroUsuario} es NEGATIVO`);
}

//3

let puntuacionJugador = prompt('Puntuación Jugador:');

console.log('Puntuación Jugador:', puntuacionJugador);

if (puntuacionJugador >= 100) {
    alert('¡Felicidades, has ganado!');
}else{
    alert('Intenta nuevamente para ganar.');
}

//4

let saldoCuentaUsuario = 90500;

alert(`El saldo de su cuenta es de $${saldoCuentaUsuario}`);

//5

let nombreUsuario = prompt('Ingrese su nombre:');

console.log('Nombre ingresado:', nombreUsuario);

alert(`Bienvenido/a ${nombreUsuario}`);
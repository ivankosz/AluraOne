//1
let contador = 1;

while (contador < 11) {
    console.log(contador);
    alert(contador);
    contador +=1;
}

//2
let contador2 = 10;

while (contador2 > -1) {
    console.log(contador2);
    alert(contador2);
    contador2 -=1;
}


//3

let numeroCuentaProgresiva = prompt ('Ingrese un numero positivo para empezar a contar:');
let contadorProgresivo = 0;
console.log('Numero de cuenta progresiva:', numeroCuentaProgresiva);

while (contadorProgresivo <= numeroCuentaProgresiva){
    console.log(contadorProgresivo);
    alert(contadorProgresivo);
    contadorProgresivo +=1;
}

//4

let numeroCuentaRegresiva = prompt ('Ingrese un numero positivo para empezar la cuenta regresiva:');
let contadorRegresivo = numeroCuentaRegresiva;
console.log('Numero de cuenta Regresiva:', numeroCuentaRegresiva);

while (contadorRegresivo > -1){
    console.log(contadorRegresivo);
    alert(contadorRegresivo);
    contadorRegresivo -=1;
}
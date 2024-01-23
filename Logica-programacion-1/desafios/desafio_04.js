
//1
console.log('Bienvenido/a a mi página web');

2//
let nombre = 'Ivan';
console.log(`¡Hola, ${nombre}!`);

//3
alert(`¡Hola, ${nombre}!`);

//4
let lenguajeProgramacion = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(lenguajeProgramacion);

//5
let valor1 = 5;
let valor2 = 3;
let resultado = valor1 + valor2;

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

//6
let resultadoResta = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultadoResta}`);

//7

let edadUsuario = prompt('Ingrese su edad:');

if (edadUsuario >= 18){
    console.log('Usted es mayor de edad');
}else{
    console.log('Usted es menor de edad');
}

//8
let numero = prompt('Ingrese un valor numerico:');

if (numero >0){
    console.log(`el numero ${numero} es POSITIVO`);
}else{
    if (numero < 0){
        console.log(`el numero ${numero} es NEGATIVO`);
    }else{
        if (numero == 0){
            console.log(`el numero es ${numero}, no es positivo ni negativo`)
        }
    }
}

//9

let contador = 1;

while (contador < 11){
    console.log(contador);
    contador++;
}

//10
let nota = 7;

if (nota >= 7){
    console.log(`Aprobado con ${nota}`);
}else{
    console.log(`Reprobado con ${nota}`);
}


//11, 12, 13

console.log(Math.random());
console.log(parseInt(Math.random()*10)+1);
console.log(parseInt(Math.random()*1000)+1);
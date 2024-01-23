
//Variables
let rangoNumero = prompt('Elije el rango maximo del numero secreto:');
let numeroSecreto = parseInt(Math.random()*rangoNumero)+1;
let numeroUsuario;
let intentos = 1;
let maximosIntentos = 3;

//let palabraVeces = 'vez';

if (rangoNumero > 10 && rangoNumero <100){
    maximosIntentos +=2;
}else{
    if (rangoNumero >=100){
        maximosIntentos+= parseInt(rangoNumero/100)+2;
    }
}

//console.log('Numero Secreto',numeroSecreto);

while (numeroUsuario != numeroSecreto){

    numeroUsuario = prompt(`Me indicas un número del 1 al ${rangoNumero} por favor:`);

    console.log('Valor ingresado:', numeroUsuario);

    /*
    Código de comparación 
    */
    console.log('Comparacion:', numeroUsuario == numeroSecreto);

    if (numeroUsuario == numeroSecreto) {
        //acertamos, fue verdadera la condición
        //Template Strings
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        // Operador Ternario>>>> el == compara, el ? sirve como if mientras que : actua como else.
    }else {
        if (numeroUsuario > numeroSecreto){
            alert('El numero es menor');
        }else{
            alert('El numero es mayor');
        }
        alert(`Intentos restantes: ${maximosIntentos - intentos}`);
        //incrementamos el contador cuando no acierta
        //abreviacion de incremento
        //intentos +=1;
        //intentos ++;
        intentos +=1;
        //palabraVeces = 'veces';
        if (intentos > maximosIntentos){
            alert (`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //la condición no se cumplió
        //console.log('Valor numero secreto:', numeroSecreto);
        //alert(`No acertaste, el número era: ${numeroSecreto}`);
    }
}
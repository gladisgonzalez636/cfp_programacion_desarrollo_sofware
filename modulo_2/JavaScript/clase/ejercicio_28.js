
let numero = 5;
let intentos  = 0;
let resultado;


do{
    resultado = Math.floor(Math.random() * (10-1) + 1)
    intentos++;
    console.log(resultado);
}while(numero != resultado)

    console.log(intentos);
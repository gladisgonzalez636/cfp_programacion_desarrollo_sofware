let resultado = Math.floor( Math.random() * (10 - 1) + 1);
console.log(resultado);

let numero = 0;

let numero2 = 1;
while(numero<resultado){
    numero+=1
    console.log(numero);
    numero2*=numero
    console.log(numero2);
}
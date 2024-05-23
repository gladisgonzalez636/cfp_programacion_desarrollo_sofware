let numero= Math.random();
let multiplicar=numero*10;
let rounded = Math.floor(multiplicar);
let resultado = rounded;
console.log(resultado);

let inicio = 0;
while(inicio<resultado){
    inicio+=1
    console.log(`${resultado} x ${inicio} = ${resultado*inicio}`);
}
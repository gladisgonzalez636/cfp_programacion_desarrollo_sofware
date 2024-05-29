let arrayVacio = [];
let random;
let contador = 0;
let contador2 = 0;
for (i=0; i<10; i++){
    contador = random = Math.floor(Math.random()*(100-0)+1)
    console.log(contador)
    contador2+=contador
    console.log(contador2);
}
console.log(`${contador2/i}`);

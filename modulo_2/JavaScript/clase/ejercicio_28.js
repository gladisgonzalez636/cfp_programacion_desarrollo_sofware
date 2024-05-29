let resultado;
miNumero = 5;
let num = 5;
let contador = 0;

while(miNumero!=resultado){
    resultado = Math.floor(Math.random() * (50-1) + 1)
    contador+=1
}
console.log(`Adivinaste el número ${miNumero} en el intento ${contador} `);

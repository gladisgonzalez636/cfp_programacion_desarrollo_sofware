let resultado = Math.floor(Math.random() * (10 - 1) + 1);
console.log(resultado);
contador = 0;
conteo = 0;
for(i=1;i<=resultado;i++){
    console.log(i);
    if(i%2 == 0){
        contador+=i
        console.log(contador);
    }
}
console.log(contador);
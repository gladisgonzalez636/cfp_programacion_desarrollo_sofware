let array = ['a','b','c','d','e','f','a','h','i','j','k','l','m','a','b'];
let caracter = 'a';
contador = 0;
for(i=0;i<=array.length;i++){
    console.log(i);
    if(caracter==array[i]){
        contador++
        console.log(contador);
    }
}
let fibonacci = 10;
let resultado = 0;
let anterior = 0;
let actual = 1;

for(i = 0; i < fibonacci; i++){
    console.log(i);
    if(i==0){
        anterior = 0;
        actual = 1;
    
    }else{
        resultado = anterior + actual
        anterior = actual
        actual = resultado
        console.log(actual);
    }
}
console.log(actual);

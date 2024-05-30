let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
let array2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

let resultado = 0;
let resultado2 = 0;

for (f=0;f<3;f++){
    for (c=0;c<3;c++){
        resultado += array[f][c];
        console.log(resultado);
        resultado2 += array2[f][c];
        console.log(resultado2);
    }  
}
console.log(resultado + resultado2);
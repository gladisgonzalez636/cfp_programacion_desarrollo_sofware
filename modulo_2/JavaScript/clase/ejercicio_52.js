let promedio = [
    [1,2,3,4],
    [5,6,7,8],
    [9,1,2,3],
];

let contador =0;
let contador2 = 0;
for(f=0;f<4;f++){
    for(c=0;c<3;c++){
        contador += promedio[c][f]
       contador2=contador/3
    }
}
console.log(Math.round(contador2));

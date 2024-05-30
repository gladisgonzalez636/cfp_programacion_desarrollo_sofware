let producto = [
    ["Pantalon","100", "A"],
    ["Camisa", "85", "B"],
];
let categoria = [
    ["A", "10"],
    ["B", "5"],
    ["C", "0"],
];

let descuento = 0;
let resultado = 0;

for (f=0;f<2;f++){
    for (fc=0;fc<3;fc++){
        if(producto[f][2] = categoria[fc][0]){
            descuento=parseInt(producto[f][1])*parseInt(categoria[fc][1])/100
            resultado = parseInt(producto[f][1]-descuento)
            console.log(`${producto[f][0]} | ${producto[f][1]} |${categoria[fc][0]}| ${descuento} |${resultado}`);
        }
      }
}


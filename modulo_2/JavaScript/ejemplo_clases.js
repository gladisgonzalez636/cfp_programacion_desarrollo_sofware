class Lavadora {
    constructor(tamanio, capacidad, modelo, marca, tipo) {
        this.tamanio = tamanio,
        this.capacidad = capacidad,
        this.modelo = modelo,
        this.marca = marca,
        this.tipo = tipo
    }
    lavar(cantidad) {
        let total = cantidad * 1;
        console.log(total < capacidad ? 'esta lavando');
    }
    exprimir() { console.log('esta exprimiendo') }
    enjuague() { console.log('esta enjuagando') }
}
let lavadora = new Lavadora(tamanio, capacidad, modelo, marca, tipo);
console.log(lavadora);
lavadora.lavar()
lavadora.exprimir()
lavadora.enjuague()
let lavadora2 = new Lavadora();
console.log(lavadora2);



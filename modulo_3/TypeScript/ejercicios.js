
//ejrcicios js
function suma(num1, num2) {
    return num1 + num2;
}
console.log(suma(4, 5));
const persona = {
    nombre: 'gladis',
    edad: 25
};
function devolver(persona) {
    return persona;
}
console.log(devolver(persona));
const miPerro = {
    nombre: 'Max',
    hacerSonido: () => "wuaw",
};
console.log(`Èl perro ${miPerro.nombre} hace ${miPerro.hacerSonido()}`);

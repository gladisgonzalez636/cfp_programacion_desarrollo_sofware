// class Temperature {
//     constructor(celsius) {
//     this.celsius = celsius;
//     }
 
//     get fahrenheit() {
//     return this.celsius * 1.8 + 32;
//     }
//     set fahrenheit(value) {
//     this.celsius = (value - 32) / 1.8;
//     }
//     static fromFahrenheit(value) {
//     return new Temperature((value - 32) / 1.8);
//     }
//     }
//     let temp = new Temperature(22);
//     console.log(temp.fahrenheit);
//     // → 71.6
//     temp.fahrenheit = 86;
//     console.log(temp.celsius);

let animal = {
    get size(){
        return 5*5
    }
}
console.log(animal.size);

let numero = {
    get size(){
        if(2>1){
            return true
        }else{
            return false
        }
    }
}

console.log(numero.size);

class suma{
    constructor(uno,dos){
        this.uno = uno;
        this.dos = dos;
        this.suma = 0;
    }
    get resultadoSumA(){
        return this.suma + this.uno + this.dos
    }

    get uno1(){
        return `Este es el valor`
    }
    set uno2(uno){
        this.uno = uno
    }
    static fromsuma(uno){
        return new suma(uno)
    }
}
let resultado = new suma(5,2)
resultado.uno2 = 9
console.log(resultado.uno1);

class animales{
    constructor(cangrejo,dos,pezcado){
        this.cangrejo = cangrejo;
        this.pulpo = dos;
        this.pezcado = pezcado;
    }

    get marino(){
        return `animales`
    }
    set marino(marino){
        this.marino = marino
    }
    static fromsuma(cangrejo,dos,pezcado){
        return new animales(cangrejo,dos,pezcado)
    }
}
let animales_marinos= new animales()
console.log(animales_marinos.marino);

class Paises{
    pais;
    constructor(pais,departamento){
        this.pais = pais;
        this.departamento = departamento;
    }

    get ubicacion(){
        return this.pais
    }

    set ubicacion(pais){
        this.pais = pais
    }

    static frompais(pais){
        return new Paises(pais, "Guatemala")
    }
}
let algunos_Paises= new Paises("Guatemala","Zacapa")
algunos_Paises.ubicacion = "USA";
let newUbicacion = Paises.frompais("ddd");
console.log(newUbicacion);
console.log(algunos_Pai
    
    es.ubicacion);



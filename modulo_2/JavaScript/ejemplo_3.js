// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//     action(i);
//     }
//     }
//     repeat(3, console.log);

// let etiquetas = [];
// repeat(5, i => {
// etiquetas.push(`Unidad ${i + 1}`);
// });

// ["A", "B"].forEach(l => console.log(l));

// function filter(array, test) {
//     let passed = [];
//     for (let element of array) {
//     if (test(element)) {
//     passed.push(element);
//     }
//     }
//     return passed;
//     }
//     console.log(filter(SCRIPTS, script => script.living));
let estudiante = [{
    name :'Manuel',age:20
},
{
    name :'Luis',age:22
},
{name:'Dayana',age:20

}

];
let estudianteDeVeinte = estudiante.filter(estudiante=>estudiante.age == 20);
console.log(estudianteDeVeinte);
let nombresEstudiante = estudianteDeVeinte.map(estudiante=>estudiante.name)
console.log(nombresEstudiante);
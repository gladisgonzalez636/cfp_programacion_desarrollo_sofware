// console.log('Hola mundo');
const promises = require('node:fs/promises');

const { createServer } = require('node:http');

const path = require('node:path');

const os = require('node:os');

// let newPath =('C:/Users/gladisgonzalez/Desktop/todo.png');
// console.log(newPath);

// let fileName = path.basename(newPath);
// console.log(fileName);



async function promesas(){
    try {
        let data3 = await promises.readFile('../muchoTexto.txt','utf-8');
        console.log(data3);
        console.log('************');

    } catch (err) {
        try {
            let data3 = await promises.readFile('../muchoTexto.txt','utf-8');
            console.log(data3);
        } catch (error) {
            console.error("Dieron error los dos archivos "+error);
        }
    }

    promises.readFile('../texto.txt', 'utf-8')
    .then((data) => {
        console.log(data);
        console.log('***************');
    }).catch((err) => {
    console.log(`Error reading file: ${err}`);
    });
}

promesas();

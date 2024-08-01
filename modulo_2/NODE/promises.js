const promises = require('node:fs/promises');

//VARIAS PROMESAS
// Promise.all([
//     promises.readFile('text.txt','utf8'),
//     promises.readFile('texto.txt','utf8'),
//     promises.readFile('muchoTexto.txt','utf8')
// ]).then(([file1, file2, file3]) => {
//     console.log(file1);
//     console.log(file2);
//     console.log(file3);
// }).catch((err) => {
//     console.error(`Error reading files: ${err}`);
// });


//UNA PROMESA

// promises.readFile('text.txt', 'utf-8')
//     .then((data) => {
//         console.log(data);
// }).catch((err) => {
//     console.log(`Error reading file: ${err}`);
// });


//AWAIT
async function promesas(){
    try {
        let data3 = await promises.readFile('muchooooTexto.txt','utf-8');
        console.log(data3);
    } catch (err) {
        try {
            let data3 = await promises.readFile('muchoTeexto.txt','utf-8');
            console.log(data3);
        } catch (error) {
            console.error("Dieron error los dos archivos "+error);
        }
    }

    let data2 = promises.readFile('text.txt', 'utf8');
    console.log(data2);
    console.log('------9090');
    let data = await promises.readFile('texto.txt', 'utf8');
    console.log(data);
    console.log('------1010');
}

promesas();


// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const fs = require('node:fs');
// const stats = fs.statSync('text.txt');
// console.log(stats.isDirectory());
// console.log(stats.isFile());
// console.log(stats.size);
// //console.log(fs);

// let data = fs.readfile('text.txt')

//EJEMPLO ASINCRONO
// const fs = require('node:fs');

// let data3 = fs.readFile('muchoTexto.txt', 'utf-8',
//     () => {
//         console.log('Archivo leido');
    
// });

// let data2 = fs.readFile('text.txt', 'utf-8',
//     (err, data) => {
//     if (err) {
//         console.error(`Este es el error 1111:${err}`);
//         return;
//     }
//         console.log(data);
    
// });

// let data = fs.readFile('texto.txt', 'utf-8',
//     (err, data) => {
//     if (err) {
//         console.error(`Este es el error 1111:${err}`);
//         return;
//     }
//         console.log(data);
    
// });

 //EJEMPLO SINCRONO
//  const fs = require('node:fs');
 

//  const data2 = fs.readFileSync('text.txt', 'utf-8');
//  console.log(data2);
//  const data3 = fs.readFileSync('muchoTexto.txt', 'utf-8');
//  console.log(data3);
//  const data = fs.readFileSync('texto.txt', 'utf-8');
//  console.log(data);


const promises = require('node:fs/promises');

promises.readdir('C:/Users/gladisgonzalez/Downloads')
    .then((files) => {
        files.forEach((file) =>{
            console.log(file);
        })
    }).catch((err)=>{
        if(err){
            console.error(`Error reading directory ${err}`)
            return;
        }
});

const path = require('node:path');

//sep para conocer el separador de directorios
console.log(path.sep);

//unen rutas
let newPath = path.join('C:/Users/Development/Desktop/Escritorip', 'IMAGES/');
console.log(newPath);

//basename para obtener el nombre del archivo
let fileName = path.basename(newPath);
console.log(fileName);
//dirname para obtener el nombre del directorio
let dirName = path.dirname(newPath);
console.log(dirName);
//extname para obtener la extension del archivo
let extName = path.extname(newPath);
console.log(extName);
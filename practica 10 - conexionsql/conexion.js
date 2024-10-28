const http = require('node:http')
const fs= require('node:fs')
const mysql = require('mysql2')

const conexion = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'base1' 
})

conexion.connect(error => {
    if(error)
        console.log('Error de conexión')
})


const mime = {
    'html' : 'text/html',
    'css' : 'text/css',
    'jpg' : 'image/jpg',
    'ico' : 'image/x-ico',
    'mp3' : 'audio/mpeg3',
    'mp4' : 'video/mp4'

}

//servidor
const servidor= http.createServer((pedido,respuesta)=>{
    const url = new URL('http://localhost:8888' + pedido.url)
    let camino = 'public' + url.pathname

    if(camino == 'public/')
        camino = 'public/index.html'
    encaminar(pedido, respuesta, camino)

    })
    servidor.listen(8888)
// end server


function encaminar(pedido, respuesta, camino){
    console.log(camino)
    switch (camino){
       case 'public/creartabla': {
           crear(respuesta)
           break
       }
       case 'public/alta': {
            alta(pedido, respuesta)
            break
       }
       case 'public/listado': {
            listado(respuesta)
            break
       }
       case 'public/consultaporcodigo': {
            consulta(pedido, respuesta)
            break
       }

       default: {
           fs.stat(camino, error => {
               if(!error){
                   fs.readFile(camino, (error, contenido)=> {
                       if(error){
                           respuesta.writeHead(500, {'Content-Type': 'text/plain'})
                           respuesta.write('Error interno')
                           respuesta.end()
                       } else {
                           const vec = camino.split('.')
                           const extension = vec[vec.length-1]
                           const mimearchivo = mime[extension]
       
                           respuesta.writeHead(200, {'Content-Type': mimearchivo})
                           respuesta.write(contenido)
                           respuesta.end()
                       }
                   })
               } else {
                   respuesta.writeHead(404, {'Content-Type' : 'text/html'})
                   respuesta.write(`<!doctype html><html>
               <head></head>
               <body>
               <h1>Archivo no encontrado</h1>
               </body>
               </html>`)
                   respuesta.end()
               }
           })


       } // default

    } // switch
} // funcion

function crear(respuesta){
    conexion.query('drop table if exists articulos', (error, resultado)=> {
        if(error)
            console.log(error)
    })

    conexion.query(`create table articulos(
                    codigo int primary key auto_increment,
                    descripcion varchar(50),
                    precio float
                    )`, (error, resultado)=>{
                        if(error){
                            console.log(error)
                            return
                        }
                    })

respuesta.writeHead(200, {'Content-Type': 'text/html'})
respuesta.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
    <link rel="stylesheet" href="tabla.css">

                </head>
                <body>
                    <h2>Se creo la tabla con exito</h2>
                    <a href="index.html">Retornar</a>
                </body>
                </html>

                `)
respuesta.end()
}  // fin crear



//funcion alta
function alta(pedido, respuesta){
    let info= ''
    pedido.on('data', datosparciales => {
        info += datosparciales
    })

    pedido.on('end', () =>{
        const formulario = new URLSearchParams(info)
        const registro = {
            descripcion: formulario.get('descripcion'),
            precio: formulario.get('precio')
        }
        conexion.query('insert into articulos set ?', registro, (error, resultado)=>{
           if(error){
            console.log(error)
            return
           } 
        })
        
        respuesta.writeHead(200, {'Content-Type': 'text/html'})
        respuesta.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    <h2>Se cargo el articulo</h2>
                    <a href="index.html">Retornar</a>
                </body>
                </html>

                `)
            respuesta.end()

    })
}//fin de funcion alta

function listado(respuesta){
    conexion.query('select codigo, descripcion, precio from articulos',(error, filas)=>{
        if(error){
            console.log('error en lista');
            return
        }
        respuesta.writeHead(200, {'Content-Type':'text/html'})
        let datos = ''
        for(let f=0; f<filas.length; f++){
            datos += 'Codigo:' + filas[f].codigo + '<br>'
            datos += 'Descripcion:' + filas[f].descripcion + '<br>'
            datos += 'Precio:' + filas[f].precio + '<br>'
        }

        respuesta.write('<!Doctype html><html><head></head><body>');
        respuesta.write(datos);
        respuesta.write('<a href = "index.html">Retorna</a>')
        respuesta.write('</body></html>')
        respuesta.end
    })//query
}//fin del listado

function consulta(pedido, respuesta){
    let info = ''
    pedido.on('data',datosparciales => {
        info += datosparciales
    })
    pedido.on('end', () => {
        const formulario = new URLSearchParams(info)
        const dato = [formulario.get('codigo')]
        //consulta query
        conexion.query('select descripcion, precio from articulos where codigo=?',dato,
            (error,filas) => {
                if(error){
                    console.log('error en la consulta');
                    return
                }
                respuesta.writeHead(200,{'Content-Type':'text/html'})
                let datos = ''
                if(filas.length>0){
                    datos += 'Descripcion: ' + filas[0].descripcion + '<br>'
                    datos += 'Precio: ' + filas[0].precio + '<br>'
                }else{
                    datos = 'No existe un articulo con este codigo'
                }
                respuesta.write('<!Doctype html><html><head></head><body>');
                respuesta.write(datos);
                respuesta.write('<a href = "index.html">Retorna</a>')
                respuesta.write('</body></html>')
                respuesta.end
            })
    })
}

console.log("servidor conectado")
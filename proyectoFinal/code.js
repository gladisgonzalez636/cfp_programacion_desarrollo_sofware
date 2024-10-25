const url = 'http://localhost:3000/api/articulos'
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'))
const formArticulo = document.querySelector('form')
const descripcion = document.getElementById('descripcion')
const precio = document.getElementById('precio')
const stock = document.getElementById('stock')
let opcion = ''

btnCrear.addEventListener('click', () =>{
    descripcion.value = ''
    precio.value = ''
    stock.value = ''
    modalArticulo.show()
    
})

//mostrar 
const mostrar = (articulos)=>{
    articulos.forEach(articulos => {
        resultados +=
        `
        <tr>
        <th>${articulos.id}</th>
        <th>${articulos.descripcion}</th>
        <th>${articulos.precio}</th>
        <th>${articulos.stock}</th>
        <th class = "text-center">
            <a class = "btnEditar btn btn-primary">Editar</a>
            <a class = "btnEditar btn btn-danger">Borrar</a>
        </th>
        <th>${articulos.id}</th>
        `
    })
}

//PROCEDIMIENTO
fetch(url)
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error))
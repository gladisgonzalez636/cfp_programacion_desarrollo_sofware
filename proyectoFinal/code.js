const url = 'http://localhost:3000/api/articulos/'
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'))
const formArticulo = document.querySelector('form')
const descripcion = document.getElementById('descripcion')
const precio = document.getElementById('precio')
const stock = document.getElementById('stock')
var opcion = ''

btnCrear.addEventListener('click', ()=>{
    descripcion.value = ''
    precio.value = ''
    stock.value = ''
    modalArticulo.show()
    opcion = 'crear'
})





//funcion para mostrar los registros de la bd
const mostrar = (articulos) => {
    articulos.forEach(articulos => {
        resultados += `
                     <tr>
                    <th>${articulos.id}</th>
                    <th>${articulos.descripcion}</th>
                    <th>${articulos.precio}</th>
                    <th>${articulos.stock}</th>
                    <th class="text-center">
                        <a class="btnEditar btn btn-primary">Editar</a>
                        <a class="btnBorrar btn btn-danger">Borrar</a>
                    </th>
                    </tr>
                      `       
    })
    contenedor.innerHTML = resultados
}
//procedimiento para mostrar 
fetch(url)
    .then(response => response.json())
    .then (data => mostrar(data))
    .catch(error => console.log(error))

const on =(element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}


/// funcion para borrar 
on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML

    alertify.confirm("¿Deseas eliminar el registro?",
        function(){
            fetch(url+id, {
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(()=>location.reload())
            alertify.success('Registro eliminado con exito!');
        },
        function(){
          alertify.error('Cancelar');
        });
})



// funcion para editar 
let idForm = 0
on(document, 'click', '.btnEditar', e => {    
    const fila = e.target.parentNode.parentNode
    idForm = fila.children[0].innerHTML
    const descripcionForm = fila.children[1].innerHTML
    const precioForm = fila.children[2].innerHTML
    const stockForm = fila.children[3].innerHTML
    descripcion.value =  descripcionForm
    precio.value =  precioForm
    stock.value =  stockForm
    opcion = 'editar'
    modalArticulo.show()
     
})


// registrar y actualizar
formArticulo.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(opcion=='crear'){        
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                descripcion:descripcion.value,
                precio:precio.value,
                stock:stock.value
            })
        })
        .then( response => response.json() )
        .then( data => {
            const nuevoArticulo = []
            nuevoArticulo.push(data)
            mostrar(nuevoArticulo)
        })
    }

    if(opcion=='editar'){    
        fetch(url+idForm,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                descripcion:descripcion.value,
                precio:precio.value,
                stock:stock.value
            })
        })
        .then( response => response.json() )
        .then( response => location.reload() )
    }
    modalArticulo.hide()

})
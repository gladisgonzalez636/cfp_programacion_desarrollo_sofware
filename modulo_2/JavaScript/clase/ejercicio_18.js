let producto = 1000;
if(producto>=100){
    console.log(`Total a pagar con el descuento incluido Q${producto-producto*10/100}`);
}else{
    console.log('Producto sin descuento');
}
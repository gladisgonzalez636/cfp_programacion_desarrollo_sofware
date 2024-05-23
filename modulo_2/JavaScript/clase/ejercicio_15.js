calificacion = 80;
if(calificacion<0 || calificacion>100 ){
    console.log('Incorrecto');
}else if (calificacion>=60 && calificacion<=100){
    console.log('Aprovado');
}else if(calificacion<60 && calificacion>=0){
    console.log('Reprovado');
}
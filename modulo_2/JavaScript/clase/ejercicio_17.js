let edad = 10;
if(edad<=0 || edad>125){
    console.log('Error');
}else if(edad>0 && edad<13){
    console.log('Eres niñ@');
}else if(edad>=13 && edad<18){
    console.log('Eres adolecente');
}else if(edad>=18 && edad<60){
    console.log('Eres adulto');
}else if(edad>=60 && edad<=125){
    console.log('Eres adulto mayor');
}

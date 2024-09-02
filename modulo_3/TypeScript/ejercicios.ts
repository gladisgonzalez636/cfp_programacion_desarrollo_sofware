function suma(num1:number, num2:number):number{
    return num1 + num2
  } 
  
  console.log(suma(4,5));
  
  interface Persona{
    nombre:string,
    edad:number
  }
  
  const persona: Persona = {
    nombre:'gladis',
    edad : 25
  }
  
  function devolver(persona:Persona){
    return persona.nombre
  }
  
  console.log(devolver(persona));
  
  
  interface Animal{
    nombre: string;
    hacerSonido : () => void;
  }
  
  interface Perro extends Animal{
  
  }
  
  const miPerro:Perro = {
    nombre:'Max',
    hacerSonido:()=>"wuaw",
  };
  
  console.log(`Èl perro ${miPerro.nombre} hace ${miPerro.hacerSonido()}`)
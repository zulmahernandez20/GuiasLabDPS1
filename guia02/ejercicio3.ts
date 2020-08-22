class Persona {
     nombre:string;
     apellido:string;
     edad:number;
     salario:number;
     
    constructor(nombre:string,apellido:string, edad:number, salario:number) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.salario = salario;
    }
  
    imprimir() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Apellido: ${this.apellido}`);
      console.log(`Edad: ${this.edad}`);
      console.log(`salario: ${this.salario}`);
     
    }    
   
  }

  let f = new Persona('zulma','Mejia',12,300);
  
console.log(f.imprimir());

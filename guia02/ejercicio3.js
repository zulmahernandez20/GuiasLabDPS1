var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.salario = salario;
    }
    Persona.prototype.imprimir = function () {
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Edad: " + this.edad);
        console.log("salario: " + this.salario);
    };
    return Persona;
}());
var f = new Persona('zulma', 'Mejia', 12, 300);
console.log(f.imprimir());

//let persona3 = new Persona('Prueba','Pruebita'); // No se puede inicizalizar una clase(no aplica el hosting como en las funciones que si se pueden llamar y después declararse)
class Persona{
    constructor(nombre, apellido){ // Sino se define el constructor js añade uno vacio de forma automatica
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }

    get nombreCompleto(){
        return this._nombre+' '+this._apellido
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this.departamento;
    }
    //sobreescritura
    get nombreCompleto(){
        return super.nombreCompleto+', '+this._departamento;
    }
    get toString(){
        return this.nombreCompleto
    }
    set departamento(departamento){
        return this.departamento = this.departamento;
    }
}
let persona1 = new Persona ('Martin','Perez');
console.log(persona1.nombre);
console.log(persona1.apellido);
persona1.nombre = 'Juan Carlos';
persona1.apellido = 'Troncoso';
console.log(persona1.nombre +' '+persona1.apellido);

let persona2 = new Persona('Carlos','Lara');
persona2.nombre = 'Maria Laura'
console.log(persona2.nombre);
console.log(persona2.apellido);
persona2.nombre = 'Axel';
persona2.nombre = 'Troncoso';
console.log(persona2.nombre+' '+persona2.apellido)

let empleado1 = new Empleado('Maria','Gimenez','Sistema');
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto);
console.log(empleado1.toString);
console.log(persona1.toString);
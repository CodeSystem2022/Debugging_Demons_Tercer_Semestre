//CLase 6
//let persona3 = new Persona('Carla','Ponce'); Esto no se debe hacer: Persona is not defined

class Persona { //Clase PADRE
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido = apellido;
 
    }

    nombreCompleto(){
        return this._nombre+' '+this._apellido;
    }
//Sobreescribiendo el metodo de la clase padre (Object)
    toString(){ //Regresa un string
        //Se aplica el polimorfismo que significa = multiples formas en tiempos de ejecución
        //El método que se ejecuta depende si es una referencia de tipo padre o hija

        return this.nombreCompleto();

    }
}

class Empleado extends Persona{ //Clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(){
        this._departamento = this.departamento
    }

    //Sobreescritura dhfhf
    nombreCompleto(){
        return super.nombreCompleto()+' '+this._apellido+', '+this._departamento;
    }

}
let persona1 = new Persona('Martín','Perez');
console.log(persona1._nombre)
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre)
//console.log(persona1);
let persona2 = new Persona('Carlos','Lara');
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre)
//console.log(persona2);
let persona3 = new Persona('Martín','Perez');
console.log(persona3._apellido)

let empleado1 = new Empleado('Maria','Gimenez','Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

// Object.prototype.toString Esta es la manera de acceder a atributos métodos de manera dinamica
console.log(empleado1.toString());
console.log(persona1.toString());



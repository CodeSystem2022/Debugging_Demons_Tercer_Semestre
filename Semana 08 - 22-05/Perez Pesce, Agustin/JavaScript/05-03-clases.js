// ===============CLASE 06 - LUNES-15/05/2023===============

//let persona3 = new Persona('Carla', 'Ponce'); //Esto no se debe hacer: Persona is not defined

class Persona{ // Clase padre
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
        this._apellido = apellido
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    //Sobreescribiendo el método de la clase padre (Object)
    toString(){ // Regresa un String
        //Se aplica el polimorfismo que significa = multiples formas en tiempo de ejecución
        //El método que se ejecuta depende si es una referencia de tipo padre o hija
        return this.nombreCompleto();
    }
}

class Empleado extends Persona{ // Clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;        
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    // ===============CLASE 07 - LUNES-22/05/2023===============
    //Sobreescritura 
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}


let persona1 = new Persona('Martín', 'Pérez');
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
persona1.apellido = 'Messi'
console.log(persona1.apellido)

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2.nombre);
persona2.apellido = 'Maria Laura';
console.log(persona2.nombre);
persona2.apellido = 'Tevez';
console.log(persona2.apellido);

let empleado1 = new Empleado('María', 'Gimenez', 'Sistemas');
console.log(empleado1)

// ===============CLASE 07 - LUNES-22/05/2023===============
console.log(empleado1.nombreCompleto());

//Object.prototype.toString(); //Esta es la manera de acceder a atributos y métodos de manera dinámica
console.log(empleado1.toString());
console.log(persona1.toString());
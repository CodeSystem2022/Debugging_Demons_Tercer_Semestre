class Persona{
    static contadorPersonas = 0;

    constructor(nombre, apellido , edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido
    }

    get edad(){
        return this._edad;
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    set apellido(apellido){
        this._apellido = apellido
    }

    set edad(edad){
        this._edad = edad
    }

    toString(){
        return `Nombre y apellido : ${this._nombre} ${this._apellido}, edad ${this._edad}`
    }
}

class Empleado extends Persona{
    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpledo
    }

    get sueldo(){
        return this._sueldo
    }

    set sueldo(sueldo){
        this._sueldo = sueldo
    }

    toString(){
        return `Id empleado. ${this._idEmpleado}` +" "+ super.toString().concat(` Sueldo ${this._sueldo}.`)
    }
}

class Cliente extends Persona{

    static idCliente =  0

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad)
        this._idCliente =  ++Cliente.idCliente
        this._fechaRegistro = fechaRegistro
    }

    get idCliente(){
        return this._idCliente
    }

    get fechaRegistro(){
        return this._fechaRegistro
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro
    }

    toString(){
        return `Id Cliente : ${this._idCliente} ${super.toString()}, Fecha de Registro: ${this._fechaRegistro}`
    }

}

// Preuba clase Persona

let persona1 = new Persona('Pedro','Mota',25)
console.log(persona1.toString());


let persona2 = new Persona('Carla','Ortega',22)
console.log(persona2.toString());


// Preuba clase Empleado 

let empleado1 = new Empleado('Gabriel', 'Lopez', 24, 5000.00)
console.log(empleado1.toString());

let empleado2 = new Empleado('Juan', 'Gutierrez', 21, 1500.00)
console.log(empleado2.toString());

// Preuba clase Cliente

let cliente1 =  new Cliente('Oscar', 'Leonardi', 26, new Date('2023/05/25'))
console.log(cliente1.toString());

let cliente2 =  new Cliente('Marta', 'Godoy', 34, new Date('2022/07/09'))
console.log(cliente2.toString());


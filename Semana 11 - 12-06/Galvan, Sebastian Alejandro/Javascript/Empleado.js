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
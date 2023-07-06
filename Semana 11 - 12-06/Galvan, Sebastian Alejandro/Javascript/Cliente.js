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
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get getNombre(){
        return this._nombre
    }

    get getApellido(){
        return this._apellido
    }

    set setNombre(nombre){
        this._nombre = nombre
    }
    set setApellido(apellido){
        this._apellido = apellido
    }

}

let persona1 =  new Persona('Martin', 'Perez')
console.log(persona1.getNombre+" "+persona1.getApellido);
persona1.setNombre= "Leo";
persona1.setApellido = "Rodriguez";
console.log(persona1.getNombre+" "+persona1.getApellido);
let persona2 =  new Persona('Carlos', 'Lara')
console.log(persona2);

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)
        this._depeartameto =  departamento;
    }

    get departamento(){
        return this._depeartameto;
    }
    set departamento(departamento){
        this._depeartameto = departamento;
    }
}

let empleado =  new Empleado("Harry", "Lorens", "IT");
console.log(empleado);
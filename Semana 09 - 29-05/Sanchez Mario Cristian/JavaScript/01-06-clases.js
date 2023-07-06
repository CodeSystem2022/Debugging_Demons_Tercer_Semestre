// let persona3 = new Persona('Laura', 'Ponce');
// console.log(persona3);


class Persona{ //Clase padre
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
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }


}

class Empleado extends Persona{ //Clase hija
    constructor(nombre, apellido,departamento){
        super(nombre, apellido, departamento);
        this._departamento = departamento;
    }

    get departamento(){
        this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
}


let persona1 = new Persona('Martin','Perez',);
console.log(persona1.nombre)
persona1.nombre = 'Roberto Carlos';
console.log(persona1.nombre)


let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2.nombre);
persona2.nombre = 'Violeta';
console.log(persona2.nombre);

let empleado1 = new Empleado('Cristian', 'Sanchez','Ejecutivo' );
console.log(empleado1)
console.log(empleado1._apellido);
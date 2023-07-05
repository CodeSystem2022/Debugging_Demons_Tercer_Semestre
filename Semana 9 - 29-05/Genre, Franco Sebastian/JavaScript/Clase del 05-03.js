//let persona3 = new Persona('Prueba','Pruebita'); // No se puede inicizalizar una clase (no aplica el hosting como en las funciones que sí se pueden llamar y después declararse)
// class Persona extends Object // Si no extiende de nadie una clase implícitamente extendería de object y tendría sus métodos
class Persona{ 
    static contadorPersonas= 0; // Atributo estatico
    //email = 'Valor default del email' // Atributo no estatico
    static get MAX_OBJ(){
        return 5;
    }
    constructor(nombre, apellido){ // Si no se define el constructor js añade uno vacío de forma automática.
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.id_persona = ++Persona.contadorPersonas;
            //console.log('Se incrementa el contador: '+Persona.contadorObjetosPersona);
        }
        else{
            console.log('Se ha superado el máximo de objetos creados')
        }
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this.id_persona+ ' ' +this._nombre+' '+this._apellido;
    }
    // Sobre escribiendo el método de la clase padre Object
    toString(){ // Regresa un String
        // Se aplica el polimorfismo, que significa múltiples formas en tiempo de ejecución.
        // El método que se ejecuta depende de si es una referencia de tipo padre o hija
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('Saludo desde el método static')
    }
    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);
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
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento;
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

//Object.prototype.toString // Esta es la manera de acceder a atributos y métodos de manera dinamica

// console.log(empleado1.toString()); // Apuntamos a la clase hija aplicando el polimorfismo
// console.log(persona1.toString()); // Apuntamos a la clase padre

//persona1.saludar(); No se utiliza desde el objeto
// Persona.saludar();
// Persona.saludar2(persona1);
// Empleado.saludar();
// Empleado.saludar2();

// console.log(Persona.contadorObjetosPersona);
// console.log(Empleado.contadorObjetosPersona)
// console.log(persona1.email)
// console.log(empleado1.email)
//console.log(Persona.email) No se puede acceder desde la clase en si, porque no es estatico

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);
let persona3 = new Persona('Carla','Petorsi');
console.log(persona3.toString());
console.log(Persona.contadorPersonas);
let persona4 = new Persona('Franco', 'Diaz');
console.log(persona4.toString());
let persona5 = new Persona('Liliana', 'Paz');
console.log(persona5.toString())
// Se puede llegar a utilizar para limitar la cantidad de instancias de objetos y tener una mejor lectura del código.
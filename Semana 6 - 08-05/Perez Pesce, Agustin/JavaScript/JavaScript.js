// ===============CLASE 04 - LUNES-24/04/2023===============

let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@email.com',
    edad: 28,
    idioma: 'es',    
    get lang(){
        return this.idioma.toUpperCase(); // Convierte las minúsculas a mayúsculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){ // método o función en JavaScript
        return this.nombre + ' ' + this.apellido;
    },
    // ===============CLASE 05 - LUNES-09/05/2023===============
    get nombreEdad(){
        return 'El nombre es: ' + this.nombre + ' edad: ' + this.edad
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto())

console.log('Ejecutando con un objeto');
let persona2 = new Object(); // Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '5492618282821';

console.log('Creamos un nuevo objeto');;
console.log(persona2.telefono);
console.log(persona['apellido']); // Accedemos como si fuera un arreglo

console.log('Usamos el ciclo for in');
for(propiedad in persona){ //for in y accedemos al objeto como si fuera un arreglo
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log('Cambiamos y eliminamos un error');
persona.apellido = 'Betancud'; // Cambiamos dinámicamente un valor del objeto
delete persona.apellido; // Eliminamos el error
console.log(persona);

//Distintas formas de imprimir un objeto
//Número 1: la más sencilla concatenar cada valor de cada propiedad
console.log('Distintas formas de imprimir un objeto: forma 1');
console.log(persona.nombre + ', ' + persona.apellido);

//Número 2: A través del ciclo for in
console.log('Distintas formas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Número 3: La función Object.values()
console.log('Distintas formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Número 4: Utilizaremos el método JSON.stringify
console.log('Distintas formas de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

// ===============CLASE 05 - LUNES-09/05/2023===============

console.log('Comenzamos a utilizar el método get');
console.log(persona.nombreEdad);

console.log('Comenzamos con le método get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){ // Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;    
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona3('Leo', 'Lopez', 'lopezl@gmail.com');
padre.nombre = 'Luis'; // Modificamos el nombre
padre.telefono = '5492618282821';
console.log(padre);
console.log(padre.nombreCompleto()); // Utilizamos la función

let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);
console.log(madre.telefono);
console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos
//Caso objeto 1
let miObjeto = new Object(); //Esta es una opción formal

//Caso objeto 2
let miObjeto2 = {}; //Esta opción es breve y recomendada

//Caso String 1
let miCadena1 = new String('Hola'); //Sintaxis formal

//Caso String 2
let miCadena2 = 'Hola'; //Esta es la sintaxis simplificada y recomendada

//Caso con números 1
let miNumero1 = new Number(1); //Es formal no recomendable

//Caso con números 2
let miNumero2 = 1; //Sintaxis recomendada

//Caso boolean 1
let miBoolean1 = new Boolean(false); //Formal

//Caso boolean 2
let miBoolean2 = false; //Sintaxis recomendada

//Caso Arreglos 1
let miArreglo1 = new Array(); //Formal

//Caso Arreglos 2
let miArreglo2 = []; //Sintaxis recomendada

//Caso function 1
let miFuncion1 = new function(){}; //Toodo despues de new es considerado objeto

//Caso function 2
let miFuncion2 = function(){}; //Notación simplificada y recomendada

//Uso de prototype
Persona3.prototype.telefono = '2618383832';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '5492618383832';
console.log(madre.telefono);

//Uso de call y apply
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
        //return this.nombre + ' ' + this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara',    
}

//Método call
console.log(persona4.nombreCompleto2('Lic.', '54926118383834'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '5492618585856'));

//Método Apply
let arreglo = ['Ing.','5492618686865'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));

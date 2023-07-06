let x = 10; // Variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos')

//Objeto
let persona = { // Creamos un objeto en memoria que contiene una referencia, un valor hexadecimal.
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'es',
    
    get lang(){
        return this.idioma.toUpperCase(); // Convierte las minusculas en mayusculas
    },
    set lang(lang){
        return this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){ // Método o funcion en Js
        return this.nombre + ' ' + this.apellido; // Con this hacemos referencia al objeto, y accedemos a sus atributos.
    },
    get nombreEdad(){
        return 'El nombre es: ' +this.nombre+ ' y su edad es: '+this.edad;
    }

}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona); // Accedemos al objeto por completo
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');


let persona2 = new Object(); // Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '92191389013';

console.log(persona2.telefono) // Js es keysensitive Una letra en mayuscula o minuscula
// como tambien con acentos modifica totalmente su valor

console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); // Accedemos como si fuera un arreglo

console.log('Usamos ciclo for in');
//for in: recorremos persona
for(propiedad in persona){
    console.log(propiedad); // Nos permite acceder a su propiedad(en otro lenguajes conocidos como atributos)
    console.log(persona[propiedad]); // Recorremos como si fuera un arreglo.
}
console.log('Cambiamos y eliminamos un error');
//persona.apellido = 'Betancud'; // Cambiamos dinamicamente un valor del objeto
//persona.apellidos = 'Betancud'; // Por equivocación podemos agregar otra propiedad(atributo) tan solo por agg otra letra cuando accedemos.
persona.apellida = 'Betancud' // Lo creamos como ejemplo para luego eliminarlo
console.log(persona);

delete persona.apellida; // Borramos una propiedad
console.log(persona);

// Distinta formas de imprimir un objeto
// Número 1: La mas sencilla: concatenar cada valor de cada propiedad
console.log('Forma número 1');
console.log(persona.nombre+', '+persona.apellido);

// Número 2: A travéz del ciclo flor in
console.log('Forma número 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// Número 3: La función Object.values(), este metodo retorna nuestro obj pero como array
console.log('Forma número 3');
let peronsaArray = Object.values(persona);
console.log(peronsaArray);

// Número 4: Utilizaremos el método JSON.stringifly
console.log('Forma número 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el método get');
console.log(persona.nombreEdad);

console.log('Comenzamos a utilizar el méotodo get y set para idiomas');
console.log(persona.lang); // Es sin parentesis por el get
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){ // constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre +' '+this.apellido;
    }
}

let padre = new Persona3('Leo', 'Lopez', 'lopezl@mail.com')
padre.nombre = 'Luis'; // modificamos el nombre
padre.telefono = '123123010120'; // Una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto()); // utilizamos la función
let madre = new Persona3('Laura', 'Contrera', 'contreral@mail.com');
console.log(madre);
console.log(madre.telefono); // La propiedad no está definida
console.log(madre.nombreCompleto());

// Diferentes formas de crear objetos
// caso número 1
let miObjeto = new Object(); // Esta es una opción formal
// caso número 2
let miObjeto2 = {}; // Esta forma es breve y recomendada

// caso String 1
let miCadena1 = new String('Hola');
// caso String 2
let miCadena2 = 'Hola'; // Esta es la sintaxis simplificada y recomendada

// caso números 1
let miNumero = new Number(1); // Es formal no recomendable
// caso nuúmeros 2
let miNumero2 = 1; // Sintaxis recomendada

// caso boolean 1
let miBoolean1 = new Boolean(false); // Formal
// caso boolean 2
let miBoolean2 = false; // Recomendada

// caso Arreglos 1
let miArreglo1 = new Array(); //Formal
// caso Arreglos 2
let miArreglo2 = []; // Sintaxis recomendada

// caso funcion 1
let miFuncion1 = new function(){}; // Todo despues de new es cosiderado objeto
// caso funcion 2
let miFuncion2 = function(){};

//Uso de prototype
Persona3.prototype.telefono = '24612938572';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '123919192';
console.log(madre.telefono);

//Uso de call
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+this.nombre + ' ' + this.apellido+ ' ' +telefono;
        //return this.nombre+' '+this.apellido;
    }

}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(persona4.nombreCompleto2('Licenciado', '131281381334'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ingeniero', '64732178178456'));

// Método Apply
let arreglo = ['Ing', '412312123465'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));
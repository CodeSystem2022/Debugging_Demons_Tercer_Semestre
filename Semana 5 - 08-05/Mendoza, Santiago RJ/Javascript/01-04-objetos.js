let x = 10; //variable tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){//metodo o funcion en Javascript
        return this.nombre + ' ' + this.apellido;
    }, 
    get nombreEdad(){//Este es el metodo get
        return 'El nombre es '+this.nombre+', Edad: '+this.edad;
    }
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());

let persona2 = new Object();
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '54926118282821';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); //Accedemos como  si fuera una arreglo
console.log('Usamos el ciclo for in');
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
};
console.log('Cambiamos y eliminamos un error');
persona.apellida = 'Betancud'; //Cambiamos dinamicamente un valor del objeto
delete persona.apellida;   //Eliminamos el error   
console.log(persona);

//Distintas formas de imprimir un objeto
//Numero 1: la mas sencilla: concatenar  cada valor de la propiedad
console.log('Distintas formas de imprimir un objeto: forma 1');
console.log(persona.nombre+', '+persona.apellido);

//Numero 2: A traves del ciclo for in
console.log('Distintas formas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
};

//Numero 3: La funcion Object.values()
console.log('Distintas formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero 4: Utilizaremos el metodo JSON.stringify
console.log('Distintas formas de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el metodo get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el metodo get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre = 'Luis', apellido, email){ //constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
};
let padre = new Persona3('Leo', 'Lopez', 'lopezl@gmail.com');
padre.nombre = 'Luis'; //Modificamos el nombre
padre.telefono = '5492236870635'; //Una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto());
let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);
console.log(madre.telefono); //La propiedad no esta definida
console.log(madre.nombreCompleto());

//Diferentes formas de crear un Objeto
//caso 1
let miObjeto = new Object(); //Esta es una opcion formal
//caso 2
let miObjeto2 = {}; //Esta opcion es breve y recomendada

//caso String 1
let miCadena = new String('Hola'); //Sintaxis formal
//caso String 2
let miCadena2 = 'Hola'; //Esta es la sintaxis simplificada y recomendada

//caso numeros 1
let miNumber = new Number(1); // Sintaxis formal
//caso numeros 2
let miNumber2 = 1; //Sintaxis recomendada

//caso Boolean 1
let miBoolean = new Boolean(false); //Formal
//caso Boolean 2
let miBoolean2 = false; //Sintaxis recomendada

//caso Arreglos 1
let miArray = new Array(); //Formal
//caso Arreglos 2
let miArray2 = []; //Recomendada

//caso function 1
let miFunction = new function(){}; //Todo despues de new es considerado objeto
//caso function 2
let miFunction2 = function(){}; //Notacion simplificada

//Uso de prototype
Persona3.prototype.telefono = '5442236870635';
console.log(padre);
madre.telefono = '5442236870635';
console.log(madre.telefono);

//Uso de call
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido;
        //return this.nombre+': '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(persona4.nombreCompleto2('Lic.', '549223874522'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing. ', '5458722152'));

//Metodo apply
let arreglo = ['Ing.', '545872215254'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));
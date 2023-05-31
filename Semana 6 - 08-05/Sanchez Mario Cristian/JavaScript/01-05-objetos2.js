

//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@mail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase(); //Convierte las minúsculas a mayusculas
    },

    set lang(lang){
        this.idioma = lang.toLocaleUpperCase();
    },

    nombreCompleto: function(){ //Metodo o funcion en JavaScript
        return this.nombre+' '+this.apellido; //El this apunta al objeto
    },

    get nombreEdad(){
        return'El nombre es: '+this.nombre+', su edad es: '+ this.edad
    }

    
}

console.log('Comenzamos a utilizar el metodo get')
console.log(persona.nombreEdad);

console.log('Utilizamos  el metodo get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);


function Persona3(nombre, apellido, email){ //Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}

//Creamos nuevos objetos del mismo tipo
console.log('Creamos nuevos objetos del mismo tipo')

let padre = new Persona3('Leo', 'Lopez', 'lopezl@gmail.com');
console.log('Objeto padre')
padre.nombre = 'Luis';
padre.telefono = '+54 9 297 4732964'; //una propiedad exclusiva del objeto padre
console.log(padre);
console.log('Utilizamos el metodo para ver el nombre completo')
console.log(padre.nombreCompleto());




let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log('Objeto madre')
console.log(madre.telefono);//La propiedad no esta definida
console.log(madre);
console.log('Utilizamos el metodo')
console.log(madre.nombreCompleto());

// ('Distintas formas de crear objetos')
//('Caso objeto 1');

let miObjeto = new Object(); //Esta es una opcion formal
//('Caso objeto 2');
let miObjeto2 = {}; //Esta opcion es breve y recomendada

//('Caso String 1');
let miCadena1 = new String('Hola'); //Sintaxis formal

//('Caso String 2');
let miCadena2 = 'Hola'; //Esta es la sintaxis simplificada y recomendada

//('Caso boolean 1');
let miBoolean = new Boolean(false);

//('Caso boolean 2');
let miBoolean2 = false;

//('Caso Arreglos 1');
let miArreglo = new Array();

//('Caso Arreglos 2');
let miArreglo2 = [];

//('Caso Funciones 1');
let miFuncion = new function(){};

//('Caso Funciones 2');
let miFuncion2 = function(){};


//Uso de prototype
console.log('Uso de prototype para asignar un nuevo atributo')
Persona3.prototype.telefono = '+54 9 297 4732964';
console.log(padre.telefono);
console.log(madre.telefono);
madre.telefono = '297 4732964';
console.log(madre.telefono);


//Uso de call
console.log('Uso de call')
let persona4 = {
    nombre : 'Juan',
    apellido : 'Perez',
    nombreCompleto2 : function(titulo, telefono){
        return titulo + ': '+this.nombre+ ' ' + this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;

    }
    
}

let persona5 = {
    nombre : 'Carlos',
    apellido : 'Lara'
}

console.log(persona4.nombreCompleto2('Contador', '+54 9 297 4732964'));
console.log(persona4.nombreCompleto2.call(persona5, 'Programador', '+54 9 260 4634679'))

//Metodo Apply
let arreglo = ['Ingeniero', '+54 9 261 4978961']
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));



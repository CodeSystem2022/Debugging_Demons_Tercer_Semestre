let x = 10; // Variable de tipo primitivo
console.log(x.length);
console.log("Tipo Primitivo");

//Objeto
let persona = {
    nombre: 'Pepe',
    apellido: 'Biondi',
    email:'pepe@gmail.com',
    edad: 30,
    nombreCompleto: function(){ // Método o función en JavaScript.
        return this.nombre+' '+this.apellido;
    }
}

console.log('Ejecutamos con un objeto');

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());


let persona2 = new Object(); // Debe crear un nuevo objeto en memoria.
persona2.nombre = 'Juan';
persona2.direccion = 'Calle Oscura S/N°';
persona2.telefono = '5493471123456';
console.log('Creamos un nuevo objeto')
console.log(persona2.telefono);

console.log(persona['apellido']); // Accedemos como si fuera un arreglo.
//for in
for(propiedad in persona){
    console.log(propiedad); // Muestra las propiedades.
    console.log(persona[propiedad]); // Muestra todo, accede a los datos.
}

console.log('Corregimos un error');
persona.apellido = 'Betancud'; // Cambiamos dinámicamente un valor del objeto.
console.log(persona);

persona.apellido = 'Perez';
delete persona.apellida; // Elimina la propiedad.


console.log("Distintas formas de imprimir un objeto");

console.log("Número 1: la más sencilla - Concatenar cada valor de cada propiedad");
console.log(persona.nombre + ',' + persona.apellido);

console.log("Número 2: a través del ciclo for in");
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

console.log("Número 3: la función Object.values()");
let personaArray = Object.values(persona);
console.log(personaArray);

console.log("Número 4: Utilizaremos el método JSON.stringify");
let  personaString = JSON.stringify(persona);
console.log(persona);

//Uso de call
let persona4 = {
    nombre: 'Esteban',
    apellido: 'Dido',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': ' + this.nombre + ' '+ this.apellido+ ' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Esteban',
    apellido: 'Quito'
}

console.log(persona4.nombreCompleto2('Lic.', '5493471654321'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing. ', '5493411234561'));

//Método Apply
let arreglo = ['Ing ', '564231798456312546'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));
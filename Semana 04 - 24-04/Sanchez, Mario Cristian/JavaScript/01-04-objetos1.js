
console.log('Tipos primitivos')
let x = 10; //Variable de tipo primitiva
console.log(x.lenght);

//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@mail.com',
    edad: 30,
    nombreCompleto: function(){ //Metodo o funcion en JavaScript
        return this.nombre+' '+this.apellido; //El this apunta al objeto
    }
}

console.log('Ejecutando  un objeto')
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);

console.log('Ejecutando un metodo del objeto')
console.log(persona.nombreCompleto());

console.log('Creamos un objeto nuevo en memoria')
let persona2 = new Object();
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '+5492974732964';
console.log(persona2.telefono);

//Otras formas de acceder al objeto
//Como un arreglo
console.log('Accedemos al objeto como un arreglo')
console.log(persona['apellido']); 

//for in
console.log('Accedemos al objeto con un cliclo for')
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

//Agregar y eliminar propiedades de los Objetos
console.log('Agregamos nuevos atributos')
persona.apellida = 'Betancud'; //Cambiamos dinamicamente el valor de un objeto
console.log(persona)

delete persona.apellida; //Eliminamos el error
console.log('Eliminamos el nuevo atributo')
console.log(persona)


//Ejecutamos desde el navegador
//Distintas formas de imprimir un objeto
console.log('Distintas formas de imprimir un objeto')

//Num 1: La mas sensilla: concatenar cada valor de cada propiedad
console.log('La mas sensilla: concatenar cada valor de cada propiedad')
console.log(persona.nombre+' '+persona.apellido);

//Num 2: A traves del ciclo for in
console.log('Num 2: A traves del ciclo for in')
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Num 3: La funcion Object.values()
console.log('La funcion Object.values()')
let personaArray = Object.values(persona);
console.log(personaArray);

//Num 4: Utilizamos el metodo JSON.stringify
console.log('Utilizamos el metodo JSON.stringify');
let personaString = JSON.stringify(persona)
console.log(personaString);
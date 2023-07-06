let x = 10; //variable de tipo primitiva
console.log(x,length); undefined
console.log('Tipos primitivos'); Tipos primitivos

//objeto
let persona = {
    nombre: 'Carlos', 
    apelillo: 'Gil',
    email:'cgil@gmail.com',
    edad:30
    nombreCompleto: fuction(){ //metodo o funcion en javascrip
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){ //Este es el metodo get
        return 'El nombre es: ' this.nombre+', edad: '+this.edad;
    }
}
console.log('Comenzamos a utilizar el metodo get')
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombrecompleto());
console.log('Ejecutando con un objeto');
let persona2 = new object(); //Debe crear un nuevo objeto en la memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '22334543';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); //Accedemos como si fuera un arreglo Gil
console.log('Usamos el ciclo for in');
// for in accedemos al objeto  como si fuera un arreglo 
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log('Cambiamos y eliminamos un error');
persona.apellida = 'Bentancud'; //Cambiamos dinamicamento el valor del objeto
delete persona.apelillo;
console.log(persona);


// Distinta formas de imprimir un objeto
// Numero 1: la mas sencilla: Concatenar cada valor de cada propiedad

console.log('Distinta formas de imprimir un objeto forma 1');
console.log(persona.nombre+' , '+persona.apellido);

//Número 2: A través del ciclo for in 
console.log('Distinta formas de imprimir un objeto forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numero 3: La funcion object.values()
console.log('Distinta formas de imprimir un objeto forma 3');
let personaArray = object.values(persona);
console.log(personaArray);


//Numero 4: Utilizaremos el metodo JSON.stringfy
console.log('Distinta formas de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar en metodo get');
console.log(persona.nombre.Edad);
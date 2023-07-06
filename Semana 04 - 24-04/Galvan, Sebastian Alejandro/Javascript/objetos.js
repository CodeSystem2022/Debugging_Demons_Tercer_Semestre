let x = 10;

console.log(x);

let persona = {
    nombre: 'Carlos',
    apellido :'Gil',
    email : 'cgil@gmail.com',
    edad : 30,
    idioma: 'ES',
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido 
    },
    get nombreEdad(){
        return this.nombre + " " + this.edad 
    },
    set nuevoIdioma(lang){
        this.idioma = lang.toUpperCase();
    },
    get getIdioma(){
        return this.idioma.toUpperCase();
    }
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);

console.log(persona.nombreCompleto());


let persona2 = new Object();

persona2.name = 'Pedro'
persona2.direccion = 'Una descripcion'
persona2.telefono = '356131244588'

console.log(persona2.name);
console.log(persona2.direccion);
console.log(persona2.edad);

console.log(persona['apellido']);

console.log("-----------------------------------");
for (const key in persona) {
    if (Object.hasOwnProperty.call(persona, key)) {
        const element = persona[key];
        console.log(element);
    }
}

persona.apellido = "Velez"
console.log(persona);

persona.apeliido = "Velez"
console.log(persona);

delete persona.apeliido
console.log(persona);


// Formas de imprimr 

// 1
console.log(persona.nombre + " "+ persona.apellido);

// 2
for (const key in persona) {
        console.log(persona[key]);
        
}

// 3

let personaArray = Object.values(persona)
personaArray.forEach(dato => {
    console.log(dato);
});

// 4
console.log(personaArray);


// 5
let personaString =  JSON.stringify(persona)
console.log(personaString);


console.log(persona.nombreEdad);


console.log(persona.getIdioma);
persona.nuevoIdioma = 'en'
console.log(persona.getIdioma);












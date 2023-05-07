miFunction(8, 2); //Esto se le conoce como hosting

function miFunction(a, b){
    //console.log("Sumamos: " + (a + b));
    return a+ b;
};

//Llamamos a la funcion
miFunction(5, 4);

let resultado = miFunction(6, 7);

//Declaramos una funcion de tipo expresion o anonima
let x = function(a, b){ //necesita cierre con ;
    return a + b;
};
resultado = x(5, 6); //al llamarla se pone la variable y parentesis
console.log(resultado);

//Funciones de tipo self y invoking
(function(a, b){
    console.log('Ejecutando la funcion: ' + (a + b));
})(9, 6);

console.log(typeof miFunction);
function miFunctionDos(a, b){
    console.log(arguments.length);
}

miFunctionDos(5, 7, 3, 6);

//toString
var miFunctionTexto = miFunctionDos.toString();
console.log(miFunctionTexto);

//Funciones flecha
const sumarFunctionFlecha = (a, b) => a + b;
resultado = sumarFunctionFlecha(3, 7);//Asignamos el valor a una variable
console.log(resultado);

let sumar = function(a = 4, b = 8){
    console.log(arguments[0]);//muestra el parametro de: a
    console.log(arguments[1]);//muestra el parametro de: b
    console.log(arguments[2]);
    return a + b + arguments[2];
};
resultado = sumar(3, 2, 9);
console.log(resultado);

//Sumar todos los argumentos
let respuesta = sumarTodo(5, 4, 12, 10, 9);
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; //arguments es para arreglos
    };
    return suma;
};

//Tipos primitivos
let k = 10;
function cambiarValor(a){//Paso por valor
    a = 20;
}

cambiarValor(k);
console.log(k);

//Paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}
console.log(persona);
function cambiarValorObjeto(p1){
    p1.nombre = 'Ignacio'
    p1.apellido = 'Lopez'
}

cambiarValorObjeto(persona);
console.log(persona);
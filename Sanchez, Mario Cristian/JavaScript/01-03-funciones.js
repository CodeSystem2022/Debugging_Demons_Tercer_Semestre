miFuncion(10, 7); //HOISTING

function miFuncion(a, b){
    //console.log("Sumanos: "+ (a + b));
    return a + b;
}

//Llamamos la funcion
miFuncion(5, 4);

let resultado = miFuncion(8, 6) //Llamamos a la funcion y la asignamos a la variable
console.log(resultado);

//Declaramos una funcion de tipo expresion o anonima
let x = function(a, b){return a + b}; //siempre cerrar con ";"

resultado = x(25, 32)//Al llamarla se pone la variable y parentesis
console.log(resultado);


//Funciones de tipo self e invoking
(function(a, b){
    console.log('Ejecutando la funcion: ' + (a + b));
})(9, 6);

console.log(typeof miFuncion);//una funcion es un tipo de dato function


function miFuncionDos(a, b){
    
    console.log(arguments);//Para saber cuantos argumentos se han definido y sus posiciones
    console.log(arguments.length) //Cantidad de argumentos
}

miFuncionDos(8 , 6);

//toString
var miFuncionTexto = miFuncionDos.toString(); //Convierte la funcion a texto
console.log(miFuncionTexto);

//Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b; //no se utiliza la palabra reservada function, return, y las llaves {}
resultado = sumarFuncionFlecha(78, 92);
console.log("El resultado de la funcion flecha es: " + resultado);

//Argumentos y parametros
//Los parametros es la lista de variables que definimos en una funcion 
//Los argumentos son los valores que pasamos cuando llamamos a una funcion

//Funcion de tipo expresion
let sumar = function(a = 4, b = 8){
    console.log(arguments[0]); // muestra el parametro de a
    console.log(arguments[1]); // muestra el parametro de b
    
    return a + b + arguments[2];
}

resultado = sumar(3, 2, 9);
console.log("El resultado es: "+ resultado);

//Sumar todos los argumentos
let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log("La suma de todos los argumentos es: "+ respuesta);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];// arguments es para arreglos
    }
    return suma;
}


//Tipos primitivos

let k = 10; //Variable global
function cambiarValor(a){ //Paso por valor
    a = 20; //Variable local
}

cambiarValor(k);
console.log("El valor de k es: "+ k);

//Paso por referencia
//Definimos un objeto
const persona = {
    nombre: 'Juan',
    apellido: 'Lopez'
}
console.log('El valor del objeto es: ')
console.log(persona)
function cambiarValorObjeto(p1){
    p1.nombre = 'Lautaro'; //Modificamos los atributos a traves de la funcion
    p1.apellido = 'Sanchez';
}

cambiarValorObjeto(persona);
console.log("Despues de pasar por la funcion su valor es: ")
console.log(persona)
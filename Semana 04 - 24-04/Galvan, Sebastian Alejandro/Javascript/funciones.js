function miFuncion(a, b){
    return a + b
}
miFuncion(3,6)


let resultado = miFuncion(6, 7)
console.log(resultado);


// Funcion de tipo expresion
let x = function (a, b) {return a + b};
resultado = x(4,7)
console.log(resultado);


// Funciones self-invoking
(function(a,b){
    console.log('Ejecutamos la funcion: '+ (a + b));
})(5,6)


// 

function miFuncionDos(a, b){
    console.log(arguments);
}
miFuncionDos(5,6)

// To String
let miFuncionTexto = miFuncionDos.toString()
console.log(miFuncionTexto);

// Funciones flecha

const sumarFuncionFlecha = (a, b) => console.log("La suma es: " + (a + b))
sumarFuncionFlecha(11 , 45)

// Argumentos y Parámetros
// En la declaracion parámetros
// En la invocación argumentos

let suma =  sumarTodos(5,4,6,1,2,7)
console.log(suma);

function sumarTodos(){

    let suma = 0
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}

// Pasos por valor y referencia
// Tipos primitivos: valor 
// No primitivos: referencia
let k = 10
function cambiarValor(a) {
    a = 20;
}

cambiarValor(k)

const persona = {
    nombre : 'Juan',
    apellido: 'Lopez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Ignacio'
    p1.apellido = 'Perez'
}

cambiarValorObjeto(persona)
console.log(persona);
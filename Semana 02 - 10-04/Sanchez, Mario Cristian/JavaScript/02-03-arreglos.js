//let autos = new Array('Ferrera', 'Renault', 'BMW'); Forma antigua para declarar un Array

//Sintaxis actual
const autos = ['Ferrari', 'Renault', 'BMW'];
console.log(autos);

//Recorremos los elementos de un arreglo
//De forma manual
console.log('mi auto es una: '+ autos[0]);
console.log('mi auto es una: '+ autos[1]);

//Con un ciclo for
for(let i = 0; i < autos.length; i++){
    console.log('Elemento nº'+ i + ': ' + autos[i]);
}

//Modificamos los elementos del arreglo
autos[1] = 'Volvo';

console.log(autos[1]);

//Agregamos nuevos valores al arreglo
autos.push('Audi'); //Metodo para agregar un elemento al final
console.log(autos);

//Otras formas de agregar elementos al arreglo
autos[autos.length] = "Porche";
console.log(autos);

//Tercera forma de agregar elementos (TENER CUIDADO)
autos[6] = 'Renault'; //Se salto una posicion, dejo la 5º posicion vacia
console.log(autos);

//Como preguntar si es un Array o Arreglo
console.log(Array.isArray(autos)); //Devuelve un resultado Booleando

//Otra manera de identificar un Array
console.log(autos instanceof Array); //Tambien devuelve un booleano




//Creacion de array o arreglos
//let autos = new array('Ferrari','Renaul','BMW') /C1 L2
const autos = ['Ferrari','Renaul','BMW'];
console.log(autos); ['Ferrari','Renaul','BMW']

//Recorremos los elementos de los arreglos L2C2
console.log(autos[0]);
console.log(autos[2]);

for(let i=0 ; i < autos.length; i++){
    console.log(i+' : '+autos[i]);
}

//Modificamos los elementos de los arreglos L2c3
autos[1] = 'Volvo';
console.log(autos[1]);

//Agregamos nuevos valores
autos.push('Audi');
console.log(autos);

//Otras formas de agregar elementos al arreglo
autos[autos.length] = 'Porche';
console.log(autos);

//Tercera forma de agregar elementos CUIDADO
autos[6] = 'Renaul';
console.log(autos);

//Como preguntar si es un array o arreglo L2C4
console.log(Array.isArray(autos)); // Devuelve resultado booleano


console.log(autos instanceof array); //Preguntamos si la variable es instancia de la clase array C4L2










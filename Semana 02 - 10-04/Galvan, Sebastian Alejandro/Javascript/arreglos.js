// let autos = new Array('Ford', 'Fiat', 'Ranault', 'Toyota')
// console.table(autos)


const autos = ['Ford', 'Chevrolet', 'Fiat', 'Toyota']
// console.table(autos)

// Recorremos los elementos del array

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i])
}

// Modificamos los elementos del arreglo
autos[1] = 'Volvo'
console.log(autos[1]);


// Agregamos nuevos valores
autos.push('Mitsubishi')
console.table(autos)

// Otras formas de agregar elementos a un elementos

autos[autos.length] = 'Kia'
console.table(autos)

// Como preguntar si es un Array 
console.log(Array.isArray(autos));

console.log(autos instanceof Array);
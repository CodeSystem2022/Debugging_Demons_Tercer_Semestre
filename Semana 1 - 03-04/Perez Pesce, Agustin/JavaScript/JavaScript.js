// ===============CLASE 01 - LUNES-03/04/2023===============

// while 
let contador = 0;
while (contador < 3) {
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while");

// do while
let conteo = 0;
do {
    console.log(conteo)
    conteo++;
} while (conteo < 3);
console.log("Fin del ciclo do while")

// for
for (let contando = 0; contando < 3; contando++) {
    console.log(contando);
}
console.log("Fin del ciclo for")

// Palabra reservada break
for (let contando = 0; contando <= 10; contando++) {
    if (contando % 2 == 0) {
        console.log(contando); // Muestra todos los pares
        break; // Al encontrar el primer número par se va a romper el ciclo
    }
}
console.log("Termina el ciclo al encontrar el primero número par")

// La palabra reservada continue y Etiquetas Labels
inicio:
for (let contando = 0; contando <= 10; contando++) {
    if (contando % 2 !== 0) {        
        continue inicio; // Continua a la siguiente intereacción
    }
    console.log(contando);
}
console.log("Termina el ciclo")

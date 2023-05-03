// while
let contador = 0
while(contador < 3){
    console.log(contador);
    contador++;
}

console.log("Fin del ciclo while");

// do while 
let conteo = 0;

do{
    console.log(conteo);
    conteo++;
}while(conteo<3);

console.log("Fin del ciclo do while");

// for
for (let contador = 0; contador < 3; contador++) {
    console.log(contador);    
}
console.log("Fin del ciclo for");

// Palabra resetvada Breack

for (let contador = 0; contador <=10; contador++) {
    if (contador % 2 == 0) {
        console.log(contador);
        break;
    }
}
console.log("Termina el ciclo al encontrar el primer número par");

// Palabra Continue
for (let contador = 0; contador <=10; contador++) {
    if (contador % 2 != 0) {
        continue;
    }
    console.log(contador); 
}
console.log("Termina el ciclo");

// Palabra Continue y etiquetas
inicio: 
for (let contador = 0; contador <=10; contador++) {
    if (contador % 2 != 0) {
        break inicio;
    }
    console.log(contador); 
}
console.log("Termina el ciclo");


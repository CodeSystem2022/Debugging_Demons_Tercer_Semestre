//While
let contador = 0;
while(contador < 3){
    console.log(contador);
    contador ++;
}

console.log ("Fin del ciclo while");


//Do While
let conteo = 0;
do{
    console.log(conteo);
    conteo ++;
}while(conteo < 3);


console.log ("Fin del ciclo do while");


//For
for(let contando = 0; contando < 3; contando++){
    console.log(contando);
}

console.log ("Fin del ciclo for");


//Palabra reservada Break

for(let contando = 0; contando < 10; contando++){
    if(contando % 2 == 0){
        console.log(contando);// Muestra todos los numeros pares
        break; // rompe el ciclo al encontrar el primer numero par
    }
}

console.log("Termina el ciclo al encontrar el primer numero par")


//Palabra reservada continue

for(let contando = 0; contando < 10; contando++){
    if(contando % 2 !== 0){
        continue; // Va a continuar a la siguiente iteracion
        
    }
    console.log(contando);
}

console.log("Termina el ciclo ")


// Etiquetas Labels
inicio:
for(let contando = 0; contando < 10; contando++){
    if(contando % 2 !== 0){
        break inicio; 
        
    }
    console.log(contando);
}

console.log("Termina el ciclo ")
// Ciclos:

// while:
let contador = 0;
while(contador < 3){
    console.log(contador);
    contador++;
}
console.log('Fin del ciclo while');

// do while:
let conteo = 0;
do{
    console.log(conteo);
    conteo++;
}while(conteo < 3);
console.log('Fin del ciclo do while')

// ciclo for:
for ( let i = 0; i < 3; i++ ){
    console.log(i);
} 
console.log('Fin del ciclo for');

// Palabra reservada break:
for(let i = 0; i <= 10; i++){
    if( i % 2 == 0){
		 console.log(i); // muestra todos los pares
        break;
    }   
}

// Palabra reservada continue:
for(let i = 0; i <= 10; i++){
    if( i % 2 !== 0){		 
        continue;
    }
    console.log(i);
}
console.log("Termina el ciclo.")

//Etiqueta Labels:
inicio:
for(let i = 0; i <= 10; i++){
    if( i % 2 !== 0){
        continue inicio; // ir a la siguiente iteración
    }
    console.log(contando);
}
console.log("Termina el ciclo.")
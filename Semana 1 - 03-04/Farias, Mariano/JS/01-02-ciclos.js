// Wile
let contador = 0;
while (contador < 3){ //whie significa mientras
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while");

//do while
let conteo = 0;
do{console.log(conteo);
    conteo++;

}while(conteo < 3);
console.log("Fin del ciclo do while");  //Fin de ciclo do while

//for

for( let contando = 0; contando < 3; contando++) {
    console.log(contando); 0, 1, 2
}

console.log("Fin del ciclo for"); //Fin de ciclo do while

//Palabra reservada break
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 == 0){
        console.log(contando); //Muestra todos los pares
        break;
    }
}
console.log("Termina el ciclo al encontrar el primer número par ");

//La  palabra continue y Etiquetas lebels
inicio:
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){
        continue inicio;        
    }
    console.log(contando)
}
console.log("Termina el ciclo");




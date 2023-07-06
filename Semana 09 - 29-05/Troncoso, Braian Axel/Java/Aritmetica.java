package aritmetica;

import Excepciones.OperacionExcepcion;

public class Aritmetica {
    public static int division(int numerador, int denominador) throws OperacionExcepcion {
        if(denominador == 0){
            throw new OperacionExcepcion("Division entre cero");
        }
        return numerador / denominador;
    }
}
// throws = tirar (si ocurre un error, quiero tirar este mensaje)
// try = intentar (por ejm, problablemente esta funcion pueda arrojar un error por algun motivo)
// catch = capturar(si ocurre el error lo capturo y digo que haga lo que quiera, para que la app no se detenga y continue el flujo)
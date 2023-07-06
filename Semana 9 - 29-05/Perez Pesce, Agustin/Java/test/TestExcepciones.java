// ===============CLASE 08 - LUNES-31/05/2023===============
package test;

import excepciones.OperacionExcepcion;

import static aritmetica.Aritmetica.division;

public class TestExcepciones {
    public static void main(String[] args) {
        
        int resultado = 0;
        try {
            resultado = division(10, 0);
        }catch (OperacionExcepcion e){
            System.out.println("Occurió un error de tipo OperacionExcepcion");
            System.out.println(e.getMessage());
        }catch (Exception e){
            e.printStackTrace(System.out); //Se conoce como la pila de excepciones
            System.out.println(e.getMessage());
        }finally {
            System.out.println("Se reviso la división entre cero");
        }
        System.out.println("La variable de resultado tiene como valor: " + resultado);
    }
}

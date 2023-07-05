package test;

import Excepciones.OperacionExcepcion;

import static aritmetica.Aritmetica.division; // Importamos solamente el método de la clase Aritmetica

public class TestExcepciones {
    public static void main(String[] args) {
        int resultado = 0;
        try {
            resultado = division(10,0);
        }catch (OperacionExcepcion e){
            System.out.println("Ocurrió un error de tipo OperacionExcepcion");
            System.out.println(e.getMessage());
        }
        catch (Exception e){
            System.out.println("Ocurrió un error");
            e.printStackTrace(System.out); // Se conoce como la pila de excepciones
            System.out.println(e.getMessage());
        } finally {
            System.out.println("Se revisó la división entre cero");
        }
        System.out.println("El valor de la variable resultado es: "+resultado);
    }
}
// Usamos el blocke Try para que nuestro programa no termine de forma abrupta.
// Se pueden agregar SIEMPRE más catch pero solamente respetando la jerarquía de clases cómo en Python.
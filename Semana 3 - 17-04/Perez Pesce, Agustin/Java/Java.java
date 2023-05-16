package test;

// ===============CLASE 02 - MIERCOLES-19/04/2023===============

public class TestArgumentosVariables {
    public static void main(String[] args) {
        imprimirNumeros(3, 4, 5);
        imprimirNumeros(1, 2);
        variosParametros("Juan", "Perez", 7, 8, 9);
    }

    private static void variosParametros(String nombre, String apellido, int ...numeros){
        System.out.println("Nombre: " + nombre + " Apellido: " + apellido);
        imprimirNumeros(numeros);
    }
    private static void imprimirNumeros(int... numeros) { //Cuando utilizamos un tipo de dato (EJ: int) y los tres
        // puntos suspensivos quiere decir que vamos a recibir argumentos variables por lo tanto no sabemos la
        // cantidad de elementos que vamos a recibir ya que es una cantidad indefinida de elementos
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Elementos: " + numeros[i]);
        }
    }
}

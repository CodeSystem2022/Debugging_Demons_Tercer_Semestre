package Clase2;

public class TestArgumentosVariables {

    public static void main(String[] args) {
        imprimirNumeros(2,3,4,5,6);
        variosParametros("Juan",2,3,4,5,7);

    }

    private static void variosParametros(String nombre, int ...numeros){
        System.out.println("Hola ".concat(nombre));
        for (int numero :
                numeros) {
            System.out.println("numero = " + numero);
        }
    }
    private static void imprimirNumeros(int ...numeros){
        for (int numero : numeros) {
            System.out.println(numero);
        }
    }
}

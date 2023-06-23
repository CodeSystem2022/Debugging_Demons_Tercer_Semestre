import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true){
            System.out.println("******* Aplicación Calculadora *******");
            mostrarMenu();
            try{
                var operacion = Integer.parseInt(entrada.nextLine());
                if(operacion >= 1 && operacion <=4){
            ejecutarOperacion(operacion,entrada);
                } else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    break;
                }else {
                    System.out.println("Operación erronea: " + operacion);
                }// Fin del if
                // Imprimimos un salto de linea
                System.out.println();
            }catch (Exception e){ // Fin del try, comienzo del catch
                System.out.println("Ha ocurrido un error: " + e.getMessage());
                System.out.println();
            }
        }// Fin del while
    }// Fin del main
    private static void mostrarMenu(){
        //Mostramos el menú
        System.out.println("""
                    1. Suma
                    2. Resta
                    3. Múltiplicación
                    4. División
                    5. Salír
                    """);
        System.out.print("¿Qué operación desea realizar?: ");
    }// Fin de la funcion mostrarMenu
    private static void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.print("Digite el valor para operando 1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para operando 2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());

        double resultado;
        switch (operacion){
            case 1 -> { // Suma
                resultado = operando1 + operando2;
                System.out.println("El resultado de la suma es: " + resultado);
            }
            case 2 -> { // Resta
                resultado = operando1 - operando2;
                System.out.println("El resultado de la resta es: " + resultado);
            }
            case 3 -> { // Multiplicación
                resultado = operando1 * operando2;
                System.out.println("El resultado de la multiplicación es: " + resultado);
            }
            case 4 -> { //División
                resultado = operando1 / operando2;
                System.out.println("El resultado de la división es: " + resultado);
            }default -> System.out.println("Operación erronea: " + operacion);

        }// Fin del switch
    }// Fin de la funcion ejecutarOperacion
}// Fin de la clase

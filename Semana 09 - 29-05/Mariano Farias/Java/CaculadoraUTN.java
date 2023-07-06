import java.util.Scanner;

public class CaculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true){

            System.out.println("******* Aplicacion Calculadora *******");
            mostrarMenu();

            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {


                } // FIN DEL IF
                else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    break; //Rompe el cliclo y sale
                } else {
                    System.out.println("Opcion erronea: " + operacion);
                }
                //Imprimimos salto de linea antes de repetir el menu
                System.out.println("");
            } catch (Exceptione e) { //Fin del try comienza el catch
                System.out.println("Ocurrio un error: " + e.getMessage());
                System.out.println();
            }//FIn del catch
        }// FIn de ciclo
    } // Fin  main

    private static void mostrarMenu(){
        //Mostramos el menú
        System.out.println("""
                    1. Suma
                    2. Resta
                    3. Multiplicadion
                    4. División
                    5. Salir
                    """);
        System.out.print("Operación a realizar?");

    }// Fin método MOstrar Menu

    private static void ejecutarOperacion(int operacion, Scanner entrada) {
        System.out.println("Digite el valor para el operando1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.println("Digite el valor para el operando2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        ejecutarOperacion(operacion, entrada);
        double  resultado;
        switch (operacion) {
            case 1 -> { //SUMA
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma: " + resultado);
            }
            case 2 -> { //RESTA
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
            }

            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicación" + resultado);
            }

            case 4 -> {
                resultado = operando1 / operando2;
                System.out.println("Resultado de la división" + resultado);
            }

            default -> System.out.println("Opción erronea: " + operacion);
        } //fin swctch


    } // Fin metodo ejecutarOperacion


} // Fin class

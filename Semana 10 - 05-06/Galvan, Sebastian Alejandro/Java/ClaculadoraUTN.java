package Clase9;

import java.util.Scanner;

public class ClaculadoraUTN {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("           Aplicacion Calculadora           ");
            mostrarMenu();

            try {
                var operacion = Integer.parseInt(scanner.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    System.out.print("Digitenel valor para el operando 1: ");
                    var operando1 = Integer.parseInt(scanner.nextLine());
                    System.out.print("Digitenel valor para el operando 2: ");
                    var operando2 = Integer.parseInt(scanner.nextLine());

                    int resultado;
                    switch (operacion) {
                        case 1 -> {
                            resultado = operando1 + operando2;
                            System.out.println("resultado:" + resultado);
                        }
                        case 2 -> {
                            resultado = operando1 - operando2;
                            System.out.println("Resultado de la resta " + resultado);
                        }
                        case 3 -> {
                            resultado = operando1 * operando2;
                            System.out.println("El resultado de la multiplicacion" + resultado);
                        }
                        case 4 -> {
                            resultado = operando1 / operando2;
                            System.out.println("Resultado de la division " + resultado);
                        }
                        default -> System.out.println("Opción erronea:" + operacion);

                    }

                }
                else if (operacion == 5) {
                    System.out.println("Cerrando Programa.");
                    break;
                } else {
                    System.out.println("Opcion erronea" + operacion);
                }

            } catch (Exception e) {
                System.out.println("Ocurrió un error" + e.getMessage());
                System.out.println();
            }
        }
    }

    private static void mostrarMenu() {

        System.out.println("""
                1. Suma
                2. Resta
                3. Multiplicacion
                4. Division
                5. Salir
                """);
        System.out.print("Ingrese operacion a realizar");
    }
}


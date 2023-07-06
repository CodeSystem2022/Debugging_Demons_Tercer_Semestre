package Clase10;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadosPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        List <Persona>personas = new ArrayList<>();

        var salir = false;

        while(!salir){
            mostrarMenu();
            try{
                salir = ejecutarOperacion(entrada,personas);
            } catch(Exception e){
                System.out.println("Ocurrio un error: "+e.getMessage());
            }
            System.out.println();
        }

    }

    public static void mostrarMenu() {

        System.out.print("""
                    Listado de Personas    
                1-Agregar
                2-Listar
                3-Salir
                """);
        System.out.println("Ingrese opcion");
    }
    private static boolean ejecutarOperacion(Scanner entrada,List<Persona>personas){
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;
        switch (opcion){
            case 1 ->{
                System.out.println("Ingrese nombre: ");
                var nombre = entrada.nextLine();
                System.out.println("Ingrese numero de telefono: ");
                var telefono = entrada.nextLine();
                System.out.println("Ingrese Email: ");
                var email = entrada.nextLine();
                var persona = new Persona(nombre,telefono,email);
                personas.add(persona);
                System.out.println("La lista tiene: "+personas.size()+" personas");
            }
            case 2 ->{
                System.out.println("listado de personas");
                personas.forEach(System.out::println);
            }
            case 3 ->{
                System.out.println("Hasta pronto: ");
                salir = true;
            }
            default -> System.out.println("opcion incorrecta: "+ opcion);
        }
        return salir;
    }
}
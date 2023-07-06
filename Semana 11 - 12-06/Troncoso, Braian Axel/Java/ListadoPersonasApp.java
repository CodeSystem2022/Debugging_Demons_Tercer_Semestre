import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        // Definimos la lista fuera del ciclo while
        List<Persona> personas = new ArrayList<>();
        var salir = false;

        while (!salir){
            mostrarMenu();
            try {
                salir = ejecutarOperacion(entrada, personas);
            } catch (Exception e){ // Fin del Try
                System.out.println("Ocurrió un error: "+e.getMessage());
            }// Fin del catch
            System.out.println(); // Agregamos un salto de linea
        }// Fin del ciclo while
    }// Fin del main


    public static void mostrarMenu(){
        // Mostramos las opciones
        System.out.println("""
                ******* Listado de Personas *******
                1. Agregar
                2. Listar
                3. Salir
                """);
        System.out.println("Digite una de las opciones: ");
    }// Fin de la funcion mostrarMenu()

    public static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas){
    var opcion = Integer.parseInt(entrada.nextLine());
    var salir = false;
    switch (opcion){
        case 1 ->{ // Agregar una persona a la lista
            System.out.print("Digite el nombre: ");
            var nombre = entrada.nextLine();
            System.out.print("Digite el telefono: ");
            var telefono = entrada.nextLine();
            System.out.print("Digite el email: ");
            var email = entrada.nextLine();
            // Creamos el objeto persona
            Persona persona = new Persona(nombre,telefono,email);
            // Agregamos el objeto a la lista
            personas.add(persona);
            System.out.println("La lista tiene: "+ personas.size()+" elementos");
        }// Fin del caso 1
    case 2 ->{// Mostrar lista de personas
        System.out.println("Listado de personas: ");
        // Mejoras con lambda y él método de referencia
        // personas.forEach((persona -> System.out.println(persona))); Opcion 1 con lambda
        personas.forEach(System.out::println); // A esto se le conoce como método de referencia
    }// Fin del caso 2
    case 3 ->{
        System.out.println("Hasta pronto");
            salir = true;
        }// Fin del caso 3
        default -> System.out.println("Opcion incorrecta: "+ opcion);
    }// Fin del switch
    return salir;
    }// Fin de la funcion EjecutarOPeración
}// Fin de la clase

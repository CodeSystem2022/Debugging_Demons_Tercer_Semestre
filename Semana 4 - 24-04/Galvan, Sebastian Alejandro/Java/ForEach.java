package Clase3;

public class ForEach {
    public static void main(String[] args) {
        int edades[] = {5, 6, 8, 9};

        for (int edad: edades
             ) {
            System.out.println("edad = " + edad);
        }


        Persona personas[] =  {new Persona("Juan"),
        new Persona("Maria"), new Persona("Luis")};

        for (Persona persona: personas
             ) {
            System.out.println("persona = " + persona);
        }
    }
}

package test;

import domain.Persona;

public class TestForEach {
    public static void main(String[] args) {
        int edad[] = {5, 6, 8, 9}; //Sintaxis resumida

        for(int edades: edad){ //Sintaxis del ForEach
            System.out.println("Edad = "+ edades);
        }

        Persona personas[] = {new Persona("Juan"), new Persona("Carlos"), new Persona("Beatriz")};

        //ForEach
        for(Persona persona: personas){
            System.out.println("Persona = "+ persona);
        }
    }
}

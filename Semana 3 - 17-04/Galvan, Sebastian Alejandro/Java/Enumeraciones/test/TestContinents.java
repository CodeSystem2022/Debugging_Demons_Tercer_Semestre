package Clase2.Enumeraciones.test;

import Clase2.Enumeraciones.Continentes;
import Clase2.Enumeraciones.Dias;

public class TestContinents {

    public static void main(String[] args) {
        System.out.println("Continente 1: " + Continentes.ASIA);
        System.out.println("Continente 2: " + Continentes.AFRICA);
        System.out.println("Continente 3: " + Continentes.AMERICA);
        System.out.println("Continente 4: " + Continentes.EUROPA);
        System.out.println("Continente 5: " + Continentes.OCEANIA);

        indicarContinente(Continentes.EUROPA);

    }

    private static void indicarContinente(Continentes continente){
        switch (continente){
            case ASIA     -> System.out.println("ASIA: "+ Continentes.ASIA.getPoblacion());
            case AFRICA   -> System.out.println("AFRICA: "+ Continentes.AFRICA.getPoblacion());
            case AMERICA  -> System.out.println("AMERICA: "+ Continentes.AMERICA.getPoblacion());
            case EUROPA   -> System.out.println("EUROPA: "+ Continentes.EUROPA.getPoblacion());
            case OCEANIA  -> System.out.println("OCEANIA: "+ Continentes.OCEANIA.getPoblacion());
            default        -> System.out.println("Continente no válido");
        }
    }




}

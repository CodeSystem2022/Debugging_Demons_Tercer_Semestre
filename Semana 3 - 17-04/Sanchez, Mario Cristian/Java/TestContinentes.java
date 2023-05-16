package test;

import enumeraciones.Continentes;

public class TestContinentes {
    public static void main(String[] args) {
        System.out.println("Continente N° 1: "+ Continentes.AFRICA);
        System.out.println("N° de paises en este continente: "
                + Continentes.AFRICA.getPaises());
        System.out.println("N° de habitantes en el continente: "
                + Continentes.AFRICA.getHabitantes());

        System.out.println("Continente N° 2: "+ Continentes.EUROPA);
        System.out.println("N° de paises en este continente: "
                + Continentes.EUROPA.getPaises());
        System.out.println("N° de habitantes en el continente: "
                + Continentes.EUROPA.getHabitantes());

        System.out.println("Continente N° 3: "+ Continentes.ASIA);
        System.out.println("N° de paises en este continente: "
                + Continentes.ASIA.getPaises());
        System.out.println("N° de habitantes en el continente: "
                + Continentes.ASIA.getHabitantes());



        System.out.println("Continente N° 4: "+ Continentes.AMERICA);
        System.out.println("N° de paises en este continente: "
                + Continentes.AMERICA.getPaises());
        System.out.println("N° de habitantes en el continente: "
                + Continentes.AMERICA.getHabitantes());


        System.out.println("Continente N° 5: "+ Continentes.OCEANIA);
        System.out.println("N° de paises en este continente: "
                + Continentes.OCEANIA.getPaises());
        System.out.println("N° de habitantes en el continente: "
                + Continentes.OCEANIA.getHabitantes());



    }
}

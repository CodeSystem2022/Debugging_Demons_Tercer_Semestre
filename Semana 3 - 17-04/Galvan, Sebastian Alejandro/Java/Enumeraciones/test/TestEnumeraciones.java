package Clase2.Enumeraciones.test;

import Clase2.Enumeraciones.Dias;

public class TestEnumeraciones {

    public static void main(String[] args) {
        System.out.println("DIA 1: " + Dias.LUNES);
        System.out.println("DIA 2: " + Dias.MARTES);
        System.out.println("DIA 3: " + Dias.MIERCOLES);
        System.out.println("DIA 4: " + Dias.JUEVES);
        System.out.println("DIA 5: " + Dias.VIERNES);
        System.out.println("DIA 6: " + Dias.SABADO);
        System.out.println("DIA 7: " + Dias.DOMINGO);

        indicarDiaSemana(Dias.MIERCOLES);

    }
    
    private static void indicarDiaSemana(Dias dia){
        switch (dia){
            case LUNES     -> System.out.println("Primer dia de la semana.");
            case MARTES    -> System.out.println("Segundo dia de la semana");
            case MIERCOLES -> System.out.println("Tercer dia de la semana");
            case JUEVES    -> System.out.println("Cuarto dia de la semana");
            case VIERNES   -> System.out.println("Quino dia de la semana");
            case SABADO    -> System.out.println("Sexto dia de la semana");
            case DOMINGO   -> System.out.println("Septimo dia de la semana");
            default        -> System.out.println("Dia no válido");
        }
    }

}

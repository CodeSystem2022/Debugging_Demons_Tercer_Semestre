package Clase5;

import Clase4.Empleado;

public class TestConversionDeObjetos {

    public static void main(String[] args) {

        Empleado empleado;
        empleado = new Escritor("Juan", 5000,TipoEscritura.CLASISCO);

//        Escritor escritor = (Escritor) empleado;
//        System.out.println(escritor);

//        Upcasting
//        Empleado empleado1 = escritor;
        System.out.println(empleado.obtenerDetalles());

//        Downcasting
        System.out.println(((Escritor) empleado).obtenerDetalles());

    }
}

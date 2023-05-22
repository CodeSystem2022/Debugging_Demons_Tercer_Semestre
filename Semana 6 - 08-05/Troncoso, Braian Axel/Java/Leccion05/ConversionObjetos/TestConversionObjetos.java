package test;
import domain.*;

public class TestConversionObjetos {
    public static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
        //System.out.println("empleado = " + empleado);
        //Estamos definiendo una variable de tipo Empleado que apunta a la asignacion de memoria en Escritor accediendo a su constructor
        // En tiempo de compilación si hago click en obtenerDetalles me mandaria al método de Empleado
        // Pero en tiempo de ejecución me mandaria al método de la clase Escritor por el polimorfismo
        System.out.println(empleado.obtenerDetalles()); //Si queremos acceder al método de la clase escritor
        // empleado.getTipoEscritura(); No se puede hacer


        // DrownCasting
        // ((Escritor)empleado).getTipoDeEscritura();// Tenemos dos opc esta es la primera
         Escritor escritor = (Escritor)empleado; // Esta es la segunda opción


        // Upcasting
         Empleado empleado2 = escritor;
         System.out.println(empleado2.obtenerDetalles());
        // Los tipos que tienen más bytes soportan tipos con menos cantidad de bytes pero viceversa no aplica igual
        // Por eso tenemos que indicar una conversión de manera explicita, como vimos en tipos primitivos
        // Acá es lo mismo pero trabajando con la jerarquias de clases.
        // Convertimos con downcasting un tipo de la clase padre a la clase hija
        // En el Upcasting estamos convirtiendo un tipo hijo a un tipo padre
        // y asi acceder a sus valores

    }
}

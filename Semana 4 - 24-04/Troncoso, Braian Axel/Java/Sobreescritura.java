package test;

import domain.Empleado;
import domain.Gerente;

public class Sobreescritura {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan",10000);
        //System.out.println("empleado1 = " + empleado1);
        imprimir(empleado1);

//        Gerente gerente1 = new Gerente("Jose",5000,"Sistemas");
        //System.out.println("gerente1.obtenerDetalles() = " + gerente1.obtenerDetalles());
        empleado1 = new Gerente("José",5000,"Sistemas");
        imprimir(empleado1);
        //imprimir(gerente1);

    }

    // Aplicamos polimorfismo
    public static void imprimir(Empleado empleado){ //La variable tipo Empleado puede apuntar objetos de tipo hijo
        String detalles = empleado.obtenerDetalles();
        System.out.println("Detalles: " + detalles);// Cambia la referencia de memoria
    }
}
/*
En esta línea de código se está creando una variable de tipo Empleado llamada empleado1,
y se le está asignando una nueva instancia de la clase Gerente utilizando el constructor de la clase Gerente que recibe
como parámetros un String para el nombre, un double para el salario y otro String para el departamento.
La primera parte, Empleado empleado1 = new Empleado("Juan",10000), crea un objeto de tipo Empleado con nombre "Juan" y
un salario de $10000, y lo asigna a la variable empleado1.
La segunda parte, empleado1 = new Gerente("José",5000,"Sistemas"), crea un nuevo objeto de tipo Gerente con nombre
"José", un salario de $5000 y el departamento "Sistemas", y lo asigna a la misma variable empleado1 que se
creó anteriormente.
Esto significa que la variable empleado1 ahora apunta a un objeto de tipo Gerente en lugar de un objeto de
tipo Empleado. Esto es posible porque la clase Gerente es una subclase de la clase Empleado, por lo que un objeto de
tipo Gerente se puede asignar a una variable de tipo Empleado. Esto se conoce como polimorfismo en Java.
 */
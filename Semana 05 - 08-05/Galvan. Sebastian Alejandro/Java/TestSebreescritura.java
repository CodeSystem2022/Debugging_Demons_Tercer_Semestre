package Clase4;

public class TestSebreescritura {

    public static void main(String[] args) {

        Empleado empleado =   new Empleado("Juan", 1000);
        imprimir(empleado);
        empleado =  new Gerente("Juan", 5000, "IT");
        imprimir(empleado);
    }

    public static void imprimir(Empleado empleado){
        System.out.println("Empleado: "+ empleado);
    }

}

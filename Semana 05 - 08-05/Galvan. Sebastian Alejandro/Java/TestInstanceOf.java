package Clase4;

public class TestInstanceOf {

    public static void main(String[] args) {
        Empleado empleado =   new Empleado("Juan", 1000);
        determinarTipo(empleado);
        empleado =  new Gerente("Juan", 5000, "IT");
        determinarTipo(empleado);
    }

    public static void determinarTipo(Empleado empleado){
        System.out.println(" ---------------------------------- ---------------------------------");
        System.out.println("Es de tipo Gerente: ".concat(String.valueOf(empleado instanceof Gerente)));
        System.out.println("Es de tipo Empleado: ".concat(String.valueOf(empleado instanceof Empleado)));
        System.out.println("Es de tipo Object: ".concat(String.valueOf(empleado instanceof Object)));
    }
}
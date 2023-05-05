package domain;

public class Gerente extends Empleado{
    private String departamento;

    public Gerente( String nombre, double sueldo, String departamento){
        super(nombre,sueldo); //Llamamos al constructor de la clase padre
        this.departamento = departamento;
    }

    @Override   //No podemos sobreEscribir métodos si los hacemos mas restrictivos, por ejm, de protected a private.
    public String obtenerDetalles(){ // Es mejor pasar siempre a menos restrictivo, private a protected o cualq a public o default, pakage
        return super.obtenerDetalles() + " Departamento: " + this.departamento;
    }
}

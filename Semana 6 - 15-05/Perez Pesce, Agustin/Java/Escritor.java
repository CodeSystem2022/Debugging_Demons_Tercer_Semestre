package Clase5;

import Clase4.Empleado;

public class Escritor extends Empleado {

    final TipoEscritura tipoEscritura;

    public Escritor(String nombre, double sueldo, TipoEscritura tipoEscritura) {
        super(nombre, sueldo);
        this.tipoEscritura = tipoEscritura;
    }

    @Override
    public String toString() {
        return  super.toString() + ", Tipo escritura: "+ tipoEscritura.getDescripcion();
    }
}

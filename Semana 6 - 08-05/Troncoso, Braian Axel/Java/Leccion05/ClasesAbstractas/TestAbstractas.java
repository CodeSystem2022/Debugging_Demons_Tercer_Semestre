package test;

import domain.*;

public class TestAbstractas {
    public static void main(String[] args) {
        FiguraGeometrica figura = new Rectangulo("Rectangulo"); // Estamos asignandole una referencia de memoria a la instancia de tipo hija
        // Estamos realizando Upcasting
        figura.dibujar();
}
}
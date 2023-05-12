// ===============CLASE 05 - MIERCOLES-10/05/2023===============
package domain;

public class Rectangulo extends FiguraGeometrica{

    //Constructor
    public Rectangulo(String tipoFigura){
        super(tipoFigura);
    }

    @Override
    public void dibujar() {
        System.out.println("Se imprime un: " + this.getClass().getSimpleName());
    }

}

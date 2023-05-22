package domain;
// Las clases abstracta pueden tener o no métodos
// Se utilizan las clases abstractas para que no podamos instanciar objetos desde esta clase
// Pero si de sus subclases
// Básicamente la todo esto de POO nos ayuda a reutilizar el código y hacerlo lo mas generico posible
// Que mejor ejemplo que el polimorfismo
public class Rectangulo extends FiguraGeometrica{
    // Constructor
    public Rectangulo(String tipoFigura){
        super(tipoFigura);
    }

    @Override
    public void dibujar(){ // Implementando el método
        System.out.println("Se imprime un: "+this.getClass().getSimpleName());
    }
}

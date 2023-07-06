// ===============CLASE 08 - LUNES-31/05/2023===============
package excepciones;

public class OperacionExcepcion extends RuntimeException{
    //Constructor
    public OperacionExcepcion(String mensaje){
        super(mensaje);
    }
}

package Excepciones;

public class OperacionExcepcion extends Exception{ //RuntimeExceptionException Si extendiéramos de RuntimeException
    //Sería menos código en tiempo de compilador, pero en tiempo de ejecución arrojaría igualmente un error y se dentendría
    //y no haría falta utilizar, por ejemplo, try, catch
    // Constructor
     public OperacionExcepcion(String mensaje){
        super(mensaje);
    }


}
package Excepciones;

public class OperacionExcepcion extends Exception{ //RuntimeExceptionException Si extendieramos de RuntimeException
    //Seria menos código en tiempo de compilador pero en tiempo de ejecución arrojaria igualmente un error y se dentendria
    //y no haria falta utilizar por ejemplo try, catch
    // Constructor
     public OperacionExcepcion(String mensaje){
        super(mensaje);
    }


}

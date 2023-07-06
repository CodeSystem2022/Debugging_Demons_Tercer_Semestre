package Clase8;

public class TestInterfaces {

    public static void main(String[] args) {
        IAccessoDatos  conexion =  new ImplMySQL();
        imprimir(conexion);
        conexion = new ImplOracle();
        imprimir(conexion);
    }

    public static void imprimir(IAccessoDatos datos){
        datos.listar();
    }
}

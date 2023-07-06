// ===============CLASE 07 - MIERCOLES-24/05/2023===============
package test;

import accessodatos.*;

public class TestInterface {
    public static void main(String[] args) {

        IAccesoDatos datos = new ImplementacionMySql();
        //datos.listar();
        //imprimir(datos);
        datos = new ImplementacionOracle();
        //datos.listar();
        imprimir(datos);
    }

    public static void imprimir(IAccesoDatos datos){
        datos.listar();
    }
}

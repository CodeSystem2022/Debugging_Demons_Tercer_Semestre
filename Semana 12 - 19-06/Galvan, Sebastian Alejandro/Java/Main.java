package Clase12;

import Clase12.conexion.Conexion;

public class Main {
    public static void main(String[] args) {
        var conexion = Conexion.getConnection();
        if(conexion != null)
            System.out.println("Conexion exitosa "+conexion);
        else
            System.out.println("Error al conectarse");

        }
}
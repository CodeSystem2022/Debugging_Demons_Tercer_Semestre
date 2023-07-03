package Clase12.conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {

    private static final String url = "jdbc:postgresql://localhost:5433/estudiantes";
    private static final String usuario = "postgres";
    private static final String password = "root";
    public static Connection getConnection(){
        Connection conexion= null;


        try {
            conexion = DriverManager.getConnection(url, usuario, password);
        } catch (SQLException e){
            System.out.println("Ocurrió un error en la conexión: "+e.getMessage());
        }
        return conexion;
    }
}

package UTN.Conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
 public class Conexion {
        public static Connection getConecction(){
            Connection conexion = null;
            // Variables para conectarnos a la base de datos
            var baseDatos = "estudiantes";
            var url = "jdbc:mysql://localhost:3306/"+baseDatos;
            var usuario = "root";
            var password = "braianmysql";

            // Cargamos la clase del driver de mysql en memoria
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                conexion = DriverManager.getConnection(url, usuario, password);
            }catch (ClassNotFoundException | SQLException e){
                System.out.println("Ocurrió un error hacia la conexion: "+ e.getMessage());

            }// Fin catch
            return conexion;
        }// Fin método conexión
    }// Fin de la clase

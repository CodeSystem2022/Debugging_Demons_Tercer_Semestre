package UTN;

import UTN.Conexion.Conexion;
import UTN.Datos.EstudianteDAO;
import UTN.Dominio.Estudiante;

public class Main {
    public static void main(String[] args) {
        var conexion = Conexion.getConecction();
        if (conexion != null){
            System.out.println("Conexión exitosa: "+conexion);
        }else {
            System.out.println("Error al conectarse");
        }
    }// Fin main
}// Fin clase

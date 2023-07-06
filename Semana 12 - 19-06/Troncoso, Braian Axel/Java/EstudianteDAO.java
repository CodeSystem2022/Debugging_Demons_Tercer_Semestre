package UTN.Datos;

import UTN.Conexion.Conexion;
import UTN.Dominio.Estudiante;
import static UTN.Conexion.Conexion.getConecction;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDAO {

    // Método por id -> find by id
    public boolean buscarEstudiantePorId(Estudiante estudiante){
        PreparedStatement ps; // Envia la sentencia a la base de datos(los querys)
        ResultSet rs; // Recibe el resultado de la base de datos
        Connection con = getConecction();
        String sql = "SELECT * FROM estudiantes2022 WHERE idestudiantes2022=?";
        try {
        ps = con.prepareStatement(sql);
        ps.setInt(1,estudiante.getIdEstudiante());
        rs = ps.executeQuery();
        if(rs.next()){
            estudiante.setNombre(rs.getString("nombre"));
            estudiante.setApellido(rs.getString("apellido"));
            estudiante.setEmail(rs.getString("email"));
            estudiante.setTelefono(rs.getString("telefono"));
            return true; // Se encontró un registro
        }
        }catch (Exception e){
            System.out.println("Ocurrió un error al buscar el estudiante: "+e.getMessage());
        }finally {
            try {
                con.close();
            }catch (Exception e){
                System.out.println("Ocurrió un error al cerrar la conexión: "+e.getMessage());
            } // Fin del catch
        } // Fin del finally
        return false;
    }

    // Método agregar un nuevo estudiante
    public boolean agregarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConecction();
        String sql = "INSERT INTO estudiantes2022(nombre, apellido, telefono, email) VALUES (?, ?, ?, ?)";
        try{
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.execute();
            return true;
        }catch (Exception e){
            System.out.println("Ocurrió un error al intentar agregar un nuevo estudiante"+e.getMessage());
        }// Fin del catch
        finally {
            try {
                con.close();
            }catch (Exception e){
                System.out.println("Ocurrió un error al intentar cerrar la conexión"+e.getMessage());
            } //Fin del catch
        } // Fin del finally
        return false;
    }// Fin del método agregar

    // Método modificar Estudiante

    public boolean modificarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConecction();
        String sql = "UPDATE estudiantes2022 SET nombre=?, apellido=?, telefono=?, email=? WHERE idestudiantes2022=?";
        try {
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.setInt(5, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        }catch (Exception e){
            System.out.println("Ocurrió un error al intentar modificar un estudiante: "+e.getMessage());
        }finally {
            try {
                con.close();
            }catch (Exception e){
                System.out.println("Ocurrió un error al intentar cerrar la conexión: "+e.getMessage());
            }// Fin catch
        } // Fin finally
        return false;
    }// Fin del método modificar
    // Método listar
    public List<Estudiante> listarEstudiantes(){
        List<Estudiante> estudiantes = new ArrayList<>();
        // Creamos ahora algunos objetos que son necesarios para comunicarnos con la BDD
        PreparedStatement ps; // Envia la sentencia a la base de datos(los querys)
        ResultSet rs; // Recibe el resultado de la base de datos
        // Creamos un objeto del tipo conexion
        Connection con = getConecction();
        String sql = "SELECT * FROM estudiantes2022";
        try {
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()){
               var estudiante = new Estudiante();
               estudiante.setIdEstudiante(rs.getInt("idestudiantes2022"));
               estudiante.setNombre(rs.getString("nombre"));
               estudiante.setApellido(rs.getString("apellido"));
               estudiante.setEmail(rs.getString("email"));
               estudiante.setTelefono(rs.getString("telefono"));
               //Falta agregarlo a la lista
               estudiantes.add(estudiante);
            }
        }catch (Exception e){
            System.out.println("Ocurrió un error al seleccionar datos: "+e.getMessage());
        }
        finally {
            try {
                con.close();
            } catch (Exception e){
                System.out.println("Ocurrió un error al cerrar la conexión");
            }
        }// Fin del finally
    return estudiantes;
    } // Fin del método listar

    public static void main(String[] args) {

        var estudianteDAO = new EstudianteDAO();
        // Modificar estudiante
        var estudianteModificado= new Estudiante(6, "Juan Carlos","Juarez","129123931","JCjuarez@mail.com");
        var modificado = estudianteDAO.modificarEstudiante(estudianteModificado);
        if(modificado)
            System.out.println("Estudiante modificado: "+estudianteModificado);
        else
            System.out.println("No se modificó el estudiante: "+estudianteModificado);

        // Listar los estudiantes
        System.out.println("Listado de estudiantes: ");
        List<Estudiante> estudiantes = estudianteDAO.listarEstudiantes();
        estudiantes.forEach(System.out::println); // Funcion Lambda para imprimir


      /*  var estudianteDao = new EstudianteDAO();
        var nuevoEstudiante = new Estudiante("Carlos", "Lara", "291923", "CarlosL@mail.com");
        var agregado = estudianteDao.agregarEstudiante(nuevoEstudiante);
        if (agregado)
            System.out.println("Se agregó un nuevo estudiante: "+nuevoEstudiante);
        else
            System.out.println("No se pudo agregar el nuevo estudiante: "+nuevoEstudiante);*/
    }
}

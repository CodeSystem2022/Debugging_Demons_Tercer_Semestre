package UTN.Dominio;

public class Estudiante {
    public int idEstudiante;
    public String nombre;
    public String apellido;
    public String telefono;
    public String email;

    // Vamos a trabajar con la sobrecarga de constructores
    public Estudiante(){}; // Constructor vacio

    public Estudiante(int idEstudiante){ // Constructor para eliminar
        this.idEstudiante = idEstudiante;
    }

    public Estudiante(String nombre, String apellido, String telefono, String email){ //Constructor para instanciar - crear
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }

    public Estudiante(int idEstudiante, String nombre, String apellido, String telefono, String email){ // Constructor para modificar
        this.idEstudiante = idEstudiante;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }

    public int getIdEstudiante() {
        return idEstudiante;
    }

    public void setIdEstudiante(int idEstudiante) {
        this.idEstudiante = idEstudiante;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Estudiante{");
        sb.append("idEstudiante=").append(idEstudiante);
        sb.append(", nombre='").append(nombre).append('\'');
        sb.append(", apellido='").append(apellido).append('\'');
        sb.append(", telefono='").append(telefono).append('\'');
        sb.append(", email='").append(email).append('\'');
        sb.append('}');
        return sb.toString();
    }
}

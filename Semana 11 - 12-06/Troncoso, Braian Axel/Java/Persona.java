public class Persona {
    private int id;
    private String nombre;
    private String tel;
    private String email;
    private static int numeroPersonas = 0;


    // Creamos un constructor vacio
    public Persona(){
        this.id = ++Persona.numeroPersonas;
    }
    // Al crear mas de un constructor se le conoce como sobrecarga de constructores
    public Persona(String nombre, String tel, String email){
        this();// Accedemos al constructor vacio(por eso ahora tiene color, porque lo estamos usando)
        this.nombre = nombre;
        this.tel = tel;
        this.email = email;
    }

    // Creamos los métodos setter y getter para acceder a nuestra clase porque al definirlo como
    // private lo estamos encapsulando y debes poder acceder a ellos
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Nos marca override que significa sobre escribir
    // Esto sucede porque estamos sobreEscribiendo un método de la clase padre Object
    // También se le conoce como polimorfismo
    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Persona{");
        sb.append("id=").append(id);
        sb.append(", nombre='").append(nombre).append('\'');
        sb.append(", tel='").append(tel).append('\'');
        sb.append(", email='").append(email).append('\'');
        sb.append('}');
        return sb.toString();
    }
}

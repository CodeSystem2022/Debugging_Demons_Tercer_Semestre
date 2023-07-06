package Clase2.BloquesInicializacion;

public class Persona {
    private final int idPersona;
    private static int contenedorPersona;

    static { //Bloque de inicializacion estatico
        System.out.println("Ejecucion bloque estatico");
        ++Persona.contenedorPersona;
    }

    {  //Bloque de inicializacion no estatico
        System.out.println("Ejecución del bloque NO estático");
        this.idPersona  = Persona.contenedorPersona++;
    }

    public Persona(){
        System.out.println("Ejecución del constructor");

    }

    public int getIdPersona() {
        return idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" +
                "idPersona=" + idPersona +
                '}';
    }
}

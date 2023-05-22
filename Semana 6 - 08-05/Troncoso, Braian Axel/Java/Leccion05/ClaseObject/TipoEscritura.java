package src.domain;

public enum TipoEscritura {
    CLASICO ("Escritura a mano"),
    MODERNO ("Escritura digital");

    private final String descripcion;

    private TipoEscritura(String descripcion){ // constructor
        this.descripcion = descripcion;
    }

    public String getDescripcion(){
        return this.descripcion;
    }

    public TipoEscritura getTipoEscritura(){
        return this.getTipoEscritura();
    }
}

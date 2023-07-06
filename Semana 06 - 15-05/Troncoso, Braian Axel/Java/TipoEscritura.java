package Clase5;

public enum TipoEscritura {

    CLASISCO ("Escritura a mano"),
    MODERNO ("Escritura digital");

    private final String descripcion;

    TipoEscritura(String descripcion) {
        this.descripcion = descripcion;
    }
    public String getDescripcion() {
        return this.descripcion;

    }
}

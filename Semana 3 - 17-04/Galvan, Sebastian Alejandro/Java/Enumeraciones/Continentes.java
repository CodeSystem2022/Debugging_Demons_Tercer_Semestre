package Clase2.Enumeraciones;

public enum Continentes {

    AFRICA(39, "1.4 mil millones"),
    AMERICA(35, "700 millones"),
    ASIA(52 , "3.1 mil  millones"),
    EUROPA(45, "682 millones"),
    OCEANIA(12, "52 millones");


    private final int paises;
    private final String poblacion;

    Continentes(int paises, String poblacion){
        this.paises = paises;
        this.poblacion = poblacion;
    }

    public int getPaises() {
        return paises;
    }

    public String getPoblacion() {
        return poblacion;
    }
}

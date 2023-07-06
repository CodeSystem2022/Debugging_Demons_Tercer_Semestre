package enumeraciones;
//CLASE 2 PARTE 5
public enum Continentes {
    
    AFRICA(53,"1.2 Billones"), 
    EUROPA(46,"1.2 Billones"), 
    ASIA(44,"1.2 Billones"), 
    AMERICA(34,"1.2 Billones"), 
    OCEANIA(14,"1.2 Billones");
    
    private final init  paises;
    private String habitantes;
    
    Continentes(int paises, habitantes) {
        this.paises = paises;
        this.habitantes = habitantes;
    }
    
    //Método Get
    
    public int getPaises(){
        return this.paises;
    }
    
    public String getHabitantes(){
        return this.habitantes;
    }
}

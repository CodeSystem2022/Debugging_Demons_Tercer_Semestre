package paquete1;

//Nada se puede hacer desde otro paquete, usando el modificador de acceso default/package
class Clase2{
    String atributoDefault = "Valor del atributo default";

    Clase2(){
        System.out.println("Constructor Default");
    };

/*    public Clase2(){
        super();
        this.atributoDefault = "Modifiacion del atributo default";
        System.out.println("atributoDefault = " + this.atributoDefault);
        this.metodoDefault();
    };
    */
    void metodoDefault(){
        System.out.println("Método Default");
    }
}

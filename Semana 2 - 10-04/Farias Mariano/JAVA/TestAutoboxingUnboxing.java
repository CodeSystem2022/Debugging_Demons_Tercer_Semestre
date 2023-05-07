//CLASE 3 PARTE 3
package test;

 
public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
        //Clases envolventes 0 Wrapper
        /*
        CE  de tipos primitivos
        int = la clase envolventes es Integer 
        long = la clase envolvente Long
        float = la clase envolvente float
        double = la clase envolvente double
        boolean = la clase envolvente boolean
        byte = la clase envolvente byte 
        char = la clase envolvente character
        short = la clase envolvente short
        */
        
        //CLASE 3 PARTE 4
        int enteroPrim = 10; //Tipo primitivo
        System.out.println("enteroPrim = " + enteroPrim);
       
        Integer entero = 10; //Tipo Object con la clase integer
        
        System.out.println("entero = " + entero.doubleValue()); //AutoBoxing
        
        int entero2 = entero; //UnBoxing
        System.out.println("entero2 = " + entero2);
        
    }
    
}

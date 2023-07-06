package test;

public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
        //Clases envolventes o Wrapper
        /*
            Clases envolventes de tipos primitivos
            int = la clase envolvente es Integer
            long = la clase envolvente es Long
            float = la clase envolvente es Float
            double = la clase envolvente es Double
            boolean = la clase envolvente es Boolean
            byte = la clase envolvente es Byte
            char = la clase envolvente es Character
            shor = la clase envolvente es Short
        */
        int enteroPrimitivo = 10; //Tipo primitivo
        System.out.println("enteroPrimitivo = " + enteroPrimitivo);
        Integer entero = 10; //Tipo Object con la clase Integer
        System.out.println("entero = " + entero.doubleValue()); //Autoboxing, pasamos de un tipo
        // Integer a un tipo double

        int entero2 = entero; //Unboxing, estamos haciendo lo contrario.
        System.out.println("entero2 = " + entero2);
    }
}

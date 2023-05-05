package test;

import domain.Empleado;
import domain.Gerente;

public class TestIntanceOf {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan",10000);
        determinarTipo(empleado1); //Si comento esta linea y cambio los else if por lo que digo debajo se comprobaria
        empleado1 = new Gerente("José",5000,"Sistemas"); //y podria ver mas clara la herencia
        //determinarTipo(empleado1);

    }


    public static void determinarTipo(Empleado empleado){
        if (empleado instanceof Gerente){
            System.out.println("Es de tipo Gerente");
            Gerente gerente = (Gerente) empleado; //Convierno un tipo Empleado a un tipo Gerente
            System.out.println("gerente = " + gerente.getDepartamento());
        }else if (empleado instanceof Empleado) {
            System.out.println("Es de tipo Empleado");
     /*       Gerente gerente = (Gerente) empleado; Producirá un error tipo Cast
            System.out.println("gerente = " + gerente.getDepartamento());*/
        }else  if (empleado instanceof Object) {
            System.out.println("Es de tipo Object");
        }
    }
}

/*
 Importate: SI NO AGREGO else if NO ESTARIA SIENDO ESPECIFICO PORQUE SI PRUEBO SOLAMENTE CON if
 Estaria afirmando "SI..." Y no es lo mismo que "Y solamente Y si".

 */
/*
Por ejemplo, supongamos que tienes un objeto empleado que es una instancia de Empleado, pero no es una instancia de
Gerente. Si intentas hacer un casting a Gerente, se producirá una excepción ClassCastException, ya que no es posible
convertir un objeto de una clase a otra si no hay una relación de herencia entre ellas.
Es importante tener en cuenta que el casting de objetos debe ser utilizado con precaución, ya que puede producir
excepciones y errores si no se utiliza adecuadamente. Se recomienda utilizar técnicas de programación orientada a
objetos como la herencia, polimorfismo y interfaces para evitar tener que hacer casting de objetos.
 */
package mundopc;

import ar.com.system2023.mundopc.*;

public class mundoPC {
    public static void main(String[] args) {
        Teclado teclado = new Teclado("Usb", "Hp");
        Raton raton = new Raton("Usb", "Logitech");
        Monitor monitor = new Monitor("LG", 23);
        Computadora computadora = new Computadora("Compu Maxi", monitor, teclado, raton);
        
        System.out.println("computadora = " + computadora);
        Teclado teclado2 = new Teclado("Bluetooth", "Gamer");
        Raton raton2 = new Raton("Bluetooth", "Gamer");
        Monitor monitor2 = new Monitor("Gamer", 32);
        Computadora computadora2 = new Computadora("Compu Gamer", monitor2, teclado2, raton2);
        
        System.out.println("computadora2 = " + computadora2);
        Orden orden = new Orden();
        orden.agregarComputadora(computadora);
        orden.agregarComputadora(computadora2);
        orden.mostrarOrden();
    }
}
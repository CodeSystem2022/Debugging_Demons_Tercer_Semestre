package mundoPc;

import ar.com.system2023.mundopc.*;

public class mundoPc {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 13); //Importar clase
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        //Creamos otros objetos de diferente marca
        Monitor monitorGamer = new Monitor("Gamer", 32);
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
       
        Orden orden1 =  new Orden(); //Inicializamos el arreglo vacio
      //Orden orden2 = new Orden(); //Una nueva lista para el objeto orden
     // orden1.agregarComputadora(computadoraHP);
     // orden1.agregarComputadora(computadoraGamer);
        
        Computadora computadorasVarias = new Computadora ("Computadora de diferentes marcas", monitorHP, tecladoGamer, ratonHP);
       /*
        orden2.agregarComputadora(computadorasVarias);
        
        orden1.mostrarOrden();
        orden2.mostrarOrden();
        */
        //Crear mas objetos  de tipo  computadora con todos sus elementos 
        //Completar una lista  en el objeto orden1 uqe llegue  a los 10 elementos
        //probar  de esta manera  los metodos al maximo rendimiento
        
//Creacion de computadoras
        
//Pc marca LG
        Monitor monitorLG = new Monitor("LG",32);
        Teclado tecladoLG = new Teclado("USB","LG");
        Raton   ratonLG = new Raton("USB","LG");
        Computadora computadoraLG = new Computadora("Computadora LG",monitorLG, tecladoLG, ratonLG);

        //Pc marca APPLE
        Monitor monitorAPPLE = new Monitor("APPLE",42);
        Teclado tecladoAPPLE = new Teclado("Bluetooh","APPLE");
        Raton   ratonAPPLE = new Raton("Bluetooh","APPLE");
        Computadora computadoraAPPLE = new Computadora("Computadora APPLE",monitorAPPLE, tecladoAPPLE, ratonAPPLE);

        //Pc marca Razer
        Monitor monitorRazer = new Monitor("Razer",42);
        Teclado tecladoRazer = new Teclado("Bluetooh","Razer");
        Raton   ratonRazer = new Raton("Bluetooh","Razer");
        Computadora computadoraRazer = new Computadora("Computadora Razer",monitorRazer, tecladoRazer, ratonRazer);

        //Pc marca Lenovo
        Monitor monitorLenovo = new Monitor("Lenovo",19);
        Teclado tecladoLenovo = new Teclado("Bluetooh","Lenovo");
        Raton   ratonLenovo = new Raton("Bluetooh","Lenovo");
        Computadora computadoraLenovo = new Computadora("Computadora Lenovo",monitorLenovo, tecladoLenovo, ratonLenovo);

        //Pc marca Dell
        Monitor monitorDell = new Monitor("Dell",19);
        Teclado tecladoDell = new Teclado("USB","Dell");
        Raton   ratonDell = new Raton("USB","Dell");
        Computadora computadoraDell = new Computadora("Computadora Dell",monitorDell, tecladoDell, ratonDell);

        //Pc marca MSI
        Monitor monitorMSI = new Monitor("MSI",42);
        Teclado tecladoMSI = new Teclado("Bluetooh","MSI");
        Raton   ratonMSI = new Raton("Bluetooh","MSI");
        Computadora computadoraMSI = new Computadora("Computadora MSI",monitorMSI, tecladoMSI, ratonMSI);

        //Pc marca Asus
        Monitor monitorAsus = new Monitor("Asus",32);
        Teclado tecladoAsus = new Teclado("Bluetooh","Asus");
        Raton   ratonAsus = new Raton("Bluetooh","Asus");
        Computadora computadoraAsus = new Computadora("Computadora Asus",monitorAsus, tecladoAsus, ratonAsus);

        //Pc marca Acer
        Monitor monitorAcer = new Monitor("Acer",32);
        Teclado tecladoAcer = new Teclado("Bluetooh","Acer");
        Raton   ratonAcer = new Raton("Bluetooh","Acer");
        Computadora computadoraAcer = new Computadora("Computadora Acer",monitorAcer, tecladoAcer, ratonAcer);

        //Pc marca Samsung
        Monitor monitorSamsung = new Monitor("Samsung",32);
        Teclado tecladoSamsung = new Teclado("Bluetooh","Samsung");
        Raton   ratonSamsung = new Raton("Bluetooh","Samsung");
        Computadora computadoraSamsung = new Computadora("Computadora Samsung",monitorSamsung, tecladoSamsung, ratonSamsung);

        //Pc marca Alienware
        Monitor monitorAlienware = new Monitor("Alienware",19);
        Teclado tecladoAlienware = new Teclado("Bluetooh","Alienware");
        Raton   ratonAlienware = new Raton("Bluetooh","Alienware");
        Computadora computadoraAlienware = new Computadora("Computadora Alienware",monitorAlienware, tecladoAlienware, ratonAlienware);

        //Cargamos total de computadoras
        orden1.agregarComputadora(computadoraAlienware);
        orden1.agregarComputadora(computadoraSamsung);
        orden1.agregarComputadora(computadoraAcer);
        orden1.agregarComputadora(computadoraAPPLE);
        orden1.agregarComputadora(computadoraLG);
        orden1.agregarComputadora(computadoraMSI);
        orden1.agregarComputadora(computadoraLenovo);
        orden1.agregarComputadora(computadoraAsus);
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraRazer);
        orden1.agregarComputadora(computadorasVarias);
        orden1.agregarComputadora(computadoraDell);
        orden1.mostrarOrden();
    }
    
}

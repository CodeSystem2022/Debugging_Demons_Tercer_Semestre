import ar.com.system2023.mundopc.*;

public class resumen {

}
public class Computadora {

    private final int idComputadora;
    private String nombre;
    private Monitor monitor;
    private Teclado teclado;
    private Mouse mouse;
    private static int contadorComputadoras;

    public Computadora() {
        this.idComputadora = ++ar.com.system2023.mundopc.Computadora.contadorComputadoras;
    }

    public Computadora(String nombre, Monitor monitor, Teclado teclado, Mouse mouse) {
        this();
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.mouse = mouse;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Monitor getMonitor() {
        return monitor;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    public Teclado getTeclado() {
        return teclado;
    }

    public void setTeclado(Teclado teclado) {
        this.teclado = teclado;
    }

    public Mouse getMouse() {
        return mouse;
    }

    public void setMouse(Mouse mouse) {
        this.mouse = mouse;
    }

    public int getIdComputadora() {
        return idComputadora;
    }

    @Override
    public String toString() {
        return "Computadora{" +
                "idComputadora=" + idComputadora +
                ", nombre='" + nombre + '\'' +
                ", monitor=" + monitor +
                ", teclado=" + teclado +
                ", mouse=" + mouse +
                '}';
    }
}

public class DispositivoEntrada {

    private String tipoEntrada;
    private String marca;

    public DispositivoEntrada(String tipoEntrada, String marca){
        this.tipoEntrada =  tipoEntrada;
        this.marca = marca;
    }

    public String getTipoEntrada() {
        return tipoEntrada;
    }

    public void setTipoEntrada(String tipoEntrada) {
        this.tipoEntrada = tipoEntrada;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    @Override
    public String toString() {
        return "DispositivoEntrada{" +
                "tipoEntrada='" + tipoEntrada + '\'' +
                ", marca='" + marca + '\'' +
                '}';
    }
}
public class Monitor {

    private final int idMonitor;
    private String marca;
    private double pulgadas;
    private static int contadorMonitores;

    private Monitor() {
        this.idMonitor = ++ar.com.system2023.mundopc.Monitor.contadorMonitores;
    }

    public Monitor(String marca, double pulgadas){
        this();
        this.marca = marca;
        this.pulgadas = pulgadas;
    }

    public int getIdMonitor() {
        return idMonitor;
    }

    public String getMarca() {
        return marca;
    }

    public double getPulgadas() {
        return pulgadas;
    }

    public static int getContadorMonitores() {
        return contadorMonitores;
    }


    @Override
    public String toString() {
        return "Monitor{" +
                "idMonitor=" + idMonitor +
                ", marca='" + marca + '\'' +
                ", pulgadas=" + pulgadas +
                '}';
    }
}

public class Mouse extends ar.com.system2023.mundopc.DispositivoEntrada {

    private final int idMouse;
    private static int contadorMouses;

    public Mouse(String tipoEntrada, String marca) {
        super(tipoEntrada, marca);
        this.idMouse = ++contadorMouses;
    }

    @Override
    public String toString() {
        return "Mouse{" +
                "idMouse=" + idMouse +
                super.toString() +
                "} " + super.toString();
    }
}

public class Orden {

    private final int idOrden;
    private ar.com.system2023.mundopc.Computadora computadora[];
    private static int contadoresOrdenes;
    private static final int MAX_COMPUTADORAS= 10;
    private int contadorComputadpras;

    public Orden() {
        this.idOrden = ++ar.com.system2023.mundopc.Orden.contadoresOrdenes;
        this.computadora = new ar.com.system2023.mundopc.Computadora[ar.com.system2023.mundopc.Orden.MAX_COMPUTADORAS];
    }
    public void agregarComputadora(ar.com.system2023.mundopc.Computadora computadora){
        if (this.contadorComputadpras < ar.com.system2023.mundopc.Orden.MAX_COMPUTADORAS){
            this.computadora[this.contadorComputadpras++] = computadora;
        }else{
            System.out.println("Has superado en limite: " + ar.com.system2023.mundopc.Orden.MAX_COMPUTADORAS);
        }
    }
    public void mostrarOrdenes() {
        System.out.println("Orden #:" + this.idOrden);
        System.out.println("Computadoras de la orden #: " + this.idOrden);
        for (int i = 0; i < this.contadorComputadpras; i++){
            System.out.println(this.computadora[i]);
        }
    }

}

public class Teclado extends ar.com.system2023.mundopc.DispositivoEntrada {

    private final int idTeclado;
    private static int condorTeclados;

    public Teclado(String tipoEntrada, String marca){
        super(tipoEntrada, marca);
        this.idTeclado = ++condorTeclados;
    }

    @Override
    public String toString() {
        return "Teclado{" +
                "idTeclado=" + idTeclado +
                "} " + super.toString();
    }
}

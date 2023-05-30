package Clase8;

public class ImplMySQL implements IAccessoDatos{
    @Override
    public void insertar() {
        System.out.println("Agragrar registro MySQL");
    }

    @Override
    public void listar() {
        System.out.println("Listar en MySQL");

    }

    @Override
    public void actualizar() {
        System.out.println("Editar registro MySQL");
    }

    @Override
    public void eliminar() {
        System.out.println("Eliminar registro MySQL");
    }
}

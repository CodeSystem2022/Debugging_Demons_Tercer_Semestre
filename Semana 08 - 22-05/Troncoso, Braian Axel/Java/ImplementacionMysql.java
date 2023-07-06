package accesodatos;

public class ImplementacionMysql implements IAccesoDatos{
    @Override
    public void insertar() {
        System.out.println("Insertar desde mysql");
    }

    @Override
    public void listar() {
        System.out.println("Listar desde mysql");
    }

    @Override
    public void actualizar() {
        System.out.println("Actualizar desde mysql");
    }

    @Override
    public void eliminar() {
        System.out.println("Eliminar desde mysql");
    }
}

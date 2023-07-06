// ===============CLASE 07 - MIERCOLES-24/05/2023===============
package accessodatos;

public interface IAccesoDatos {
    int MAX_REGISTRO = 10;

    //Método insertar es abstracto y sin cuerpo
    void insertar();
    void listar();
    void actualizar();
    void eliminar();
}

from LECCION3.catalogos_peliculas.dominio.Pelicula import Pelicula
from LECCION3.catalogos_peliculas.service import PeliculaService

opcion = None

while opcion != 4:
    try:
        print('Opciones: ')
        print('1. Agregar Pelicula: ')
        print('2. Listar las peliculas: ')
        print('3. Eliminar catálogo de peliculas: ')
        print('4.  Salir ')
        opcion = int(input('Digite una opción de menuú (1-4):'))
        if opcion == 1:
            nombre = input('Ingrese nombre de la pelicula: ')
            pelicula = Pelicula()
            PeliculaService.CatalogoPeliculas.argregar_pelicula(nombre)
        elif opcion == 2:
            PeliculaService.CatalogoPeliculas.findAll_peliculas()
        elif opcion == 3:
            PeliculaService.CatalogoPeliculas.eliminar_catalogo()
    except Exception as e:
        print(f'Ocurrió un error de tipo: {e}')
        opcion = None
    else:
        print('Salimos del programa')
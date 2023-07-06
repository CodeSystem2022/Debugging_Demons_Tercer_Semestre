import os

class CatalogoPeliculas:

    ruta_archivo = 'peliculas.txt'

    @classmethod
    def argregar_pelicula(cls, pelicula):
        with open(cls.ruta_archivo, 'a', encoding='utf8') as file:
            file.write(f'{pelicula.nombre}\n')

    @classmethod
    def findAll_peliculas(cls):
        with open(cls.ruta_archivo, 'r', encoding='utf8') as file:
            print(f'Catalogo de peliculas'.center(50, '-'))
            print(file.read())

    @classmethod
    def eliminar_catalogo(cls):
        os.remove(cls.ruta_archivo)
        print(f'Archivo eliminado: {cls.ruta_archivo}')
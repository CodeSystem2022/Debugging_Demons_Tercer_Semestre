# Creación de la clase película:

class Pelicula:
    def __init__(self, nombre):
        self._nombre = nombre

    def __str__ (self):
        return f'Pelicula: {self._nombre}'

    @property
    def nombre(self):
        return self._nombre

    @nombre.setter 
    def nombre(self, nombre):
        self._nombre = nombre


# Creación de la clase catalogo_peliculas:

import os

class CatalogoPeliculas:

    ruta_archivo = 'pelicula.txt'

    @classmethod
    def agregar_peliculas(cls, pelicula):
        with open(cls.ruta_archivo, 'a', encoding='utf8') as archivo:
            archivo.write(f'{pelicula.nombre}\n')

    @classmethod
    def listar_peliculas(cls):
        with open(cls.ruta_archivo, 'r', encoding='utf8') as archivo:
            print(f'Catalogo de pelicula'.center(50, '-'))
            print(archivo.read())

    @classmethod
    def eliminar_peliculas(cls):
        os.remove(cls.ruta_archivo)
        print(f'Achivo eliminado :{cls.ruta_archivo}')
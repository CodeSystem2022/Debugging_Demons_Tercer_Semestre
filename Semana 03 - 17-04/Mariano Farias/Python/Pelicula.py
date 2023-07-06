#CLASE 3 parte 2
class peliculas
    def __init__(self,nombre):
        self._nombre = nombre

    def __str__(self):
        return f'Pelicula: {self._nombre}'

    @property
    def nombre(self):
        return self._nombre

    @nombre.setter
    def nombre(self):
        self._nombre = nombre
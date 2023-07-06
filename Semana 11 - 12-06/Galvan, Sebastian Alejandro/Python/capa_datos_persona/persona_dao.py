from LECCION10.capa_datos_persona.Persona import Persona
from LECCION10.capa_datos_persona.conexion import Conexion

from logger_base import log


class PersonaDao:
    """
    DAO significa : Data Acces Object
    CRUD significa:
                    Create -> Insertar
                    Read -> Seleccionar
                    Update -> Actulizar
                    Delete -> Eliminar
    """
    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona'
    _INSERTAR = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s ,%s )'
    _ACTULIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s, WHERE id_persona=%s'
    _ELIMINAR = 'DELETE FROM persona WHERE id_persona = %s'

    # Definimos los métodos de la clase
    @classmethod
    def seleccionar(cls):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                cursor.execute(cls._SELECCIONAR)
                registros = cursor.fetchall()
                personas = []
                for registro in registros:
                    persona = Persona(registro[0], registro[1], registro[2], registro[3])
                    personas.append(persona)
                return personas

    @classmethod
    def insertar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email)
                cursor.execute(cls._INSERTAR, valores)
                log.debug(f'Persona Ingresada: {persona}')
                return cursor.rowcount

    @classmethod
    def actualizar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
                cursor.execute(cls._ACTULIZAR, valores)
                log.debug(f'Persona actualizada: {persona}')
                return cursor.rowcount

    @classmethod
    def eliminar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.id_persona)
                cursor.execute(cls._ELIMINAR, valores)
                log.debug(f'Persona eliminada: {persona}')
                return cursor.rowcount


if __name__ == '__main__':

    # Delete
    # juan = Persona(id_persona=1)
    # filas_afectadas =  PersonaDao.eliminar(juan)
    # log.debug(f'Filas afectadas: {filas_afectadas}')

    # Update
    # juan = Persona(1,'Juan José','Nicolson','jjnicolson@gmail.com')
    # filas_afectadas = PersonaDao.actualizar(juan)
    # log.debug(f'Registros afectados: {filas_afectadas}')

    # Save
    # pedro = Persona(nombre='Pedro', apellido='Garcia', email='pgarcia@gmail.com')
    # filas_afectadsa = PersonaDao.insertar(pedro)
    # log.debug(f'Registros afectados: {filas_afectadsa}')

    # Find All
    personas = PersonaDao.seleccionar()
    for persona in personas:
        log.debug(persona)

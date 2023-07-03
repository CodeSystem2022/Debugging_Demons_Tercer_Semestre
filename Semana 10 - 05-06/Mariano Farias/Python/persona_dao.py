from capa_datos_persona.conexion import conexion
from capa_datos_persona.cursor_del_pool import CursorDellPoll
from logger_base import log

class PersonaDao:
    """
    DAO significa: data access Object
    CRUD significa:
                    Crate -> Insertar
                    Read -> Seleccionar
                    Update -> Actualizar
                    Delete -> eliminar
    """
    _SELECCIONAR = 'SELEC * FROM persona ORDER BY id_persona'
    _INSERTAR = 'INSERT INTO persona(id_persona, nombre, apellido, email) VALUES (%s, %s, %s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    _ELIMINAR = 'DELITE FROM persona WHERE id_persona=%s'

#Definimos los metodos de clases
    @classmethod
    def seleccionar(cls):
        with CursorDelPool() as cursor:
            cursor.execute(cls_SELECIONAR)
            registros = cursor.fetchall()
            for registro in registros
                personas = []
                persona = Persona(registro[0],registro[1],registro[2],registro[3])
                personas.append(persona)
            return personas
    @classmethod
    def insertar(cls, persona):
        with CursorDellPoll() as cursor:
            valores =(persona.nombre, persona.apellido, persona.email)
            cursor.execute(cls._INSERTAR, valores)
            log.debug(f'Persona Inserada: {persona}')
            return cursor.rowcount

    @classmethod
    def actualizar(cls, persona):
        with CursorDellPoll() as cursor:
            valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
            cursor.execute(cls._ACTUALIZAR, valores)
            log.debug(f'Persona actualizada:{persona}')
            return cursor.rowcount

    @classmethod
    def eliminar(cls, persona):
        with CursorDellPoll() as cursor:
            valores = (persona.id_persona,)
            cursor.execute(cls._ELIMINAR,valores)
            log.debug(f'Los objetos eliminados son: {persona}')
            return cursor.rowcount



if__name__'__main__':

    #Eliminar un registro
    persona1 = persona(id_persona=13)
    personas_eliminadas = PersonaDao.eliminar(persona1)
    log.debug(f'Personas eliminadas: {personas_eliminadas}')


    #Actualizar un registro
    persona1 = Persona(1,'Juan Jose','Pena', 'jjpena@mail.com')
    personas_actualizadas = PersonaDao.actualizar(persona1)
    log.debug(f'Persona actualizada:{personas_actualizadas}')


# Insertar un registro
   persona1 = Persona(nombre='Mariano', apellido='Farias', email='mfarias@mail.com')
   # personas_insertadas = PersonaDao.insertar(persona1)
   # log.debug(f'Personas insertadas: {personas_insertadas}')

    # Seleccionar objetos
    personas = PersonaDao.seleccionar()
    for persona in persona:
        log.debug(persona)

# 11  6 COMLETO
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


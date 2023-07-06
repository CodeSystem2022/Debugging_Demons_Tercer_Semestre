import psycopg2 as pg

USER = 'postgres'
PASSWORD = 'root'
DATABASE = 'postgres'
HOST = 'localhost'
PORT = '5433'

conn = pg.connect(
    user=USER,
    password=PASSWORD,
    host=HOST,
    port=PORT,
    database=DATABASE
)

try:
    with conn:
        with conn.cursor() as cursor:
            # query = 'DELETE FROM persona WHERE id_persona=%s'
            # Eliminar varios
            query = 'DELETE FROM persona WHERE id_persona=%s'
            ids_persona = input('Ingrese id de personas a eliminar separados por coma: ')
            pk_ids = (tuple(ids_persona.split(','),))
            cursor.executemany(query, pk_ids)
            registros_eliminados = cursor.rowcount
            print(f'Registros eliminados: {registros_eliminados}')
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conn.close()


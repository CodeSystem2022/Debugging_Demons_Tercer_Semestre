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
            query = 'UPDATE persona SET nombre = %s, apellido = %s, email = %s WHERE id_persona = %s'

            valores = (
                ('Pedro', 'Castro', 'pcastro@gmail.com', '2'),
                ('Mariana', 'Ortega', 'mortega@gmail.com', '5'),
            )
            cursor.executemany(query,valores)
            registros_actualizados = cursor.rowcount
            print(f'Registros actualizados: {registros_actualizados}')
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conn.close()


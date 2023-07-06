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
            query = 'INSERT INTO persona (nombre, apellido, email) VALUES(%s, %s, %s)'
            valores = (
                ('Pedro',  'Velazques', 'pvela@mail.com'),
                ('Laura',  'Reyes', 'lramoso@mail.com'),
                ('Mateo',  'Lima', 'mlima@mail.com')
            )
            cursor.executemany(query, valores)
            registros_insertados = cursor.rowcount

            print(f'Los registros insertados son: {registros_insertados}')
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conn.close()


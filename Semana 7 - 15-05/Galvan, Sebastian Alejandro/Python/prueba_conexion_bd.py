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

print("Con With: ")


def mostrar_info_persona(persona):
    print(f"""
        ID : {persona[0]} 
        NOMBRE : {persona[1]} | APELLIDO : {persona[2]}
        EMAIL : {persona[3]}                        
    """)


try:
    with conn:
        with conn.cursor() as cursor:
            query = 'SELECT * FROM persona WHERE id_persona = %s'
            id_persona = input('Ingrese ID de la persona')
            cursor.execute(query, (id_persona,))
            persona = cursor.fetchone()
            mostrar_info_persona(persona)
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conn.close()

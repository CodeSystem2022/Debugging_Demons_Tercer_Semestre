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
            # query = 'SELECT * FROM persona WHERE id_persona IN (1,2)'

            query = 'SELECT * FROM persona WHERE id_persona IN %s'
            # llaves_primarias = (1, 2)

            claves = input('Digite los id de personas a buscar separados por coma: ')
            llaves_primarias = (tuple(claves.split(',')),)
            cursor.execute(query, llaves_primarias)
            personas = cursor.fetchall()
            if personas:
                for persona in personas:
                    mostrar_info_persona(persona)
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conn.close()


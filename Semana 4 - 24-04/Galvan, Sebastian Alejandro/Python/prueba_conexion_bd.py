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

cursor = conn.cursor()
query = 'SELECT * FROM persona'
cursor.execute(query)
personas = cursor.fetchall()


def mostrar_info_persona(persona):
    print(f"""
        ID : {persona[0]} 
        NOMBRE : {persona[1]} | APELLIDO : {persona[2]}
        EMAIL : {persona[3]}                        
    """)


if personas:
    for persona in personas:
        mostrar_info_persona(persona)

cursor.close()
conn.close()


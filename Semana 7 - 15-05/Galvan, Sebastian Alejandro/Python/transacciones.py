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

print("Transaccion: ")


def mostrar_info_persona(persona):
    print(f"""
        ID : {persona[0]} 
        NOMBRE : {persona[1]} | APELLIDO : {persona[2]}
        EMAIL : {persona[3]}                        
    """)


try:
    conn.autocommit = False
    cursor = conn.cursor()
    query = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    values = ('Genaro', 'Dunan', 'dunan@gmail.com')
    cursor.execute(query, values)

    sentence = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    values_sentence = ("Jeronimo", "Larroque", "jlarroque@gmail.com", "22")
    cursor.execute(sentence, values_sentence)

    conn.commit()
    print('Termina la transacción')
except Exception as e:
    conn.rollback()
    print(f'Ocurrio un error: {e}')
finally:
    conn.close()

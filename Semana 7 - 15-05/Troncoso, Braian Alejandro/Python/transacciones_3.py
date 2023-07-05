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
    with conn:
        with conn.cursor() as cursor:
            query = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
            values = ('Alejandro', ',Molina', 'amolina@gmail.com')
            cursor.execute(query, values)

            sentence = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            values_sentence = ("Pedro", "Ibanoff", "pedroiv@gmail.com", 23)
            cursor.execute(sentence, values_sentence)

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conn.close()

print('Termina la transacción')

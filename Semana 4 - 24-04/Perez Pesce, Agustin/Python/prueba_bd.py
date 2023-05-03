# ===============CLASE 04 - LUNES-24/04/2023===============

import psycopg2 # Esto es para poder conectarnos a Postgres

conexion = psycopg2.connect(
    user='postgres', # cambiar a "root"
    password='postgres',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)

cursor = conexion.cursor()
sentencia = 'SELECT * FROM persona'
cursor.execute(sentencia) # De esta manera ejecutamos la sentencia
registros = cursor.fetchall()  # Recuperamos todos los registros que serán una lista.
print(registros)

cursor.close()
conexion.close()
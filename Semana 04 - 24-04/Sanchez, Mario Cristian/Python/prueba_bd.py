import psycopg2 # Nos conectamos a  Postgre

conexion = psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)

cursor = conexion.cursor()
sentencia = 'SELECT * FROM persona'
cursor.execute(sentencia) #Ejecutamos la sentencia

registros = cursor.fetchall()# Recuperamos todos los registros que seran una lista

print(registros)


cursor.close()
conexion.close()
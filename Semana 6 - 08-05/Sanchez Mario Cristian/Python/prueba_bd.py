import psycopg2 # Nos conectamos a  Postgre

conexion = psycopg2.connect(user='postgres1', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:

            sentencia = 'SELECT * FROM persona WHERE id_persona = %s' # Placeholder
            id_persona = input('Digite un numero para el id_persona: ')
            cursor.execute(sentencia, (id_persona,)) #Ejecutamos la sentencia

            registros = cursor.fetchone()# Con fetchone recuperamos la informacion como una tupla

            print(registros)
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()

#https://www,psycopg.org/docs/usage.html
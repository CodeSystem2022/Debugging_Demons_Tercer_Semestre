import psycopg2 # Nos conectamos a  Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:

            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores = (
                ('Lautaro', 'Sanchez', 'lsanchez@mail.com', 1),
                ('Romina', 'Grana', 'rgrana@mail.com', 4),
                ('Exequiel', 'Fernandez', 'efernandez@mail.com', 2)
            )
            cursor.executemany(sentencia, valores) #Ejecutamos la sentencia para guardar todos los datos

            registros_actualizados = cursor.rowcount
            print(f'Los registros actualizados son: {registros_actualizados}')


except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
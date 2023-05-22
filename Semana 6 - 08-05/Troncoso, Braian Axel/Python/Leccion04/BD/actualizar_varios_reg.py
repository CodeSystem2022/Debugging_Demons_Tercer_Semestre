import psycopg2 # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user='postgres',password='postgres',host='127.0.0.1',port='5432',database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores = (
                ('Juan', 'Perez', 'jperez@mail.com', 6),
                ('Romina', 'Ayala', 'ayalar@mail.com', 5)
            ) # Es una tupla de tuplas
            cursor.executemany(sentencia, valores) # executemany es para varios registros
            registros_actualizados = cursor.rowcount # Ingresamos los registros
            print(f'Los registros actualizados son: {registros_actualizados}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()
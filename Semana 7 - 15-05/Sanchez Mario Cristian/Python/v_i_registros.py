import psycopg2 # Nos conectamos a  Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:

            sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
            valores = (
                ('Benicio', 'Sanchez', 'bsanchez@mail.com'),
                ('Marcos', 'Canto', 'mcanton@mail.com'),
                ('Marcelo', 'Cuenca', 'cuenca@mail.com')

            ) # Es una tupla de tuplas
            cursor.executemany(sentencia, valores) #Ejecutamos la sentencia para guardar todos los datos

            registros_insertados = cursor.rowcount
            print(f'Los registros insertados son: {registros_insertados}')


except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
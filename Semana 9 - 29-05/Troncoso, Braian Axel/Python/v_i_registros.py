import psycopg2 # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user='postgres',password='postgres',host='127.0.0.1',port='5432',database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
            valores = (
                ('Carlos', 'Lara', 'clara@mail.com'),
                ('Marcos', 'Canto', 'mcanto@mail.com'),
                ('Marcelo', 'Cuenca', 'mcuenca@mail.com')
            ) # Creamos una tupla de tuplas
            cursor.executemany(sentencia, valores) # De esta manera ejecutamos la sentencia, le pasamos una tupla
            # conexion.commit() esto se utiliza para guardar los cambios, no lo hacemos pq lo hace el with automaticamente
            registros_insertados = cursor.rowcount # Ingresamos los registors
            print(f'Los registros insertados son: {registros_insertados}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()
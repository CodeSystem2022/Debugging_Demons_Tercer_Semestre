import psycopg2 # Nos conectamos a  Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'DELETE FROM persona WHERE id_persona IN %s'
            entrada = input('Digite los numeros de registros a eliminar (separados por coma): ')
            valores = (tuple(entrada.split(',')),)# tupla de tuplas

            cursor.execute(sentencia, valores) #Ejecutamos la sentencia para guardar todos los datos

            registros_eliminados = cursor.rowcount
            print(f'Los registros eliminados son: {registros_eliminados}')


except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
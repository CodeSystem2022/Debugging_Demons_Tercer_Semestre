import psycopg2 #Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(
    user = 'postgres',
    password ='admin',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_db'
)
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'DELETE from persona WHERE id_persona IN %s'
            entrada = input('Digite los numeros de registro a eliminar (separados por com): ')
            valores = (tuple(entrada.split(', ')), )#tupla de tuplas
            cursor.execute(sentencia, valores) #De esta manera ejecutamos la sentencia 
            #conexion.commit() esto se utiliza para guardar los cambios en la base de datos
            registros_eliminados = cursor.rowcount 
            print(f'Los registros eliminados son: {registros_eliminados}')
            
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
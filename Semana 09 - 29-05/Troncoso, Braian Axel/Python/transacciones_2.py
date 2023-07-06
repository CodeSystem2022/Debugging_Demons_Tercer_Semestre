import psycopg2 as bd # Lo renombramos bd
conexion = bd.connect(user='postgres',password='postgres',host='127.0.0.1',port='5432',database='test_bd')
try:
    conexion.autocommit = False # Esto directamente no deberia estar, Inicia la transacción
    cursor = conexion.cursor()
    sentencia = "INSERT INTO persona(nombre, apellido, email)VALUES(%s, %s, %s)"
    valores = ('Juan Carlos', 'Perez', 'jPerez@mail.com')
    cursor.execute(sentencia, valores)

    sentencia = 'UPDATE persona SET nombre = %s, apellido=%s, email=%s WHERE id_persona=%s'
    valores = ('Juan', 'Juarez', 'jcjuarez@mail.com', 11)
    cursor.execute(sentencia,valores)
    conexion.commit() # Estamos haciendo el commit manualmente, Se cierra la transaccion
    print('Termina la transacción')
except Exception as e:
    conexion.rollback()
    print(f'Ocurrió un error: se hizo un rollback: {e}')
finally:
    conexion.close()

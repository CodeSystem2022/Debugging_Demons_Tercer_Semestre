# ===============CLASE 02 - LUNES-10/04/2023===============

# archivo = open('O:\\Documentos\\GoogleDrive\\UTN\\[UTN]-3_Semestre\\[UTN]-Laboratorio_III\\[Python]-02_Archivos\Leccion02\\prueba.txt', 'r', encoding='utf8') # de esta forma especificamos la ruta en donde queremos crear el archivo. Si no especificamos la ruta, el archivo se creará en el mismo directorio donde esta la clase 'leer_archivo.py'
try:
    archivo = open('prueba.txt', 'r', encoding='utf8') # las letras son: 'r' read,
    # 'a' append, 'w' write, 'x'. Las diferencias entre 'w' y 'a'
    # print(archivo.read())
    # print(archivo.read(15)) # Muestra las primeras 15 posiciones del archivo
    # print(archivo.read(5)) # Continunamos desde la línea anterior
    # print(archivo.readline())
    # print(archivo.readline())
except Exception as e:
    print(e)
finally:
    archivo.close()


# Vamos a iterar el archivo, cada una de las líneas
# for linea in archivo:
    # print(linea): iteramos todos los elementos del archivo

# print(archivo.readline()[3]) # accedemos al archivo como si fuera una lista, con los corchetes accedemos a las diferentes líneas

# Anexamos información, copiamos a otro
try:
    archivo2 = open('copia.txt', 'a', encoding='utf8') # creamos un archivo de texto ('copia.txt') al cual le vamos a anexar el contenido del archivo creado anteriormente ('prueba.txt')
    archivo2.write(archivo.read())
except Exception as e:
    print(e)
finally:
    archivo.close() # cerramos el primer archivo
    archivo2.close() # cerramos el segundo archivo

print('Se ha terminado el proceso de leer y de copiar archivos')

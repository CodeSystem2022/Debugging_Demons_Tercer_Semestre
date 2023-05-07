#En caso de que el archivo se encuentre fuera de la carpeta hay que espcificar la ruta
archivo = open('prueba.txt','r', encoding='utf8')

#print(archivo.read()) Lee el texto completo de un archivo
#print(archivo.read(26)) Leer determinada cantidad de letras
#print(archivo.read(6)) Continua desde el final de la linea anterior

#print(archivo.readline()) Lee la primer linea de texto
#print(archivo.readline()) Si repetimos, salta a la siguiente linea

#Iteramos el archivo, cada una de las lineas

#for linea in archivo:
    # print(linea)

# Itera todos los elementos como una lista. Podemos ver el numero de elemento que quers ver
#print(archivo.readlines()[1])

#Anexamos informacion, copiamos a otro
archivo2 = open('copia.txt', 'w', encoding='utf8')
archivo2.write(archivo.read())
archivo.close()
archivo2.close()

print('Se ha terminado el proceso de leer y copiar archivos')
   



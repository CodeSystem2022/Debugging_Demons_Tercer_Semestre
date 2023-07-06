archivo = open('prueba.txt', 'r', encoding = 'utf-8')
#print(archivo.read())
#print(archivo.read(16))
#print(archivo.read(10))
#print(archivo.readline())
#print(archivo.readline())

#Vamos a iterar el archivo, cada una de las líneas
#for linea in archivo:
    #print(linea)
    #print(archivo.readlines())
#print(archivo.readlines()[11])

#Anexamos información copiamos a otro
archivo2 = open('copia.txt', 'w', encoding= 'utf-8')
archivo2.write(archivo.read())
archivo.close()
archivo2.close()

print('Se ha terminado el proceso de leer y copiar archivos')
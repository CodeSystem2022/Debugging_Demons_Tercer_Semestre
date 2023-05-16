from manejoArchivo import ManejoArchivos
#Manejo de contexto With: sintaxis simplificada, abre y cierra el archivo
#with open('prueba.txt', 'r', encoding='utf8') as archivo:
#   print(archivo.read())

#Es este contexto se ejecutan de manera automatica diferentes metodos
#__enter__ : abre el archivo
#__exit__ : ciera 

with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())
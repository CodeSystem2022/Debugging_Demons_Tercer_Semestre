#r -> read
#w -> write
#a -> append
#x -> crea archivo
#t -> tipo de archivo
#b -> binarios
#w+ -> escribir y leer
#r+ -> leee y escribir

archivo = open('prueba.txt', 'r', encoding='utf8')

# print(archivo.read(5))
# print(archivo.read(9))

print(archivo.readline())
print(archivo.readline())

#
# for linea in archivo:
#     print(linea)


archivo2 = open('copia.txt', 'a', encoding='utf8')

# for linea in archivo:
    # archivo2.write(linea)

archivo2.write(archivo.read())

archivo.close()
archivo2.close()

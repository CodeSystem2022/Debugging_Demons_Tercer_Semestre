#LECTURA DE ARCHIVOS  Las letras son: r read, a append, w write, x
archivo = open('prueba.txt','r',encoding='utf8 ') # r= read Esto último es para ver los acentos  #CLASE 2 PARTE 4
#print(archivo.read())

archivo = open('prueba.txt','a',encoding='utf8 ') #a (append)
#print(archivo.read())

archivo = open('prueba.txt','w',encoding='utf8 ') #w write
#print(archivo.read())

archivo = open('prueba.txt','x',encoding='utf8 ')# x exepción
#print(archivo.read())


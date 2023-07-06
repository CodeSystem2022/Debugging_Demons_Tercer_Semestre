try:
    archivo = open('prueba.txt', 'w', encoding = 'utf-8')
    archivo.write('Programamos con distintos tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo: acción, ejecución y producción\n')
    archivo.write('Las letras son:\nr read, \na append, \nw write, \nx crea un archivo')
    archivo.write('\nt esta es para texto o text, \nb archivos binarios, \nw+ lee y escribe son iguales r+\n')
    archivo.write('Saludos a todos los alumnos de la tecnicatura\n')
    archivo.write('Con esto terminamos.')
except Exception as e:
    print(e)
finally:
    archivo.close() #Con esto se debe cerrar el archivo
    
# archivo.write('Todo quedó perfecto'): Este es un error! 
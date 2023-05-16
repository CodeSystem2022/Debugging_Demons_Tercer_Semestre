#Manejo de contexto with
# with open('prueba.txt', 'r', encoding='utf8') as file:
#     for line in file:
#         print(line)
from ManejoArchivos import ManejoArchivos

# No hace falta usar un bloque try / catch
# Utilia diferentes métodos:
# __enter__ para abrir el archivo
# __exit__ para cerrar el archivo


with ManejoArchivos('prueba.txt') as file:
    print(file.read())


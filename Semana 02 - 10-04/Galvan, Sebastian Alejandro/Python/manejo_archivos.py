# Declaracion de variables


 # %%
try:
    archivo = open('prueba.txt', 'w', encoding='utf8')
    archivo.write("Hola \n")
    archivo.write("¿Cómo estás? \n")
    archivo.write("Chau")
except Exception as e:
    print(e)
finally:
    archivo.close()



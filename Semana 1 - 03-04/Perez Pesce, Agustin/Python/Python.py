from NumerosIgualesException import NumerosIgualesException

#===============CLASE 01 - LUNES-03/04/2023===============
try:
    10/0
except ZeroDivisionError as e: # Se puede especificar más poniendo ZeroDivisionError
    print(f'Ocurrió un error: {e}')

###### Probando difernetes excepciones
resultado = None
a = '10' # Modificar para ver las diferentes tipos de excepciones
b = 0
try:
    resultado = a / b
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e: # Si no arroja la excepción ZeroDivisionError ni TypeError arrojará una más "generica"
    print(f'Exception - Ocurrió un error: {type(e)}')

print(f'El resultado es: {resultado}')
print('seguimos...')

###### Declarando variables dentro del try
try:
    a = int(input('Digite el primero número: '))
    b = int(input('Digite el segundo número: '))
    if a == b:
        raise NumerosIgualesException('Son números iguales') # la palabra reservada "raise" nos permite lanzar una excepción de cualquier tipo
    resultado = a / b
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e: # Si no arroja la excepción ZeroDivisionError ni TypeError arrojará una más "generica"
    print(f'Exception - Ocurrió un error: {type(e)}')
else:
    print("No se arrojó ninguna excepción")
finally: # Siempre se ejecuta
    print("Ejecución de este bloque finally")

print(f'El resultado es: {resultado}')
print('seguimos...')

from Numeros_iguales_exceptions import Numeros_iguales_exceptions

resultado = None

try:
    a = int(input('Digite el primer número: ')) 
    b = int(input('Digite el segundo número: '))
    if a == b:
        raise Numeros_iguales_exceptions('Son iguales')
    resultado = a/b
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')
else:
    print('No se arrojó ninguna excepción')
finally: #Siempre se va a ejecutar
    print('Ejecución de este bloque finally')
    
print(f'El resultado es: {resultado}')
print('seguimos...')
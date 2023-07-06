# Números Iguales:

class NumerosIgualesException(Exception):
    def __int__(self, mensaje):
        self.message = mensaje

# Manejo de Exepciones:

from NumerosIgualesException import NumerosIgualesException

resultado = None

try:
    a = int(input("Digite el primer numero: "))
    b = int(input("Digite el segundo numero: "))
    if a == b:
        raise NumerosIgualesException("Son numeros iguales")
    resultado = a / b #modificamos
except TypeError as e:
    print(f'Type Error - Ocurrio un error {type(e)}')
except ZeroDivisionError as  e:
    print(f'ZerDivisionError - Ecurrio un error {e}')
except Exception as e:
    print(f'Execption - Ocurrio un error: {type(e)}')
else:
    print("No se arrojo ninguna excepcion")
finally: #siempre se va a ejecutar
    print("Ejecucion de este bloque finally")

print(f'El resultado es: {resultado}')
print('seguimos...')
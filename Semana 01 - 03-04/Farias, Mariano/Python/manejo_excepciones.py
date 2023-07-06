from NumerosIgualesExeption import NumerosIgualesExeption
resultado = None

try:
        a = int(input('Digite un numero: '))
        b = int(input('Ingrese el segundo numero: '))
        if a == b:
            raise NumerosIgualesExeption('Son numeros iguales ')
        resultado = a / b
except TypeError as e:
    print(f'Type error Ocurrio un error: {type(e)}') 
except Exception as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')
except Exception as e:
    print(f' Exeption - Ocurrio un erro: {type(e)}')
else:
    print("No se arrojo ninguna exepción")
finally: #Siempre se va a ejecutar
    print("Ejecuta de este bloque finally")

print(f'El resultado es: {resultado}')
print('Seguimos...')

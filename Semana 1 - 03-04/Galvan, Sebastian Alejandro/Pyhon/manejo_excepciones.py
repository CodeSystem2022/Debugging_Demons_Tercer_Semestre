# %%  --- Parte 1
resultado = None
a = '10'
b = 0
try:
    resultado = a / b
except ZeroDivisionError as e:
    print(f'Ocurrió un error: {e}')
except TypeError as e:
    print(f'Ocurrió un error: {e}')
except Exception as e:
    print(f'Excepcin - ocurrió un errror: {type(e)}')

print(f'El valor de resultado es: {resultado}')
print(f'Seguimos....')

# %%  --- Parte 2
resultado = None

try:
    a = int(input('Ingrese el primer número: '))
    b = int(input('Ingrese el segundo número: '))
    resultado = a / b
except TypeError as e:
    print(f'TypeEroor - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')

# %%  --- Parte 3
resultado = None

try:
    a = int(input('Ingrese el primer número: '))
    b = int(input('Ingrese el segundo número: '))
    resultado = a / b
except TypeError as e:
    print(f'TypeEroor - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')
else:
    print("No se arrojo ninguna excepción")
finally:
    print("Me ejecuto siempre")

# %% --- Parte 4
from NumerosIgualesException import NumerosIgualesException

try:
    a = int(input('Ingrese el primer número: '))
    b = int(input('Ingrese el segundo número: '))
    if a == b:
        raise NumerosIgualesException("Los Numeros son iguales")
    resultado = a / b
except TypeError as e:
    print(f'TypeEroor - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')
else:
    print("No se arrojo ninguna excepción")
finally:
    print("Me ejecuto siempre")

import logging as log

log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelbane)s [%(filename)s:%(lineno)s] %(message)s',
                datefmt='%T:%M:S %p',
                handlers=[
                    log.FileHandler('capa_datos.log'),
                    log.StreanHandler()
                ])


# Llamamos una configuración básica
if __name__ == '__main__':
    log.basicConfig(level=log.DEBUG)
    log.debug('Mensaje a nivel debug')
    log.info('Mensaje a nivel info')
    log.warning('Mensaje a nivel warning')
    log.error('Mensaje a nivel error')
    log.critical('Mensaje a nivel critical')

import logging as log

# Configuaración básica

log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s',
                datefmt='%I:%M:%S %p',
                handlers=[
                    log.FileHandler('capa detos.log'),
                    log.StreamHandler()
                ])

if __name__ == '__main__':
    log.DEBUG('Mensaje  a nivel DEBUG')
    log.INFO('Mensaje  a nivel INFO')
    log.WARNING('Mensaje  a nivel WARNING')
    log.ERROR('Mensaje  a nivel ERROR')
    log.CRITICAL('Mensaje  a nivel CRITICAL')
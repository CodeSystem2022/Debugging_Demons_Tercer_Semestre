import logger_base as log
import sys

import psycopg2 as postgres


class Conexion:
    _DATABASE = 'test_bd'
    _USERNAME = 'postgres'
    _PASSWORD = 'root'
    _DB_PORT = '5432'
    _HOST = 'localhost'
    _conexion = None
    _cursor = None

    @classmethod
    def obtenerConexion(cls):
        if cls._conexion is None:
            try:
                cls._conexion = postgres.connect(
                    host=cls._HOST,
                    user=cls._USERNAME,
                    password=cls._PASSWORD,
                    port=cls._DB_PORT,
                    database=cls._DATABASE)
                log.debug(f'Conexion Exitosa : {cls._conexion}')
                return cls._conexion
            except Exception as error:
                log.ERROR(f'Ocurrió un error: {error}')
                sys.exit()
        else:
            return cls._conexion

    @classmethod
    def obtenerCursor(cls):
        if cls._cursor is None:
            try:
                cls._cursor = cls.obtenerConexion().cursor()
                log.degug(f'Se abrio correctamente el cursor. {cls._cursor}')
                return cls._cursor
            except Exception as error:
                log.error(f'Ocurrió un eror: {error}')
                sys.exit()
        else:
            return cls._cursor


if __name__ == '__main__':
    Conexion.obtenerConexion()
    Conexion.obtenerCursor()

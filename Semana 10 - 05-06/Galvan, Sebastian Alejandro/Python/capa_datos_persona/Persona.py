class Persona:
    def __init__(self, id_persona, nombre, apellido, email):
       self._id_persona = id_persona
       self._nombre = nombre
       self._apellido = apellido
       self._email = email

    def __str__(self):
        return f'''
            Id Persona: {self._id_persona}
            Nombre: {self._nombre}
            Apellido: {self._apellido}
            Email: {self._email}
        '''

    @property
    def id_perosna(self):
        return self._id_persona

    @id_perosna.setter
    def id_persona(self, id_persona):
        self._id_persona = id_persona

    @property
    def nombre(self):
        return self._nombre

    @nombre.setter
    def nombre(self, nombre):
        self._nombre = nombre

    @property
    def apelldio(self):
        return self._apellido

    @apelldio.setter
    def apellido(self, apellido):
        self._apellido = apellido

    @property
    def email(self):
        return self._email

    @email.setter
    def email(self, email):
        self._email = email


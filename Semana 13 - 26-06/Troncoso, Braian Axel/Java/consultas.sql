-- Comenzamos con CRUD: create (insertar),read (leer),update (actualizar),delete (eliminar)
-- Listar los estudiantes (read)
SELECT * FROM estudiantes2022;
-- Insertar estudiantes
INSERT INTO estudiantes2022 (nombre,apellido,telefono,email) VALUES("Juan","Perez","313123231","jperez@mail.com");
-- Update (modificar)
UPDATE estudiantes2022 SET nombre="Juan Carlos", apellido="Garcia" WHERE idestudiantes2022=1;
-- Delete (eliminar)
DELETE FROM estudiantes2022 WHERE idestudiantes2022=1;
-- Para modificar idestudiantes2022 y comience en 1
ALTER TABLE estudiantes2022 AUTO_INCREMENT =1; -- Es considerado una mala practica, no se debe hacer
CREATE TABLE usuario (
  ID int(11) NOT NULL AUTO_INCREMENT,
  Nombre varchar(20) NOT NULL,
  Apellido varchar(20) NOT NULL,
  Email varchar(20) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- Creación del esquema para la base de datos VerqorVJ
CREATE DATABASE IF NOT EXISTS `VerqorVJ` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `VerqorVJ`;

-- Creación de la tabla Tipo_Usuario
CREATE TABLE IF NOT EXISTS `Tipo_Usuario` (
  `idTipo_Usuario` INT NOT NULL AUTO_INCREMENT,
  `Nombre_tipo` VARCHAR(45) NOT NULL,
  `Descripcion_tipo_usuario` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idTipo_Usuario`)
) ENGINE = InnoDB;

-- Creación de la tabla Usuario
CREATE TABLE IF NOT EXISTS `Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `Correo` VARCHAR(255) NOT NULL,
  `Contrasena` VARCHAR(255) NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Apellido` VARCHAR(45) NOT NULL,
  `FechaNacimiento` DATE NOT NULL,
  `Telefono` VARCHAR(20) NOT NULL,
  `idTipo_Usuario` INT NOT NULL,
  PRIMARY KEY (`idUsuario`),
  FOREIGN KEY (`idTipo_Usuario`) REFERENCES `Tipo_Usuario` (`idTipo_Usuario`)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB;

-- Creación de la tabla Acceso_Web
CREATE TABLE IF NOT EXISTS `Acceso_Web` (
  `idAcceso_Web` INT NOT NULL AUTO_INCREMENT,
  `FechaInicio` DATETIME NOT NULL,
  `FechaSalida` DATETIME NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idAcceso_Web`),
  FOREIGN KEY (`idUsuario`) REFERENCES `Usuario` (`idUsuario`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

-- Creación de la tabla Acceso_VideoJuego
CREATE TABLE IF NOT EXISTS `Acceso_VideoJuego` (
  `idAcceso_VideoJuego` INT NOT NULL AUTO_INCREMENT,
  `FechaInicio` DATETIME NOT NULL,
  `FechaSalida` DATETIME NULL,
  `idAcceso_Web` INT NOT NULL,
  PRIMARY KEY (`idAcceso_VideoJuego`),
  FOREIGN KEY (`idAcceso_Web`) REFERENCES `Acceso_Web` (`idAcceso_Web`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

-- Creación de la tabla Tipo_Financiamiento
CREATE TABLE IF NOT EXISTS `Tipo_Financiamiento` (
  `idTipo_Financiamiento` INT NOT NULL AUTO_INCREMENT,
  `Nombre_financiamiento` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTipo_Financiamiento`)
) ENGINE = InnoDB;

-- Creación de la tabla Partida con la columna 'Ganador' como TINYINT para representar un booleano
CREATE TABLE IF NOT EXISTS `Partida` (
  `idPartida` INT NOT NULL AUTO_INCREMENT,
  `Ganador` TINYINT NOT NULL DEFAULT 0, -- Campo booleano para indicar si el jugador ganó (1) o no (0)
  `idAcceso_VideoJuego` INT NOT NULL,
  `idTipo_Financiamiento` INT NOT NULL,
  PRIMARY KEY (`idPartida`),
  FOREIGN KEY (`idAcceso_VideoJuego`) REFERENCES `Acceso_VideoJuego` (`idAcceso_VideoJuego`)
    ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`idTipo_Financiamiento`) REFERENCES `Tipo_Financiamiento` (`idTipo_Financiamiento`)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB;

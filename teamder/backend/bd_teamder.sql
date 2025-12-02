CREATE TABLE IF NOT EXISTS `Usuarios` (
	`id_usuario` int AUTO_INCREMENT NOT NULL UNIQUE,
	`nombre` varchar(50) NOT NULL,
	`correo` varchar(50) NOT NULL,
	`telefono` varchar(50) NULL,
	`contraseña` varchar(40) NOT NULL,
	PRIMARY KEY (`id_usuario`)
);

CREATE TABLE IF NOT EXISTS `categorias` (
	`id_categoria` int AUTO_INCREMENT NOT NULL UNIQUE,
	`nombre` varchar(100) NOT NULL,
	PRIMARY KEY (`id_categoria`)
);

CREATE TABLE IF NOT EXISTS `solicitudes` (
	`id_solicitud` int AUTO_INCREMENT NOT NULL UNIQUE,
	`id_agendaalumno` int NOT NULL,
	`id_categoria` int NOT NULL,
	`fecha_creacion` datetime NOT NULL,
	`estado` varchar(20) NOT NULL,
	PRIMARY KEY (`id_solicitud`)
);

CREATE TABLE IF NOT EXISTS `tutores` (
	`id_tutor` int AUTO_INCREMENT NOT NULL UNIQUE,
	`nombre` varchar(50) NOT NULL,
	`apellido` varchar(50) NOT NULL,
	`correo` varchar(50) NOT NULL,
	`telefono` varchar(50) NOT NULL,
	`id_especialidad` int NOT NULL,
	PRIMARY KEY (`id_tutor`)
);

CREATE TABLE IF NOT EXISTS `especialidades` (
	`id_especialidad` int AUTO_INCREMENT NOT NULL UNIQUE,
	`nombre` varchar(50) NOT NULL,
	PRIMARY KEY (`id_especialidad`)
);

CREATE TABLE IF NOT EXISTS `asignaciones_tutores` (
	`id_asignacion` int AUTO_INCREMENT NOT NULL UNIQUE,
	`id_solicitud` int NOT NULL,
	`id_agendatutor` int NOT NULL,
	`fecha_asignacion` datetime NOT NULL,
	`estatus_aceptacion` varchar(20) NOT NULL,
	PRIMARY KEY (`id_asignacion`)
);

CREATE TABLE IF NOT EXISTS `sesiones_asesoria` (
	`id_sesion` int AUTO_INCREMENT NOT NULL UNIQUE,
	`id_solicitud` int NOT NULL,
	`fecha` date NOT NULL,
	`duracion` time NOT NULL,
	`observaciones` text NOT NULL,
	`id_tutor` int NOT NULL,
	PRIMARY KEY (`id_sesion`)
);

CREATE TABLE IF NOT EXISTS `agendas_usuarios` (
	`id_agendaalumno` int AUTO_INCREMENT NOT NULL UNIQUE,
	`fecha` datetime NOT NULL,
	`finfecha` datetime NOT NULL,
	`id_usuario` int NOT NULL,
	PRIMARY KEY (`id_agendaalumno`)
);

CREATE TABLE IF NOT EXISTS `agendas_tutores` (
	`id_agendatutor` int AUTO_INCREMENT NOT NULL UNIQUE,
	`fecha` datetime NOT NULL,
	`fechafin` datetime NOT NULL,
	`id_tutor` int NOT NULL,
	PRIMARY KEY (`id_agendatutor`)
);



ALTER TABLE `solicitudes` ADD CONSTRAINT `solicitudes_fk1` FOREIGN KEY (`id_agendaalumno`) REFERENCES `agendas_usuarios`(`id_agendaalumno`);

ALTER TABLE `solicitudes` ADD CONSTRAINT `solicitudes_fk2` FOREIGN KEY (`id_categoria`) REFERENCES `categorias`(`id_categoria`);
ALTER TABLE `tutores` ADD CONSTRAINT `tutores_fk5` FOREIGN KEY (`id_especialidad`) REFERENCES `especialidades`(`id_especialidad`);

ALTER TABLE `asignaciones_tutores` ADD CONSTRAINT `asignaciones_tutores_fk1` FOREIGN KEY (`id_solicitud`) REFERENCES `solicitudes`(`id_solicitud`);

ALTER TABLE `asignaciones_tutores` ADD CONSTRAINT `asignaciones_tutores_fk2` FOREIGN KEY (`id_agendatutor`) REFERENCES `agendas_tutores`(`id_agendatutor`);
ALTER TABLE `sesiones_asesoria` ADD CONSTRAINT `sesiones_asesoria_fk1` FOREIGN KEY (`id_solicitud`) REFERENCES `solicitudes`(`id_solicitud`);

ALTER TABLE `sesiones_asesoria` ADD CONSTRAINT `sesiones_asesoria_fk5` FOREIGN KEY (`id_tutor`) REFERENCES `tutores`(`id_tutor`);
ALTER TABLE `agendas_usuarios` ADD CONSTRAINT `agendas_usuarios_fk3` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios`(`id_usuario`);
ALTER TABLE `agendas_tutores` ADD CONSTRAINT `agendas_tutores_fk3` FOREIGN KEY (`id_tutor`) REFERENCES `tutores`(`id_tutor`);
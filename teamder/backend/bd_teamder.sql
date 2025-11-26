CREATE TABLE IF NOT EXISTS `interes` (
	`id_interes` int AUTO_INCREMENT NOT NULL,
	`nombre_interes` varchar(100) NOT NULL,
	PRIMARY KEY (`id_interes`)
);

CREATE TABLE IF NOT EXISTS `usuario` (
	`id_usuario` int AUTO_INCREMENT NOT NULL,
	`nombre` varchar(100) NOT NULL,
	`correo` varchar(100) NOT NULL,
	`carrera` varchar(100) NOT NULL,
	`semestre` varchar(20) NOT NULL,
	`id_interes` int NOT NULL,
	PRIMARY KEY (`id_usuario`)
);

CREATE TABLE IF NOT EXISTS `especialidad` (
	`id_especialidad` int AUTO_INCREMENT NOT NULL,
	`especialidad` varchar(100) NOT NULL,
	PRIMARY KEY (`id_especialidad`)
);

CREATE TABLE IF NOT EXISTS `tutor` (
	`id_tutor` int AUTO_INCREMENT NOT NULL,
	`nombre` varchar(100) NOT NULL,
	`correo` varchar(100) NOT NULL,
	`id_especialidad` int NOT NULL,
	PRIMARY KEY (`id_tutor`)
);

CREATE TABLE IF NOT EXISTS `respuestatutor` (
	`id_respuesta_tutor` int AUTO_INCREMENT NOT NULL,
	`estatus` varchar(50) NOT NULL,
	`fecha_respuesta` date NOT NULL,
	PRIMARY KEY (`id_respuesta_tutor`)
);

CREATE TABLE IF NOT EXISTS `solicitud` (
	`id_solicitud` int AUTO_INCREMENT NOT NULL,
	`id_usuario` int NOT NULL,
	`id_respuesta_tutor` int NOT NULL,
	`fecha_creacion` date NOT NULL,
	`fecha_respuesta` date NOT NULL,
	`motivo_solicitud` text NOT NULL,
	PRIMARY KEY (`id_solicitud`)
);

CREATE TABLE IF NOT EXISTS `temaasesoria` (
	`id_temaasesoria` int AUTO_INCREMENT NOT NULL,
	`tipo_tema` varchar(100) NOT NULL,
	PRIMARY KEY (`id_temaasesoria`)
);

CREATE TABLE IF NOT EXISTS `sesionasesoria` (
	`id_sesion` int AUTO_INCREMENT NOT NULL,
	`id_tutor` int NOT NULL,
	`id_solicitud` int NOT NULL,
	`id_temaasesoria` int NOT NULL,
	`fecha` date NOT NULL,
	`duracion` time NOT NULL,
	`observaciones` text NOT NULL,
	PRIMARY KEY (`id_sesion`)
);

CREATE TABLE IF NOT EXISTS `usuariosesion` (
	`id_usuario` int NOT NULL,
	`id_sesion` int NOT NULL,
	PRIMARY KEY (`id_usuario`, `id_sesion`)
);


ALTER TABLE `usuario` ADD CONSTRAINT `usuario_fk5` FOREIGN KEY (`id_interes`) REFERENCES `interes`(`id_interes`);

ALTER TABLE `tutor` ADD CONSTRAINT `tutor_fk3` FOREIGN KEY (`id_especialidad`) REFERENCES `especialidad`(`id_especialidad`);

ALTER TABLE `solicitud` ADD CONSTRAINT `solicitud_fk1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`);

ALTER TABLE `solicitud` ADD CONSTRAINT `solicitud_fk2` FOREIGN KEY (`id_respuesta_tutor`) REFERENCES `respuestatutor`(`id_respuesta_tutor`);

ALTER TABLE `sesionasesoria` ADD CONSTRAINT `sesionasesoria_fk1` FOREIGN KEY (`id_tutor`) REFERENCES `tutor`(`id_tutor`);

ALTER TABLE `sesionasesoria` ADD CONSTRAINT `sesionasesoria_fk2` FOREIGN KEY (`id_solicitud`) REFERENCES `solicitud`(`id_solicitud`);

ALTER TABLE `sesionasesoria` ADD CONSTRAINT `sesionasesoria_fk3` FOREIGN KEY (`id_temaasesoria`) REFERENCES `temaasesoria`(`id_temaasesoria`);
ALTER TABLE `usuariosesion` ADD CONSTRAINT `usuariosesion_fk0` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`);

ALTER TABLE `usuariosesion` ADD CONSTRAINT `usuariosesion_fk1` FOREIGN KEY (`id_sesion`) REFERENCES `sesionasesoria`(`id_sesion`);
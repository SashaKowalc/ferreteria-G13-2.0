CREATE DATABASE  IF NOT EXISTS `ferreteria`;
USE `ferreteria`;

DROP TABLE IF EXISTS `ferreteria`.`producto_categoria`;
DROP TABLE IF EXISTS `ferreteria`.`categorias`;
DROP TABLE IF EXISTS `ferreteria`.`carritos`;
DROP TABLE IF EXISTS `ferreteria`.`detalle_venta`;
DROP TABLE IF EXISTS `ferreteria`.`productos`;
DROP TABLE IF EXISTS `ferreteria`.`ventas`;
DROP TABLE IF EXISTS `ferreteria`.`usuarios`;
DROP TABLE IF EXISTS `ferreteria`.`categoria_usuario`;


CREATE TABLE `ferreteria`.`categorias` (
  `categoria_id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`categoria_id`));



CREATE TABLE `ferreteria`.`categoria_usuario` (
  `categoria_usuario_id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`categoria_usuario_id`));



CREATE TABLE `ferreteria`.`usuarios` (
  `usuario_id` INT NOT NULL AUTO_INCREMENT,
  `categoria_id` INT NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(200) NOT NULL,
  `localidad` VARCHAR(45) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `edad` INT NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `nombre_usuario` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(100) NOT NULL,
  `imagen` VARCHAR(45) NULL,
  `tipo_usuario` int not  NULL,
  PRIMARY KEY (`usuario_id`));





CREATE TABLE `ferreteria`.`ventas` (
  `venta_id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NOT NULL,
  `total` DECIMAL(2) NOT NULL,
  PRIMARY KEY (`venta_id`),
  CONSTRAINT `usuario_id`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `ferreteria`.`usuarios` (`usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);




CREATE TABLE `ferreteria`.`productos` (
  `producto_id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `tamanio` VARCHAR(30) NOT NULL,
  `color` VARCHAR(30) NULL,
  `precio` DECIMAL NOT NULL,
  `fabricante` VARCHAR(45) NULL,
  `modelo` VARCHAR(45) NULL,
  `stock` INT NULL,
  `descuento` INT NULL,
  `imagen` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(300) NULL,
  PRIMARY KEY (`producto_id`));
CREATE DATABASE  IF NOT EXISTS `ferreteria`;
USE `ferreteria`;

DROP TABLE IF EXISTS `ferreteria`.`producto_categoria`;
DROP TABLE IF EXISTS `ferreteria`.`categorias`;
DROP TABLE IF EXISTS `ferreteria`.`carritos`;
DROP TABLE IF EXISTS `ferreteria`.`detalle_venta`;
DROP TABLE IF EXISTS `ferreteria`.`productos`;
DROP TABLE IF EXISTS `ferreteria`.`ventas`;
DROP TABLE IF EXISTS `ferreteria`.`usuarios`;
DROP TABLE IF EXISTS `ferreteria`.`categoria_usuario`;


CREATE TABLE `ferreteria`.`categorias` (
  `categoria_id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`categoria_id`));



CREATE TABLE `ferreteria`.`categoria_usuario` (
  `categoria_usuario_id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`categoria_usuario_id`));



CREATE TABLE `ferreteria`.`usuarios` (
  `usuario_id` INT NOT NULL AUTO_INCREMENT,
  `categoria_id` INT NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(200) NOT NULL,
  `localidad` VARCHAR(45) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `edad` INT NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `nombre_usuario` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(100) NOT NULL,
  `imagen` VARCHAR(45) NULL,
  `tipo_usuario` int not  NULL,
  PRIMARY KEY (`usuario_id`));





CREATE TABLE `ferreteria`.`ventas` (
  `venta_id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NOT NULL,
  `total` DECIMAL(2) NOT NULL,
  PRIMARY KEY (`venta_id`),
  CONSTRAINT `usuario_id`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `ferreteria`.`usuarios` (`usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);




CREATE TABLE `ferreteria`.`productos` (
  `producto_id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `tamanio` VARCHAR(30) NOT NULL,
  `color` VARCHAR(30) NULL,
  `precio` DECIMAL NOT NULL,
  `fabricante` VARCHAR(45) NULL,
  `modelo` VARCHAR(45) NULL,
  `stock` INT NULL,
  `descuento` INT NULL,
  `imagen` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(300) NULL,
  PRIMARY KEY (`producto_id`));




CREATE TABLE `ferreteria`.`detalle_venta` (
  `detalle_venta_id` INT NOT NULL AUTO_INCREMENT,
  `venta_id` INT NOT NULL,
  `producto_id` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `precio_unitario` DECIMAL NOT NULL,
  `precio_total` DECIMAL(2) NOT NULL,
  PRIMARY KEY (`detalle_venta_id`),
  CONSTRAINT `venta_id`
    FOREIGN KEY (`venta_id`)
    REFERENCES `ferreteria`.`ventas` (`venta_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `producto_id`
    FOREIGN KEY (`producto_id`)
    REFERENCES `ferreteria`.`productos` (`producto_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);



CREATE TABLE `ferreteria`.`carritos` (
  `carrito_id` INT NOT NULL,
  `producto_id` INT NOT NULL,
  `usuario_id` INT NOT NULL,
  `estado` BINARY NULL,
  `precio` DECIMAL NOT NULL,
  `cantidad` INT NOT NULL,
  PRIMARY KEY (`carrito_id`),
  CONSTRAINT `producto_id_fk`
    FOREIGN KEY (`producto_id`)
    REFERENCES `ferreteria`.`productos` (`producto_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `usuario_id_fk`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `ferreteria`.`usuarios` (`usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
    
    CREATE TABLE `ferreteria`.`producto_categoria` (
  `producto_categoria_id` INT NOT NULL AUTO_INCREMENT,
  `producto_fk` INT NOT NULL,
  `categoria_fk` INT NOT NULL,
  PRIMARY KEY (`producto_categoria_id`),
  CONSTRAINT `producto_fk`
    FOREIGN KEY (`producto_fk`)
    REFERENCES `ferreteria`.`productos` (`producto_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `categoria_fk`
    FOREIGN KEY (`categoria_fk`)
    REFERENCES `ferreteria`.`categorias` (`categoria_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
    
INSERT INTO `productos` VALUES 	(1,'Juego Set Herramientas','Forest','74 piezas','negro',28800,'steden','50x80cm',5,20,'/images/img-1678036230899.png','Contenido: 17 llaves tubo acople 1/2" ,10 puntas atornillador, 9 llaves tubo acople 1/4",9 llaves allen.,8 llaves combinadas.,6 destornilladores de precisión planos y phillips.4 destornilladores: planos y phillips.'),
(2, 'Pintura', 'Alba', '20Ls', 'Blanco', 19800, 'Ind. Argentina', 'wer', 12, 10, "/images/pintura-alba.png", "Su exclusiva FORMULA AVANZADA, única en el mercado, utiliza la tecnología más moderna en desarrollo y elaboración de pinturas; permite obtener un producto: Con excelente poder cubriente, nivelación y gran lavabilidad, de óptimo poder antihongo, fácil de aplicar y de rápido secado. No salpica. No deja olor."),
(3,'Cortadora de ceramicos', 'Zonta', '64cm', 'Rojo', 61200, 'Ind. Arg', 'mlo', 6, 20, "/images/cortadoraderamica.jpg", "Cortadora de cerámicos con regla de aluminio para una mejor graduación de cortes en ángulo y con carrito trazador. Consta de un tronzador para lograr cortes perfectos en materiales duros. Su corte máximo es de 64 cm. Su pieza de corte es una rueda de tungsteno y posee como superficie de apoyo una almohadilla de goma eva. Corta materiales como porcelanatos y cerámicos blandos, duros y semiduros. Con diseño moderno y ergonómico y de gran durabilidad."),
(4, 'Taladro', 'Omaha', '1800w', 'Rojo', 28000, 'Ind. Argentina', "RM-32PLUS", 6, 0, "/images/taladro.jpg", "Este rotomartillo Omaha  es lo que necesitás para encarar trabajos pesados, seas una persona aficionada o un profesional. Su funcionamiento es muy similar al de un taladro, solo que esta herramienta es más potente y permite trabajar en materiales más firmes.Ahora edición limitada con sierra copa de 65mm y su respecto eje de 300mm, ideal para trabajos de instalación de equipos de refrigeración."),
(5,"Tester Profesional Multimetro Digital","MLM","MLM","amarillo","2298","ind.Arg","XL830L","12","2","/images/img-1678052453015.png","Alimentación: 1 batería 9V (NO INCLUIDA),Dimensiones: 135mm x 67mm x 33m1m,Peso: Alrededor de 145g (incluyendo las baterías),Display LCD 3½ dígitos (1999 cuentas) 0.6,Selección de Rango Manual,Indicador de bateria baja,Interfaz con el usuario sencilla"),
(6,'Tornillo','achi','3cm','Dorado',120,'filto','hjke',200,2,'/images/img-1678045583057.png','El mejor tormillo'),
(7,'Ionizador Electrónico','ion','50cm','negro',24500,'Ind. Argentina','ION-2',5,3,'/images/img-1678048152792.png','Mantenga su piscina impecable de manera sencilla y económica, ahorre dinero en cloro, alguicida, ácido y demás productos químicos.'),
(8,'Destornilladores','Buut','20cm','negro',2200,'Ind. Argentina','bult',5,3,'/images/img-1678045800818.png','conjunto de destornilladores perfectos para reparacion electronica'),
(9,'Lampara','Philips','20cm','blanca',2000,'Ind. Argentina','10w',10,44,'/images/img-1678046374095.png','exlente lampara de bajo consumo '),
(10,'Taladro de banco','kld','25x25cm','azul',40523,'Ind. Argentina','KLD',5,5,'/images/img-1678046831933.png','exelente para el rubro metal-mecanico y electrnico '),
(11,'Morsa de banco','Barberos','8 pulgadas','madera',57000,'Ind. Argentina','1090',25,4,'/images/img-1678047002612.png','MORSA BARBERO N°5 Marca: Barbero. Modelo: 5.Ancho de Boca:  28 mm (5").Apertura de Boca: 164 mm (6 1/2").Peso: 22,5 Kg.'),
(12,'Set X 3 Piezas Escofina','Walrus','50x50cm','azul',57000,'Ind. Argentina','2wer',10,3,'/images/img-1678047243003.png','Escofinas set x 3 piezas'),
(13,'Combo Pileta Piscina Cloro','DST','50x50cm','gris',14595,'Ind. Argentina','dst',23,2,'/images/img-1678047548202.png','De gran utilidad a la hora de limpiar su pileta'),
(14,'Limpia Barre Fondo Pileta','Cantares Productos','2m','blanca',9990,'Ind. Argentina','limpia pileta',5,4,'/images/img-1678047962136.png','De gran utilidad a la hora de limpiar su pileta'),
(15,'funda Pileta','Catnip','3x3m','gris',2000,'Ind. Argentina','cubre piletas',45,2,'/images/img-1678048335943.png','Mantenga su pileta libre de basura'),
(16,'Pintura','CasaBlanca','20lts','gris',30000,'Ind. Argentina','latex interior ',2,5,'/images/img-1678048561255.png','pintura de altisima calidad de interiores'),
(17,'Pintura Plavicon','Plavicon','20lts','blanco',28900,'Ind. Argentina','FIbrado ',5,6,'/images/img-1678048766084.png','pintura de altisima calidad '),
(18,'Lija','Matex','220x20cm','gris',325,'Ind. Argentina','ml12 ',23,4,'/images/img-1678048948100.png','lija  altisima calidad '),
(19,'Griferia de baño ','Grif','1x1m','cromado',50000,'Ind. Argentina','xl12 ',2,5,'/images/img-1678049756161.png','griferia de altisima calidad'),
(20,'Flor Ducha Cuadrada ','Libercam','20x20cm','cromado',3999,'Ind. Argentina','kl122 ',6,10,'/images/img-1678049416898.png','Flor Ducha Cuadrada 20x20 Acero Inoxidable + Brazo Caño 40cm'),
(21,'Pala ','stdim','1m','madera',5000,'Ind. Argentina','fr22 ',5,11,'/images/img-1678059943276.png','pala exelente calidad y precio'),
(22,'Motosierra ','Zieken','45x89cm','verde',30000,'Ind. Argentina','stv12 ',4,10,'/images/img-1678060020329.png','Sierra  exelente calidad y precio'),
(23,'Pulverizador Fumigador','Forest & Garden','5L','verde',7600,'Ind. Argentina','PP505/1 ',4,10,'/images/img-1678062577640.png','Exelente calidad y precio , para la mejor fumigacion');










INSERT INTO `categorias` VALUES (1,'herramientas'), (2,'pintura'), (3,'jardineria'), (4,'piletas'), (5,'griferia');

INSERT INTO `categoria_usuario` VALUES (1,'administrador'), (2,'cliente');

INSERT INTO `producto_categoria` VALUES (1,1,1), (2,2,2), (3,3,1);
INSERT INTO `producto_categoria` VALUES (4,4,1), (5,5,1), (6,6,1), (7,7,4), (8,8,1),(9,9,1), (10,10,1),(11,11,1),(12,12,1),(13,13,4),(14,14,4),(15,15,4),(16,16,2),(17,17,2),(18,18,2),(19,19,5),(20,20,5),
(21,21,3),(22,22,3),(23,23,3);
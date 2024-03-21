-- Active: 1707761841846@@127.0.0.1@5432@estimaciones

CREATE TABLE aseguradora(
    id SERIAL NOT NULL PRIMARY KEY,
    nombre VARCHAR(255)
);

ALTER TABLE aseguradora
ADD logotipo bytea;


CREATE TABLE usuario(
  id SERIAL NOT NULL PRIMARY KEY,
    nombre VARCHAR(255),
    clave  VARCHAR(255),
    foto_perfil bytea
);


CREATE TABLE estimacion(  
    id SERIAL NOT NULL PRIMARY KEY,
    asegurado VARCHAR(255),    
    estimado_por VARCHAR(255),
    fecha_evaluacion DATE NOT NULL DEFAULT now(),
    aseguradora_id int,
    placa VARCHAR(255),
    marca VARCHAR(255),
    modelo VARCHAR(255),
    color VARCHAR(255),
    anio_vehiculo VARCHAR(255),
    vin_o_serie VARCHAR(255),
    obs VARCHAR(255),
    CONSTRAINT fk_aseguradora
      FOREIGN KEY(aseguradora_id) 
        REFERENCES aseguradora(id)
);

CREATE TABLE reparacion(
    id SERIAL NOT NULL PRIMARY KEY,
    estimacion_id int,
    detalle_reparacion VARCHAR(255),
    precio NUMERIC(9,2),
    CONSTRAINT fk_estimacion
      FOREIGN KEY(estimacion_id) 
        REFERENCES estimacion(id)
);

CREATE TABLE reparacion_adicional (
    id SERIAL NOT NULL PRIMARY KEY,
    estimacion_id int,
    reparacion_adicional_detalle VARCHAR(255),
    valor_reparacion NUMERIC(9,2),
    tipo VARCHAR(255),
    CONSTRAINT fk_estimacion
      FOREIGN KEY(estimacion_id) 
        REFERENCES estimacion(id)
);

CREATE TABLE repuesto(
   id SERIAL NOT NULL PRIMARY KEY,
    estimacion_id int,
    descripcion VARCHAR(255),    
    precio NUMERIC(9,2),
    CONSTRAINT fk_estimacion
      FOREIGN KEY(estimacion_id) 
        REFERENCES estimacion(id)
);


INSERT INTO usuario(nombre,clave)
VALUES ('gaspar','123');
  



INSERT INTO aseguradora(nombre)
VALUES ('Particular'),('Ficohsa Seguros'),('MAFFRE');

INSERT INTO estimacion(asegurado,estimado_por,fecha_evaluacion,aseguradora_id,placa,marca,modelo,color,anio_vehiculo,vin_o_serie,obs)
VALUES ('Franco Lopez','Meylin  Amador','2024-01-01',1,'HAK5195','Suzuki','Dzire','Rojo','2018','MA3ZF63SXJA185480','x'),
('Oscar Rene Aguilera','Mercy Velasquez','2024-01-01',1,'HED8273','Toyota','Hilux','Blanco tricapa','2022','8AJBA3CD501704581','x'),
('Ivone Elizabeth Varela Santos','Mercy Velasquez','2024-01-01',2,'HAA3997','Ford','Ranger','Silver','2017','LFPPXXMJ2PHR74683','x'),
('Coorporacion Dinant','Mercy Velasquez','2024-01-01',2,'HDQ3862','Toyota','Corolla','Blanco','2015','5YFBURHEXFP255965','x'),
('Jose Manuel Carcamo','Katerine Matute','2024-01-01',3,'S/P','Bajaj','Pulsar 150','Negro/Franjas Decorativas','2023','MD2A11CX1PCE00039','x');

INSERT INTO reparacion(estimacion_id,detalle_reparacion,precio)
VALUES (1,'Reparar  y pintar  guardafango LH','0'),
(1,'Reparar  y pintar  bomper  trasero','0'),
(1,'Reparar  y pintar  faldon LH','0'),
(1,'Reparar  y pintar  puerta  trasera LH','0'),
(1,'Reparar  y pintar puerta del. LH','0'),
(2,'Bomper frontal','0'),
(3,'Des/cam  via lh de  guardafango','0'),
(3,'des/cam modlura de  guardafango LH','0'),
(3,'Puerta Del. LH','0'),
(3,'Guardafango LH','0'),
(4,'Pescante rh','2504.35'),
(4,'Faldon RH','2504.35'),
(4,'Puerta Trasera RH','2504.35'),
(5,'Reparar y pintar tanque de combustible de moto','0');

INSERT INTO reparacion_adicional(estimacion_id,reparacion_adicional_detalle,valor_reparacion,tipo)
VALUES (1 ,'Alineamiento de Ruedas','650','Normal'),
(1 ,'Armado y Balanceo','250','Normal'),
(1 ,'Rin Delantero LH','1300','Normal'),
(1 ,'Carga de A/C','1100','Normal'),
(2 ,'M/O Mecanica','1500','Mecanica'),
(2 ,'Pulido General','1100','Normal'),
(2 ,'Alineamiento y Balanceo','900','Normal'),
(3 ,'Carga de A/C Doble','2400','Normal'),
(4 ,'Remover sistema de A/C parte trasera','2000','Normal'),
(4 ,'Mano de Obra Mecanica','5000','Normal'),
(4 ,'Des/montar Escape','0','Mecanica'),
(4 ,'Des/Montar Barra Tensora RH','0','Mecanica'),
(5 ,'Des/Montar Barra Tensora LH','0','Mecanica'),
(5 ,'Des/Montar Hules de Escape','0','Mecanica'),
(5 ,'Alineamiento de Ruedas','650','Normal');

INSERT INTO repuesto(estimacion_id,descripcion,precio)
VALUES (3 ,'Moldura de guardafango cromada LH','0'),
(3 ,'Via de Guardafango LH','0'),
(3 ,'Seguros de lodera del. LH (4)','350');
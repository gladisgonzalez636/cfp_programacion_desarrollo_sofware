CREATE TABLE categorias(
  id INTEGER PRIMARY KEY,
  nombre VARCHAR2(250)
);

CREATE TABLE productos(
  id INTEGER PRIMARY KEY,
  nombre_producto VARCHAR2(250),
  precio NUMBER,
  stock INTEGER,
  categoria_id INTEGER,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE clientes(
  id INTEGER PRIMARY KEY,
  nombre VARCHAR2(250)
);

CREATE TABLE pedidos(
  id INTEGER PRIMARY KEY,
  cliente_id INTEGER,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE detalle_pedido(
  pedido_id INTEGER,
  producto_id INTEGER,
  cantidad INTEGER,
  FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
  FOREIGN KEY (producto_id) REFERENCES productos(id)

);

INSERT INTO categorias VALUES(1,'Limpieza');
INSERT INTO categorias VALUES(2,'Mascotas');
INSERT INTO categorias VALUES(3,'Cocina');
INSERT INTO categorias VALUES(4,'Baños');
INSERT INTO categorias VALUES(5,'Productos de higiene');
INSERT INTO categorias VALUES(6,'Jardinería');

INSERT INTO productos VALUES(1,'Escoba',15.00,10,1);
INSERT INTO productos VALUES(2,'Collares',25.75,13,2);
INSERT INTO productos VALUES(3,'Cucharon',10.00,15,3);
INSERT INTO productos VALUES(4,'Platos',15.00,5,3);
INSERT INTO productos VALUES(5,'Concentrado',150.00,7,2);
INSERT INTO productos VALUES(6,'Suavizante de ropa',180.00,2,1);

INSERT INTO clientes VALUES(1,'Karen');
INSERT INTO clientes VALUES(2,'Carmen');
INSERT INTO clientes VALUES(3,'Lucia');

INSERT INTO pedidos VALUES(1,2);
INSERT INTO pedidos VALUES(2,1);
INSERT INTO pedidos VALUES(3,3);

INSERT INTO detalle_pedido VALUES(1,1,2);
INSERT INTO detalle_pedido VALUES(2,2,2);
INSERT INTO detalle_pedido VALUES(3,3,3);
INSERT INTO detalle_pedido VALUES(3,4,1);
INSERT INTO detalle_pedido VALUES(1,5,2);
INSERT INTO detalle_pedido VALUES(1,6,2);
SELECT * FROM detalle_pedido;

SELECT productos.id, productos.nombre_producto, categorias.nombre FROM productos 
JOIN categorias ON categoria_id = categorias.id ORDER BY categorias.id;




CREATE DATABASE bamazon;

USE  bamazon;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NULL,
department_name VARCHAR(50) NULL,
price integer,
stock_quantity 	integer,
PRIMARY KEY (id)
);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("PS4","Electronics",300,15);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Apple Watch","Electronics",200,35);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Callaway Epic Flash Driver","Sports",530,10);
-- SELECT * FROM products;

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Rolex Oyster","Watches",12700,3);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Hammer","Home Improvement",20,150);
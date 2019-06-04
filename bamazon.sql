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

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("The Sandlot","Movies",10,40);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("12 pack Pepsi","Refreshments",7,80);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("BioShock","Electronics",30,5);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Size 10 Mens Brooks Running Shoes","Shoes",50,25);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Steph Curry Jersey Medium","Sports Jerseys",70,45);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("1965 Ford Shelby","Cars",1595000,1);

SELECT * FROM products;
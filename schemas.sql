-- DROP DATABASE IF EXISTS amazon_db;

CREATE DATABASE amazon_db;

USE amazon_db;

CREATE table products (
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR (100) NOT NULL,
department_name VARCHAR (100) NOT NULL,
price DECIMAL (10,2) NOT NULL,
stock_quantity INT (15) NOT NULL,
PRIMARY KEY (item_id)

);

SELECT * FROM products;




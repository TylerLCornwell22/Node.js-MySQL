-- DROP DATABASE IF EXISTS amazon_db;

CREATE DATABASE amazon_db;

USE amazon_db;

CREATE table products (
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR (100) NOT NULL,
department_name VARCHAR (100) NULL,
price DECIMAL (10,2) NOT NULL,
stock_quantity INT (15) NOT NULL,
PRIMARY KEY (item_id)

);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tomb Raider", "Video Games", 49.95, 150),
  ("Wolfenstein", "Video Games", 59.99, 200),
  ("Chicken", "Food", 24.50, 50),
  ("Glasses", "Apparel", 75.00, 5),
  ("Black Shirt", "Apparel", 54.25, 35),
  ("Tent", "Camping", 42.42, 42),
  ("Sleeping bag", "Camping", 15.00, 25),
  ("Shrek", "Films", 25.50, 57),
  ("Life", "Board Games", 30.50, 35),
  ("Candy Landz", "Board Games", 19.95, 23);







DROP DATABASE IF EXISTS `app-storeGame`;
CREATE DATABASE IF NOT EXISTS `app-storeGame`;

USE `app-storeGame`;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(32) NOT NULL,
  cpf VARCHAR(14) NOT NULL,
  mobile_number VARCHAR(15) NOT NULL,
  role VARCHAR(20) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY `email_un` (email)
);

CREATE TABLE IF NOT EXISTS sales (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  seller_id INT NOT NULL,
  total_price DECIMAL(9,2) NOT NULL,
  client_address VARCHAR(100) NOT NULL,
  client_district VARCHAR(50) NOT NULL,
  client_country VARCHAR(50) NOT NULL,
  client_cep VARCHAR(9) NOT NULL,
  sale_date DATETIME NOT NULL,
  status_sale VARCHAR(50) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (seller_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(30) NOT NULL,
  price DECIMAL(4,2) NOT NULL,
  url_image VARCHAR(200) NOT NULL DEFAULT '',
  PRIMARY KEY(id),
  UNIQUE KEY `name` (name)
);

CREATE TABLE IF NOT EXISTS sales_products (
  sale_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY(sale_id, product_id),
  FOREIGN KEY(sale_id) REFERENCES sales(id),
  FOREIGN KEY(product_id) REFERENCES products(id)
);

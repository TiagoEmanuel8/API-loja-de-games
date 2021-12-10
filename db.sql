DROP DATABASE IF EXISTS `app-storeGame`;
CREATE DATABASE IF NOT EXISTS `app-storeGame`;

USE `app-storeGame`;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(64) NOT NULL,
  cpf VARCHAR(13) NOT NULL,
  mobile_number VARCHAR(15),
  address VARCHAR(100) NOT NULL,
  address_number INT(6),
  district VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  state TEXT(4),
  country TEXT(50) NOT NULL,
  cep INT(8) NOT NULL,
  role VARCHAR(20) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY `email_un` (email)
);

CREATE TABLE IF NOT EXISTS sales (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  seller_id INT NOT NULL,
  total_price DECIMAL(9,2) NOT NULL,
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
  price DECIMAL(9,2) NOT NULL,
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

INSERT INTO users (id, name, email, password, cpf, mobile_number, address, address_number, district, city, state, country, cep, role) VALUES
	(1,
    'Filipe Bernardo Eduardo Costa',
    'filipebernardoeduardocosta@gmail.com',
    '$2a$10$u0FzQuq1dId4Sd2L0B03FOwR7YyPi7FB0mJPsn1ELhEcS7o8l81JC',
    46360452464,
    8326447157,
    'Rua Cruzeiro do Sul',
    24,
    'Calafate',
    'Rio Branco',
    'AC',
    'BR',
    69914374,
    'administrator'
    );
    
INSERT INTO sales (id, user_id, seller_id, total_price, sale_date, status_sale) VALUES
 	(2, 3, 2, 169.8, "2021/12/08", "pagamento concluido");
    
INSERT INTO products (id, name, type, price, url_image) VALUES
	(1, 'Battlefield 2042', 'Xbox One | X|S', 210.5, 'http://localhost:3001/images/bf2042_xbox.jpg');

INSERT INTO sales_products (sale_id, product_id, quantity) VALUES
	(1, 2, 6);

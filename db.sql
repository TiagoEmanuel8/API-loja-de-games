DROP DATABASE IF EXISTS `app-storeGame`;

CREATE DATABASE IF NOT EXISTS `app-storeGame`;

USE `app-storeGame`;

CREATE TABLE
    IF NOT EXISTS users (
        id INT NOT NULL AUTO_INCREMENT,
        name TEXT(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(160) NOT NULL,
        cpf INT(11) NOT NULL,
        mobile_number INT(15),
        address VARCHAR(100) NOT NULL,
        address_number INT(100),
        district TEXT(100) NOT NULL,
        city TEXT(50) NOT NULL,
        state TEXT(20) NOT NULL,
        country TEXT(3) NOT NULL,
        cep INT(8) NOT NULL,
        role TEXT(20) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY `email_un` (email)
    );

CREATE TABLE
    IF NOT EXISTS sales (
        id INT NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        seller_id INT NOT NULL,
        total_price DECIMAL(9, 2) NOT NULL,
        sale_date DATETIME NOT NULL,
        status_sale VARCHAR(50) NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (seller_id) REFERENCES users(id)
    );

CREATE TABLE
    IF NOT EXISTS products (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        type VARCHAR(30) NOT NULL,
        price DECIMAL(4, 2) NOT NULL,
        quantity INT,
        url_image VARCHAR(200) NOT NULL DEFAULT '',
        PRIMARY KEY(id),
        UNIQUE KEY `name` (name)
    );

CREATE TABLE
    IF NOT EXISTS sales_products (
        sale_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        PRIMARY KEY(sale_id, product_id),
        FOREIGN KEY(sale_id) REFERENCES sales(id),
        FOREIGN KEY(product_id) REFERENCES products(id)
    );
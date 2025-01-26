CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    brand VARCHAR(255),
    price DECIMAL(10, 2),
    category VARCHAR(255),
    description TEXT
);

CREATE TABLE suppliers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    contact_info TEXT
);

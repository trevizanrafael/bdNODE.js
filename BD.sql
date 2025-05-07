CREATE DATABASE empresa;
USE empresa;
CREATE TABLE funcionarios (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100),
cargo VARCHAR(100)
);
INSERT INTO funcionarios (nome, cargo) VALUES ('Carlos', 'Desenvolvedor');
INSERT INTO funcionarios (nome, cargo) VALUES ('Rafael', 'Pessoa Muito Legal');
UPDATE funcionarios
SET cargo = 'Líder Técnico'
WHERE nome = 'Rafael';

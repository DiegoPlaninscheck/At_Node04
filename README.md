# At_Node04

```javascript

create database node_04;

create table cliente(
    cpf char(15) not null primary key,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null,
    cep_endereco char(15) not null,
    foreign key (cep_endereco) references endereco(cep)
);

create table pedido (
    id int not null primary key auto_increment,
    dataPedido date not null,
    hora time not null, 
    valorTotal double not null,
    retiradaEntrega enum("retirada", "entrega") not null,
    cpf_cliente char(15) not null,
    foreign key (cpf_cliente) references cliente(cpf),
    id_pizza int not null,
    foreign key (id_pizza) references pizza(id),
    id_produto int not null,
    foreign key (id_produto) references produto(id)
    on update cascade
    on delete cascade
);

create table pizza (
    id int not null primary key auto_increment,
    tamanho int not null,
    sabor01 varchar(50),
    sabor02 varchar(50),
    sabor03 varchar(50),
    sabor04 varchar(50) 
);

create table endereco (
    cep char(15) not null primary key,
    rua varchar(50) not null,
    numero int not null,
    complemento varchar(50) not null,
    bairro varchar(50) not null,
    cidade varchar(50) not null,
    estado varchar(50) not null
);

create table produto (
    id int not null primary key auto_increment,
    nome varchar(50) not null,
    tipo varchar(50) not null,
    quantidade int not null
);

```

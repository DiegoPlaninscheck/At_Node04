import mysql from "mysql2";

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "node_04",
});

const novaConexao = conexao.promise();

export const cadastrarCliente = async ({
  cpf,
  nome,
  sobrenome,
  nascimento,
  cep,
  rua,
  numero,
  complemento,
  bairro,
  cidade,
  estado,
}) => {
  novaConexao.query("insert into endereco values (?, ?, ?, ?, ?, ?, ?)", [
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado
  ]);

  novaConexao.query("insert into cliente values (?, ?, ?, ?, ?)", [
    cpf,
    nome,
    sobrenome,
    nascimento,
    cep
  ]);
};

export const cadastrarProduto = async ({ nome, tipo, quantidade }) => {
  novaConexao.query("insert into produto values (?, ?, ?)", [
    nome,
    tipo,
    quantidade
  ]);
};

export const cadastrarPizza = async ({
  tamanho,
  sabor01,
  sabor02,
  sabor03,
  sabor04,
}) => {
  novaConexao.query("insert into pizza values (?, ?, ?, ?, ?)", [
    tamanho,
    sabor01,
    sabor02,
    sabor03,
    sabor04
  ]);
};

export const cadastrarPedido = async ({
  data,
  hora,
  retiradaEntrega,
  valorTotal,
  cpf_cliente,
  id_pizza,
  id_produto,
}) => {
  novaConexao.query("insert into pizza values (?, ?, ?, ?, ?, ?, ?)", [
    data,
    hora,
    retiradaEntrega,
    valorTotal,
    cpf_cliente,
    id_pizza,
    id_produto
  ]);
};

export const mostrarProdutos = () => {
  novaConexao.query("select * from produto");
};

export const mostrarPedido = () => {
  novaConexao.query("select * from pedido");
};

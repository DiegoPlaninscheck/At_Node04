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
    estado,
  ]);

  novaConexao.query("insert into cliente values (?, ?, ?, ?, ?)", [
    cpf,
    nome,
    sobrenome,
    nascimento,
    cep,
  ]);
};

export const cadastrarProduto = async ({ nome, tipo, quantidade }) => {
  novaConexao.query("insert into produto values (null, ?, ?, ?)", [
    nome,
    tipo,
    quantidade,
  ]);
};

export const cadastrarPizza = async ({
  tamanho,
  sabor01,
  sabor02,
  sabor03,
  sabor04,
}) => {
  novaConexao.query("insert into pizza values (null, ?, ?, ?, ?, ?)", [
    tamanho,
    sabor01,
    sabor02,
    sabor03,
    sabor04,
  ]);
};

export const cadastrarPedido = async ({
  dataHora,
  retiradaEntrega,
  valorTotal,
  cpf_cliente,
  id_pizza,
  id_produto,
}) => {
  novaConexao.query("insert into pedido values (null, ?, ?, ?, ?, ?, ?)", [
    dataHora + ":00",
    valorTotal,
    retiradaEntrega,
    cpf_cliente,
    id_pizza,
    id_produto,
  ]);
};

export const mostrarProdutos = () => {
  return novaConexao.query("select * from produto");
};

export const mostrarPizzas = () => {
  return novaConexao.query("select * from pizza");
};

export const mostrarClientes = () => {
  return novaConexao.query("select * from cliente");
};

export const mostrarPedido = () => {
  return novaConexao.query(
    "select dataHora, valorTotal, retiradaEntrega, cpf_cliente, id_pizza, id_produto, sabor01, sabor02, sabor03, sabor04, nome as produto, tamanho from pedido join pizza on pedido.id_pizza = pizza.id join produto on pedido.id_produto = produto.id;"
  );
};

export const deletarProduto = (id) => {
  return novaConexao.query("delete from produto where id = ?", [id]);
};

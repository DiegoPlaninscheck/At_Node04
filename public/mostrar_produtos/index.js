async function pegarProdutos() {
  const response = await fetch("/api/produtos");
  const produtos = await response.json();
  return produtos[0];
}

async function criarProdutos() {
  const produtos = await pegarProdutos();

  const containerGeral = document.getElementById("container-produtos");

  for (const produto of produtos) {
    const div = document.createElement("div");
    div.id = "info";

    const spanTipo = document.createElement("span");
    spanTipo.innerText = `Tipo: ${produto.tipo}`;
    const spanNome = document.createElement("span");
    spanNome.innerText = `Nome: ${produto.nome}`;
    const spanQuantidade = document.createElement("span");
    spanQuantidade.innerText = `Quantidade: ${produto.quantidade}`;

    containerGeral.appendChild(div);
    div.appendChild(spanTipo);
    div.appendChild(spanNome);
    div.appendChild(spanQuantidade);
  }
}

criarProdutos();

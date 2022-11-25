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
    div.classList.add("info");
    div.id = produto.id;

    const spanTipo = document.createElement("span");
    spanTipo.innerText = `Tipo: ${produto.tipo}`;
    const spanNome = document.createElement("span");
    spanNome.innerText = `Nome: ${produto.nome}`;
    const spanQuantidade = document.createElement("span");
    spanQuantidade.innerText = `Quantidade: ${produto.quantidade}`;
    const edicao = document.createElement("span");
    edicao.innerText = "Editar";
    edicao.style.cursor = "pointer";
    // edicao.onclick = editar(produto.id);

    const exclusao = document.createElement("span");
    exclusao.innerText = "Excluir";
    exclusao.style.cursor = "pointer";
    exclusao.addEventListener("toggle", excluir(produto.id));

    div.appendChild(spanTipo);
    div.appendChild(spanNome);
    div.appendChild(spanQuantidade);
    div.appendChild(edicao);
    div.appendChild(exclusao);
    containerGeral.appendChild(div);
  }
}

const editar = (id) => {
  console.log(id);
  // const div = document.getElementById("")

  // if(){

  // }
};

const excluir = (id) => {
  console.log(id);
};

criarProdutos();

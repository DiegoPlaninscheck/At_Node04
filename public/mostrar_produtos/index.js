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

    div.innerHTML = `
      <input id="tipo" value="${produto.tipo}" />
      <input id="nome" value="${produto.nome}" />
      <input id="qtd" value="${produto.quantidade}" />
      <span id="botao" onclick="editar(${produto.id})">Editar</span>
      <span id="botao" onclick="excluir(${produto.id})">Excluir</span>
    `;

    containerGeral.appendChild(div);
  }
}

const editar = async (id) => {
  let divs = document.querySelectorAll(".info");
  for (const div of divs) {
    if (div.id == id) {
      const tipos = document.querySelectorAll(".info #tipo");
      for (let i = 0; i < tipos.length; i++) {
        console.log(tipos.length);
        if (tipos[i] == tipos.length - 1) {
          console.log("entrou");
        }
      }
      const nome = document.getElementById("nome");
      const qtd = document.getElementById("qtd");
    }
  }
};

const excluir = async (id) => {
  const response = await fetch(`/api/produto/${id}`, { method: "delete" });
  console.log(response);
  if (response.status === 200) {
    window.location.reload();
  }
};

criarProdutos();

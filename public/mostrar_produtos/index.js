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
      <input id="tipo ${produto.id}" value="${produto.tipo}" />
      <input id="nome ${produto.id}" value="${produto.nome}" />
      <input id="qtd ${produto.id}" value="${produto.quantidade}" />
      <span id="botao" onclick="editar(${produto.id})">Editar</span>
      <span id="botao" onclick="excluir(${produto.id})">Excluir</span>
    `;

    containerGeral.appendChild(div);
  }
}

const editar = async (id) => {
  let divs = document.querySelectorAll(".info");
  let tipo;
  let nome;
  let quantidade;
  for (const div of divs) {
    if (div.id == id) {
      tipo = document.getElementById(`tipo ${id}`).value;
      nome = document.getElementById(`nome ${id}`).value;
      quantidade = document.getElementById(`qtd ${id}`).value;
    }
  }

  const produto = {
    tipo: tipo,
    nome: nome,
    quantidade: quantidade,
  };

  const response = await fetch(`/api/produto/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  });
  if (response.status == 200) {
    window.location.reload();
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

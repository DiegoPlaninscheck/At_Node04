const buscarProdutos = async () => {
  const res = await fetch("/api/produtos");
  const produtos = await res.json();
  return produtos[0];
};

const buscarPizzas = async () => {
  const res = await fetch("/api/pizzas");
  const pizzas = await res.json();
  return pizzas[0];
};

const buscarClientes = async () => {
  const res = await fetch("/api/clientes");
  const clientes = await res.json();
  return clientes[0];
};

const mostrarProdutos = async () => {
  const produtos = await buscarProdutos();

  const forms = document.getElementById("forms");

  const divInputLabel = document.createElement("div");
  divInputLabel.classList.add("inputLabels");

  forms.appendChild(divInputLabel);

  const divLabel = document.createElement("div");
  const label = document.createElement("label");

  label.innerText = "Produtos";

  divInputLabel.append(divLabel);
  divLabel.appendChild(label);

  const select = document.createElement("select");
  select.id = "produto";
  select.name = "id_produto";

  divInputLabel.appendChild(select);

  for (const produto of produtos) {
    const option = document.createElement("option");

    option.innerText = produto.nome;
    option.value = produto.id;

    select.appendChild(option);
  }
};

const mostrarPizzas = async () => {
  const pizzas = await buscarPizzas();

  const forms = document.getElementById("forms");

  const divInputLabel = document.createElement("div");
  divInputLabel.classList.add("inputLabels");

  forms.appendChild(divInputLabel);

  const divLabel = document.createElement("div");
  const label = document.createElement("label");

  label.innerText = "Pizzas";

  divInputLabel.append(divLabel);
  divLabel.appendChild(label);

  const select = document.createElement("select");
  select.id = "pizzas";
  select.name = "id_pizza";

  divInputLabel.appendChild(select);

  for (const pizza of pizzas) {
    const option = document.createElement("option");

    if (pizza.tamanho == 1) {
      option.innerText = `Pizza`;
    } else if (pizza.tamanho == 2) {
      option.innerText = `Pizza ${pizza.sabor01} e ${pizza.sabor02}`;
    } else if (pizza.tamanho == 3) {
      option.innerText = `Pizza ${pizza.sabor01}, ${pizza.sabor02} e ${pizza.sabor03}`;
    } else if (pizza.tamanho == 4) {
      option.innerText = `Pizza ${pizza.sabor01}, ${pizza.sabor02}, ${pizza.sabor03} e ${pizza.sabor04}`;
    }

    option.value = pizza.id;
    select.appendChild(option);
  }
};

const mostrarClientes = async () => {
  const clientes = await buscarClientes();

  const forms = document.getElementById("forms");

  const divInputLabel = document.createElement("div");
  divInputLabel.classList.add("inputLabels");

  forms.appendChild(divInputLabel);

  const divLabel = document.createElement("div");
  const label = document.createElement("label");

  label.innerText = "Clientes";

  divInputLabel.append(divLabel);
  divLabel.appendChild(label);

  const select = document.createElement("select");
  select.id = "cliente";
  select.name = "cpf_cliente";

  divInputLabel.appendChild(select);

  for (const cliente of clientes) {
    const option = document.createElement("option");

    option.innerText = `${cliente.cpf}`;

    select.appendChild(option);
  }

  mostrarBotao();
};

const mostrarBotao = () => {
  const forms = document.getElementById("forms");

  const divBotao = document.createElement("div");
  divBotao.classList.add("divBotao");

  forms.appendChild(divBotao);

  const button = document.createElement("button");

  button.type = "submit";
  button.innerText = "Cadastrar";

  divBotao.appendChild(button);
};

mostrarProdutos();
mostrarPizzas();
mostrarClientes();

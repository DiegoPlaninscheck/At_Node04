async function pegarPedidos() {
  const response = await fetch("/api/pedidos");
  const pedidos = await response.json();
  return pedidos[0];
}

async function criarPedidos() {
  const pedidos = await pegarPedidos();

  const containerGeral = document.getElementById("container-pedidos");

  for (const pedido of pedidos) {
    const div = document.createElement("div");
    div.id = "info";

    const spanCpf = document.createElement("span");
    spanCpf.innerText = `CPF: ${pedido.cpf_cliente}`;
    const spanRetiradaEntrega = document.createElement("span");
    spanRetiradaEntrega.innerText = `Tipo de retirada: ${pedido.retiradaEntrega}`;
    const spanProduto = document.createElement("span");
    spanProduto.innerText = `Produto: ${pedido.produto}`;

    const spanTamanho = document.createElement("span");
    if (pedido.tamanho == 1) {
      spanTamanho.innerText = `Sabores: ${pedido.sabor01}`;
    } else if (pedido.tamanho == 2) {
      spanTamanho.innerText = `Sabores: ${pedido.sabor01} e ${pedido.sabor02}`;
    } else if (pedido.tamanho == 3) {
      spanTamanho.innerText = `Sabores: ${pedido.sabor01}, ${pedido.sabor02} e ${pedido.sabor03} `;
    } else if (pedido.tamanho == 4) {
      spanTamanho.innerText = `Sabores: ${pedido.sabor01}, ${pedido.sabor02}, ${pedido.sabor03} e ${pedido.sabor04}`;
    }

    const spanPreco = document.createElement("span");
    spanPreco.innerText = `Preco Total: R$${pedido.valorTotal}`;

    const spanData = document.createElement("span");
    const data = new Date(pedido.dataHora).toLocaleDateString();
    spanData.innerText = `Horario Reserva: ${data}`;

    containerGeral.appendChild(div);
    div.appendChild(spanCpf);
    div.appendChild(spanRetiradaEntrega);
    div.appendChild(spanProduto);
    div.appendChild(spanTamanho);
    div.appendChild(spanPreco);
    div.appendChild(spanData);
  }
}

criarPedidos();

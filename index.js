import express from "express";
import bodyParser from "body-parser";

import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

import * as db from "./db.js";

const port = 8080;
const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/cadastrar_cliente", (req, res) => {
  res.sendFile(__dirname + "public/cadastrar_cliente.html");
});

app.get("/cadastrar_pedido", (req, res) => {
  res.sendFile(__dirname + "public/cadastrar_pedido.html");
});

app.get("/cadastrar_pizza", (req, res) => {
  res.sendFile(__dirname + "public/cadastrar_pizza.html");
});

app.get("/cadastrar_produto", (req, res) => {
  res.sendFile(__dirname + "public/cadastrar_produto.html");
});

app.get("/mostrar_pedido", (req, res) => {
  res.sendFile(__dirname + "public/mostrar_pedido.html");
});

app.get("/mostrar_produto", (req, res) => {
  res.sendFile(__dirname + "public/mostrar_produto.html");
});

app.post("/cliente", async (req, res) => {
  await db.cadastrarCliente(req.body);
  res.redirect("/cliente");
});

app.post("/produto", async (req, res) => {
  await db.cadastrarProduto(req.body);
  res.redirect("/produto");
});

app.post("/pizza", async (req, res) => {
  await db.cadastrarPizza(req.body);
  res.redirect("/pizza");
});

app.post("/pedido", async (req, res) => {
  await db.cadastrarPedido(req.body);
  res.redirect("/pedido");
});

app.listen(port, () =>
  console.log(`Server started on port http://localhost:${port}`)
);

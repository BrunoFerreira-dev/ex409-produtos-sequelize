const express = require("express");
const { Produto } = require("../models/produto");

const router = express.Router();

// ─── Sua tarefa: CRUD completo de Produtos ────────────────────────────────────
// Produto = { id (inteiro, automático), descricao (texto), preco (float) }
// Use o Sequelize (modelo Produto) para acessar o banco. As funções são async.
//
// Contrato esperado pela validação:
//
//  GET    /produtos        → 200 + array de todos os produtos
//  GET    /produtos/:id    → 200 + o produto; 404 se não existir
//  POST   /produtos        → corpo { descricao, preco }
//                             201 + produto criado; 400 se faltar descricao ou preco
//  PUT    /produtos/:id     → substitui { descricao, preco } (ambos obrigatórios)
//                             200 + produto atualizado; 400 se faltar campo; 404 se não existir
//  PATCH  /produtos/:id     → atualiza parcialmente (descricao e/ou preco)
//                             200 + produto atualizado; 404 se não existir
//  DELETE /produtos/:id     → 204 (sem corpo); 404 se não existir

// GET /produtos — lista todos
router.get("/", async (req, res) => {
  // TODO: retorne 200 com todos os produtos (Produto.findAll()).
});

// GET /produtos/:id — um produto
router.get("/:id", async (req, res) => {
  // TODO: busque por id; 200 com o produto ou 404 se não existir.
});

// POST /produtos — cria
router.post("/", async (req, res) => {
  // TODO: valide descricao e preco (400 se faltar); crie e responda 201 com o produto.
});

// PUT /produtos/:id — substitui (descricao e preco obrigatórios)
router.put("/:id", async (req, res) => {
  // TODO: 404 se não existir; 400 se faltar campo; senão atualize e responda 200.
});

// PATCH /produtos/:id — atualização parcial
router.patch("/:id", async (req, res) => {
  // TODO: 404 se não existir; atualize só os campos enviados; responda 200.
});

// DELETE /produtos/:id — remove
router.delete("/:id", async (req, res) => {
  // TODO: 404 se não existir; senão remova e responda 204 (sem corpo).
});

module.exports = router;

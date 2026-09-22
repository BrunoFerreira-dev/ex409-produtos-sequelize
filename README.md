# API de Produtos — Express + Sequelize + SQLite (trabalho individual)

Implemente uma API REST de **gestão de produtos** usando **Node.js + Express + Sequelize + SQLite**.

**Produto:** `id` (inteiro, automático), `descricao` (texto), `preco` (float).

## Como começar
```bash
npm install
npm start   # sobe em http://localhost:3000 e cria a tabela automaticamente
```

## O que implementar (`src/rotas/produtos.js`)
| Método | Rota | Comportamento |
|--------|------|---------------|
| GET | `/produtos` | 200 + lista de produtos |
| GET | `/produtos/:id` | 200 + produto · 404 se não existir |
| POST | `/produtos` | 201 + criado · 400 se faltar `descricao`/`preco` |
| PUT | `/produtos/:id` | 200 + atualizado (substitui) · 400 se faltar campo · 404 |
| PATCH | `/produtos/:id` | 200 + atualizado (parcial) · 404 |
| DELETE | `/produtos/:id` | 204 sem corpo · 404 se não existir |

`GET /health` já vem pronta e deve responder 200.

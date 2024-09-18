// CRIAR NOSSO SERVIOR
const express = require('express');
const path = require('path');
const app = express();

const PORT = 3333;

// CRIAR ROTAS
app.get("/",function (req, res) {
  // NOSSO CODIGO VEM AQUI
});

// USAR O SERVIDOR NUMA DADA PORTA
app.listen(3000, function () {
  console.log("ROdando na porta:" + PORT)
})
// ULTILIZANDO MÓDULOS CJS
//const fs = require('node:fs');
const http = require("node:http");
//const os = require('node:os');

const PORT = 8000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Bem Vindo(a) à Homepage!</h1>");
    res.end();
  } else if (req.url === "/sobre") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<p>Nós somos uma empresa de tecnologia!</p>`);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta:${PORT}`);
});

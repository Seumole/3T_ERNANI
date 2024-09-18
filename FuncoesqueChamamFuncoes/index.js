/** CRIE UM ARRAY DE OBJETOS => PESSOAS
 *  COM OS SEGUNDOS ATRIBUTOS: NOME/SOBRENOME
 * CRIE UMA FUNÇÃO QUE ITERE SOBRE ESSE ARRAY
 * E RETIRE NOMES E SOBRENOMES
 * CRIE UMA VARIÁVEL COM O CONTEÚDO:
 *         -> emailBase = "@escola.pr.gov.br"
 * A PARTIR DESSES DADOS FORME UM @ESCOLA COM
 * NOME.SOBRENOME+EMAILBASE
 * EXECUTE A FUNÇÃO...
 */

const pessoas = [
  { nome: "Allysson", sobrenome: "Vicente" },
  { nome: "José", sobrenome: "Almeida" },
];

for (pessoa of pessoas) {
  console.log(pessoas.nome);
}

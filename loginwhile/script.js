// CRIE UM PROGRAMA QUE CHEQUE USUARIO E SENHA
// CASO O USUÁRIO E SENHA SEJAM IGUAIS AO CADASTRADO, MOSTRE UM MENSAGEM DE SUCESSO
// CASO CONTRÁRIO, PERGUNTE NOVAMENTE (WHILE)


const usuario = 'admim'
const senha = '1234'
let u, s = ''
let estaLogado = false

while (!estaLogado) {
  u = prompt('Digite o usuário: ')
  s = prompt('Digite a senha: ')

  if (u == usuario && s == senha) {
    window.prompt('Acesso permitido')
    estaLogado = true
  } else {
    window.prompt('Usuário ou senha inválidos')
  }
}
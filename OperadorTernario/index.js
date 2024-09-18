// OPERADOR TERNÁRIO SERVE PARA DESVIO CONDICIONAL, ASSIM COMO O IF ELSE, POREM SUA SINTAXE SIMPLIFICA.
//PODEMOS ULTILIZAR O OPERADOR TERNÁRIO ANHINHADO
// EX: <VARIÁVEL> = <CONDIÇÃO> ? <VALOR_TRUE> : <VALOR_FALSE>

const idade = 18;

const cnh = idade >= 18 ? 'Maiores podem dirigir' : 'Menor de idade não pode dirigir';
console.log(cnh)

let pessoas = [
  {nome: "ana", sexo: "F", idade: 15},
  {nome: "bia", sexo: "F", idade: 18},
  {nome: "andre", sexo: "M", idade: 20},
  {nome: "pedro", sexo: "M", idade: 22},
]

let meninas = []
let meninos = []
for (let nome of pessoas){
  pessoas.sexo == "F" ? meninas.push(nome) : meninos.push(nome)
}

console.table(meninas)
console.table(meninos)
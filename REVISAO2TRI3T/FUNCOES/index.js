// FUNçÕES:
// DECLARAÇÃO
function dizOla() {
  console.log("Olá!");
}
function olaPessoa(nome) {
  console.log(`Olá, ${nome}`);
}

const nome = "João";
const idade = 18;

function retornaDados() {
  return `Nome: ${nome} - Idade: ${idade}`;
}

// INVOCAÇÃO
// dizOla();
// olaPessoa('Maria');
// console.log(retornaDados());

// FUNÇÕES PERSONALIZADAS VS FUNÇÕES NATIVAS

let salario = 2234;

const intervalo1 = setInterval(function(){
  console.clear();
  salario = salario + 18632424223423423;
  console.log(`Ebaa, ganhei ${salario}`);
}, 1);

/*
setInterval - clearInterval
setTimeOut - clearTimeout
*/ 
setTimeout(function() {
  console.log('----------');
  clearInterval(intervalo1);
  console.info("Intervalo encerrado");
}, 1000);

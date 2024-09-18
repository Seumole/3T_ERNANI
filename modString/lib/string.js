const nome = "João";

function olapessoa(){
  console.log(`Olá ${nome}!`);
}
  
export { nome, olapessoa };

export function textoMaiusculo (texto){
  console.log(texto.toUpperCase());
}

function textoMinusculo (texto) {
  console.log(texto.toLowerCase());
}

export default textoMinusculo;
// ARRAYS SÃO INDEXADOS
// PORSSUEM METOOS 
// PODEM SER ITERADOS

const nome = "João"
const time = ["Marcus","Antonio","José","Alison"]

time.push("juan") // SEMPRE NO FINAL DA LINHA
time.shift() // Remove alguem no inicio
time[12] = "Alllysson"
console.log(time)
console.log(time[0])
console.log(time[8])
console.log(time[12])
// ITERAL - LOOP ATÉ O ESGOTAMENTO (FOR, FOREACH, WHILE, FOR IN, FAR OF)
for(var i = 0; i <= 4;  i++) {
  console.log(time[i])
}
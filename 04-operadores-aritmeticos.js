// Os operadores aritméticos são utilizados para realizar operações matemáticas, como por exemplo, somar, subtrair, multiplicar e dividir

const preco = 50;
const frete = 15;

console.log("--- Adição ---")
// 1 - Adição (+)
// Utilizamos esse operador para a soma de valores

const soma = preco + frete

console.log(preco + frete)
console.log(15 + 10)
console.log(soma)

// 2 - Subtração (-)
console.log("--- Subtração ---")
// Utilizamos esse operador para realizar a subtração de valores

const subtracao = preco - frete

console.log(subtracao)
console.log(15 - 10)
console.log(preco - frete)

console.log("--- Multiplicação ---")
// 3 - Multiplicação (*)
// Utilizamos esse operador para realizar a multiplicação de valores

const multiplicacao = preco * frete

console.log(multiplicacao)
console.log(15 * 10)
console.log(preco * frete)

console.log("--- Divisão ---")
// 4 - Divisão (/)
// Utilizamos esse operador para realizar a divisão de valores

const divisao = preco / frete

console.log(10 / 2)
console.log(divisao)
console.log(10 / 0) //exemplo
console.log(preco / frete)

console.log("--- Exponenciação ---")
// 5 - Exponenciação (**)
// Utilizamos esse operador para realizar a exponenciação de valores, ou seja, elevar um número a uma potência

const exponenciacao = preco ** frete

console.log(exponenciacao)
console.log(preco ** frete)
console.log(2 ** 3)

console.log("--- Resto da divisão ---")
// 6 - Resto da divisão (%)
// O operador % retorna o RESTO DA DIVISÃO, não o resultado em si
// Utilizamos esse operador para verificar se um número é ímpar ou par

console.log(8 % 2) // resto 0
console.log(7 % 2) // resto 1

console.log("--- Incremento ---")
// 7 - Incremento (++)
// Esse operador serve para aumentar o valor de uma variável em uma unidade (1)

let contador = 5;
console.log(contador)

contador++ // 5 + 1 = 6
console.log(contador)

console.log("--- Operador de decremento ---")
// 8 - Operador de decremento
// Esse operador serve para diminuir o valor de uma variável em uma unidade (1)

let vidas = 3
console.log(vidas)

vidas-- // 3 - 1 = 2
console.log(vidas)
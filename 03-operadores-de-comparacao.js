// Os operadores de comparação servem para, comparar dois valores ou mais e verificar se uma determinada condição é verdadeira ou falsa.

// DICA: No JavaScript o resultado de uma comparação é sempre um valor booleano, ou seja, verdadeiro(true) ou falso(false).

console.log("--- Igualdade estrita ---")
// 1 - === Igualdade estrita
// O operador de igualdade estrita verifica se dois valores são iguais tanto em TIPO DE DADO e VALOR

console.log(10 === 10) //true 
console.log(10 === 20) //false
console.log(10 === '10') //false

console.log("--- Igualdade não estrita ---")
// 2 - == Igualdade não estrita
// O operador de dupla igualdade(==) também compara valores, mas, de forma resumida, observa apenas o VALOR da comparação, ignorando o tipo de dado.

// CURIOSIDADE: Nesse caso, por debaixo dos panos, o JavaScript faz uma conversão de tipos antes de comparar

console.log(10 == 10)
console.log(10 == 20)
console.log(10 == '10')

console.log("--- Diferença estrita ---")
// 3 - !== Diferença estrita
// Tanto o operador !== quanto o operador != verificam se os valor são diferentes. Porém, no caso do operador de !==, ele verifica também o tipo de dado.

console.log(5 !== 3)
console.log(5 !== 5)
console.log(5 !== "5")

console.log("--- Diferença não estrita ---")
// 4 - != Diferença não estrita
//  No caso desse operador, ele verifica apenas o valor, e não o tipo de dado.

console.log(5 != "5")
console.log(5 != 3)

console.log("--- Maior que ---")
// 5 - > Maior que
// Esse operador serve para avaliar se um determinado valor é maior que o outro

console.log(7 > 6)
console.log(7 > 2)
console.log(7 > 9)
console.log(7 > 7)

console.log("--- Menor que ---")
// 6 - < Menor que
// Esse operador serve para avaliar se um determinado valor é menor que o outro

console.log(7 < 6)
console.log(3 < 6)
console.log(2 < 5)
console.log(7 < 7)

console.log("--- Maior ou igual ---")
// 7 - >=  Maior ou igual
// Esse operador avalia se na condição, o elemento de comparação é maior ou igual.

const nota = 7
console.log(nota >= 7)
console.log(nota >= 8)

console.log("--- Menor ou igual ---")
// 8 - <= Menor ou igual
// Esse operador avalia se na condição, o elemento de comparação é menor ou igual.

console.log(nota <= 7)
console.log(nota <= 8)
console.log(nota <= 6)
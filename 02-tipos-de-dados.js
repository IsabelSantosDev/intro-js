// O JavaScript possui 7 tipos de dados primitivos (que guardam um único valor simples)

// 1 - Strings
// O tipo String representa sequências de caracteres, como nomes, mensagens, endereços, emails, ou seja, textos de modo geral.

const nome = "Isabel";
const cidade = 'São Paulo';
const mensagem = `Olá, pessoal`;

console.log(nome)
console.log(cidade)
console.log(mensagem)

console.log("-------------")

// 2 - Number
// O JavaScript usa o tipo Number para representar números inteiros e decimais.

const idade = 22;
const altura = 1.67;
const preco = 599.99;
const temperatura = -3.17;

console.log(idade)
console.log(altura)
console.log(preco)
console.log(temperatura)

console.log("-------------")

// 3 - BigInt
// O tipo BigInt permite representar números inteiros maiores do que o limite de precisão de números inteiros comuns do tipo Number.

const numeroGrande = 12345678900987654321n
// O "n" no final do número indica que ele é um BigInt
console.log(numeroGrande)

console.log("-------------")

// 4 - Boolean (Booleano) - Valores lógicos
// O tipo Boolean representa apenas dois valores:
// true = verdadeiro
// false = falso
// É muito utilizado para verificar condições, controlar funcionalidades e representar estados.

const estaLogado = true;
const temPermissao = false;

console.log(estaLogado)
console.log(temPermissao)

console.log("-------------")

// 5 - Undefined (indefinido)
// No JavaScript undefined representa um valor que não foi definido.

let fruta;

console.log(fruta)
console.log(typeof fruta);

console.log("-------------")

// 6 - Null
// O Null no JavaScript representa a ausência INTENCIONAL de um valor

const fotoDePerfil = null;

console.log(fotoDePerfil)
console.log(typeof fotoDePerfil)

console.log("-------------")

// 7 - Symbol
// O Symbol é utilizado para criar identificadores únicos

const id1 = Symbol("id")
const id2 = Symbol("id")

console.log(id1 === id2);
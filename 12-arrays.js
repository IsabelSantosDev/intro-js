// Um array é uma estrutura de dados utilizada para armazenar uma coleção (lista) de valores dentro de uma ÚNICA variável.

let aluno1 = "Isabel";
let aluno2 = "Ana";
let aluno3 = "João";
let aluno4 = "Maria";
let aluno5 = "Pedro";
let aluno6 = "Carlos";

// Organizando estrutura com arrays
// A estrutura de um array é representada por colchetes ( [] ) e os valores são separados por vírgula.
const alunos = ["Isabel", "Ana", "João", "Maria", "Pedro", "Carlos"];

console.log(alunos);

// Acessando informações de um array
console.log("--- Acessando elementos ---");

console.log(alunos[0]);
console.log(alunos[1]);

// Acessando um elemento sem valor definido (undefined)
console.log(alunos[6]);

// Descobrindo o tamanho de um array
console.log("--- Acessando tamanho do array ---");

console.log("O tamanho do array é: ", alunos.length);

// Iterando sobre um array
console.log("--- Percorrendo array - For ---");

for (let posicao = 0; posicao < alunos.length; posicao++) {
    
    const element = alunos[posicao];
    
    console.log(element)
}

console.log("--- Percorrendo array - For/of ---");
for(let aluno of alunos){
    console.log(aluno);
}

console.log("--- Percorrendo array - forEach ---");

alunos.forEach((aluno)=>{
    console.log(aluno)
})

// Métodos importantes dos arrays
console.log("--- Métodos importantes ---");

const frutas = ["Banana", "Maçã", "Pêra", "Manga", "Uva"];

// 1 - Includes (Verifica se um elemento existe)
console.log("--- Includes ---");

console.log(frutas.includes("Banana"));
console.log(frutas.includes("Goiaba"));

// 2 - indexOf (Verifica a posição de um elemento)
console.log("--- indexOf ---");

console.log(frutas.indexOf("Goiaba"))
console.log(frutas.indexOf("Banana"))

// 3 - find (Encontar um elemento)
// O find() retorna o primeiro elemento que atende a condição especificada.
console.log("--- find ---");

const notas = [4, 5, 7, 8, 8, 9.34, 10]

const resultado = notas.find((nota)=> {
    return nota > 7;
})

console.log(resultado);

// 4 - filter (Filtra elementos)
// Diferente do find, o filter retorna todos os elementos que atendem uma determinada condição.
console.log("--- filter ---");

// filter com retorno explicito
const aprovados = notas.filter((nota)=> {
    return nota >= 7;
})

// filter com retorno implicito
const reprovados = notas.filter(nota => nota <= 7);

console.log(aprovados);
console.log(reprovados);


// Manipulando arrays
const animais = ["Cachorro", "Pássaro", "Gato"]

console.log("--- push() ---");
// Insere um elemento no final do array
animais.push("Cavalo");

console.log("--- unshift() ---");
// Insere um elemento no início do array
animais.unshift("Girafa");

console.log(animais);
// Os objetos são uma estrutura de dados que nos permitem armazenar várias informações relacionadas em uma ÚNICA variável.

/* 
    estrutura de um objeto

    const objeto = {
        key: value,
        chave: valor,
        propriedade: valor,
        outraPropriedade: outroValor
    }
*/

// Exemplo: Criando informações de um aluno
let nome = "Isabel";
let idade = 22;
let curso = "JavaScript";
let email = "isabel@example.com";
let matriculado = true;
let nota = 9.5;

// Organizando estrutura com objetos
const aluno = {
    nome: "Isabel",
    idade: 22,
    curso: "JavaScript",
    email: "isabel@example.com",
    matriculado: true,
    nota: 9.5
}

// Exibindo o objeto completo
console.log("--- OBJETO COMPLETO ---")
console.log(aluno);

// Acessando informações específicas
// com o ponto final (. - dot notation)
console.log("--- ACESSANDO COM . ---")
console.log(aluno.nome);
console.log(aluno.email);

// com o colchete ([] - bracket notation)
console.log("--- ACESSANDO COM [] ---")
console.log(aluno["curso"]);
console.log(aluno["idade"]);

// Alterando informações de um objeto
console.log("--- ALTERANDO PROPRIEDADES ---")
aluno.curso = "React";
console.log(aluno)

// Adicionando propriedades ao objeto
console.log("--- ADICIONANDO PROPRIEDADES ---")
aluno.nota = 9.5;
console.log(aluno);

// Removendo propriedades do objeto
console.log("--- REMOVENDO PROPRIEDADES ---")
delete aluno.nota;

console.log(aluno);

// Objetos aninhados (Objeto dentro de outro objeto)
console.log("--- OBJETOS ANINHADOS ---")
const pessoa = {
    nome: "Isabel",
    sobrenome: "Neves",
    idade: 22,

    endereco: {
        bairro: "Centro",
        estado: "SP",
        cidade: "São Paulo",
        cep: "01000-000",
        numero: 100,
        rua: "Rua A",
        coordinates: {
            lat: -23.5505,
            long: "-1928301823"
        }
    }
}

console.log(pessoa.endereco.cep);
console.log(pessoa.endereco.coordinates.lat);

// Objetos com funções (métodos)
console.log("--- OBJETOS COM FUNÇÕES ---")
const gato = {
    nome: "Bartolomeu",
    idade: 1,
    raça: "SDR",

    miar: function(){
        console.log("Miau");
    }
}

gato.miar()

// Exemplos comuns
const produto = {
    tela: "Amoled 16pol",
    armazenamento: "ssd 1tb",
    processador: "Ryzen 5500U",
    memoriaRam: "16GB",
    bateria: "",
    preco: 3500,
    estoque: 10,
    disponivel: true,
}

console.log(produto.disponivel)
console.log(Object.keys(produto)) // Retorna um array com as chaves do objeto
console.log(Object.values(produto)) // Retorna um array com os valores do objeto
console.log(Object.entries(produto)) // Retorna um array com as chaves e valores do objeto

const clima = {
    cidade: "São Paulo",
    temperatura: 24,
    umidade: 80,
    vento: 13,
}

console.log(`Temperatura: ${clima.temperatura.toFixed(2)}°C`);

console.log(Object.keys(clima)); // Retornando apenas as chaves do objeto


console.log(Object.values(clima)); // Retornando apenas os valores do objeto


console.log(Object.entries(clima)); // Retorando pares de chave e valor


// Iterando sobre um objeto
// Acessando as chaves
for (const key in produto){
    console.log(key)
}

// Acessando os valores
for (const key in produto) {
    const element = produto[key];
}
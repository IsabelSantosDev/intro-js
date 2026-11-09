// Funções são blocos de código criados para executar uma tarefa específica.

/* 
    estrutura de uma função

    function nomeDaFuncao() {
        bloco de código que será executado
    }
*/

// Exemplo básico de uma função
console.log("--- Exemplo básico de uma função ---");
console.log("--- BOAS-VINDAS ---");
function darBoasVindas() {
    console.log("Olá, seja bem vindo@");
}

// Invocando a função
darBoasVindas();

// Funções com parâmetros e argumentos
console.log("--- Parâmetros e argumentos ---");
console.log("--- SUCO DE FRUTA ---");
function fazerSuco(fruta) {
    console.log(`Preparando suco de ${fruta}...`);
}

fazerSuco("Laranja");
fazerSuco("Banana");
fazerSuco("Maça");


console.log("--- SOMA ---");

function soma(a,b) {
    let resultado = a + b;
    console.log(resultado);
}

soma(10, 37);
soma(32, 37);
soma(37, 48);
soma(21, 42);

// Casos bizarros
soma("Isabel", "Santos");
soma("Isabel", 10);
soma("Isabel", null);
soma(10, null);
soma(10, undefined);
soma([10], {undefined});


console.log("--- APRESENTANDO PESSOAS ---");
function apresentarPessoa(nome, sobrenome) {
    // O sinal de + pode ser utilizado para concatenar informações
    // concatenar = unir/juntar dados
    
    console.log("Olá, meu nome é " + nome +" " + sobrenome +" .")
    // console.log(`Olá, meu nome é ${nome} ${sobrenome}`);
}

apresentarPessoa("Isabel", "Santos");

// Funções com retorno
console.log("--- Funções com retorno ---");
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(2, 5));

const resultado = multiplicar(3, 5);
console.log(resultado);

// Conhecendo funções anônimas
console.log("--- Funções anônimas ---");
const saudacao = function(){
    console.log("Olá, seja bem-vindo(a)!");
}

// Invocando a função anônima
// Utilizamos o nome da variável para referenciar a função e ativa-la
saudacao();

// Conhecendo as Arrow Functions (Funções de seta)
console.log("--- Arrow Functions ---");

const banana = () => {
    console.log("Amo comer banana!");
}

banana();
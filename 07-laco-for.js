// Laços de repetição (loops) são estruturas que nos permitem executar um bloco de código várias vezes sem precisar escrever o mesmo código repetidamente.

// laço for
// 

/* 
    estrutura de um laço for
    for(inicialização; condição; incremente/decremento){
        bloco de código que será executado
    }
*/

// Exemplo básico de for
for(let inicio = 1; inicio <= 10; inicio++){
    console.log("Olá!");
}

// Exemplo básico de for de contagem de valores
for (let index = 1; index <= 20; index++) {
    console.log(index);
}

// Exemplo básico de for de atualização de variável
for(let i = 1; i <= 20; i+=2){
    console.log(i);
}

// Exemplo com tabuada 
for(let i = 1; i <= 10; i++){
    console.log(`6 x ${i} = ${6 * i}`);
}

// Exemplo avançado de tabuada

// Capturando número do usuário
const numeroTabuada = prompt("Digite um número da tabuada que deseja ver:")

console.log(numeroTabuada);

for(let inicio = 1; inicio <= 10; inicio++){

    const resultadoTabuada = numeroTabuada * inicio;
    const mensagemTabuada = `${numeroTabuada} x ${inicio} = ${resultadoTabuada}`

    console.log(mensagemTabuada);
}
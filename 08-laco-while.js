// O While é uma estrutura de repetição, e ele permite executar um bloco de código enquanto uma determinada condição for verdadeira.

/* 
    estutura de um while

    while(condição){
        bloco de codigo que será executado enquanto a condição for verdadeira
    }

    exemplo de laço infinito

    let numero = 1;
    while(numero > 3){
        console.log(numero);
    }
*/

// Inicialização

let contador = 1;
while (contador <= 5) {
    console.log(contador);

    // Atualização
    contador++;
}

// Exemplo de senha de acesso
// 1 - Inicialização (String vazia)
let senha = "";

// 2 - condição
while (senha !== "1234") {
    // 3 - Atualização
    senha = prompt("Digite sua senha");
}

alert("Acesso permitido!");
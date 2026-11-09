// O Do-While é uma estrutura de repetição que nos permite executar um bloco de código pelo menos uma vez antes de verificarmos uma condição.

/* 
    estrutura do laço do...while 

    do{
        bloco de código que será executado
    } while(condição)
*/

// Exemplo básico - contador
// 1 - Inicialização
let contador = 1;

do {
    console.log(contador);

    // 2 - Atualização
    contador++;
} while (contador <= 5); // 3 - Condição

// Exemplo 2 - Nome
// Inicialização
let nome;

do{
    nome = prompt("Digite seu nome");
} while (nome === null || nome.trim() === "");

alert(`Olá, ${nome}`);
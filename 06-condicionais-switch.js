// O Switch/case é uma estrutura condicional usada para comparar o mesmo valor com várias possibilidades diferentes.


const dia = 29;

switch(dia){
    case 29:
        console.log("Quinta-feira");
        break; /* Serve para encerrar/parar a execução do switch, evitando que ele continue para os outros casos */
    
    case 30:
        console.log("Sexta-feira");
        break;
    
    case 31:
        console.log("Sábado");
        break;
}

// Aplicando estrutura real
const opcao = prompt("Selecione uma opção abaixo: \n 1 - Consultar saldo \n 2 - Saque \n 3 - Depósito")

console.log(opcao)
console.log(typeof opcao)

switch(opcao){
    case '1':
        alert("Consultando saldo...");
        break;
    
    case '2':
        alert("Realizando saque...");
        break;
    
    case '3':
        alert("Realizando depósito...");
        break;
     
    default:
        alert("Opção inválida. Tente novamente!");    
}
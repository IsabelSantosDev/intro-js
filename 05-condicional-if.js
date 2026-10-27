// Estruturas condicionais permitem que o programa tome decisões com base em determinadas condições (regras)

console.log("teste");


// 1 - if/se - Executa um bloco de código SE uma condição for verdadeira

/*
    estrutura de um if

    if(condição){
        bloco de código que será executado caso a condição seja verdadeira
    }
*/

const saldo = 5.30

console.log("**** IF SIMPLES ****");
// if simples
if (saldo >= 5.30) {
    console.log("Passagem liberada");
    console.log("Foram debitados R$5,30 do seu saldo");
}

// 2 - if/else
    console.log("**** IF/ELSE ****")

/* 
estrutura if/else
    
    if (condição){
        bloco de código que será executado caso a condição seja verdadeira
    } else{
        bloco de código que será executado caso a condição seja falsa
    }
*/

// IF COMPOSTO
if (saldo >= 5.30) {
    console.log("Passagem liberada");
    console.log("Foram debitados R$5,30 do seu saldo");    
} else {
    console.log("Saldo insuficiente.");
    console.log("Por favor, realize uma recarga e tente novamente.");   
}


// 3 - if...else if
console.log("**** IF...ELSE IF ****")
/* 
    estrutura
    
    if (condição){
        bloco de código que será executado caso a condição seja verdadeira
        } else if (condição){
        bloco de código que será executado caso a condição anterior seja falsa
    } else{
        bloco de código que será executado caso todas as condições sejam falsas
    }
    */
   
   const nota = 7;
   
   if (nota >= 9) {
    console.log("Excelente!")
} else if (nota >= 6){
    console.log("Aprovad@")
} else if (nota >= 4){
    console.log("Em recuperação")
} else{
    console.log("Reprovad@")
}

// Aprimorando as condicionais
console.log("**** CONDICIONAIS LÓGICAS ****")

// Altere o valor da idade ou do ingresso e acompanhe a resposta no console
const idade = 16;
const temIngresso = true;

// Operador lógico && - AND(E)
console.log("**** && - AND(E) ****")
if (idade >= 18 && temIngresso) {
    console.log("Entrada permitida");
} else{
    console.log("Entrada não permitida");
}


// Operador lógico || - OR(Ou)
console.log("**** || - OR(Ou) ****")

const ehAdmin = false;
const ehModerador = true;

if (ehAdmin || ehModerador) {
    console.log("Acesso ao painel")
} else{
    console.log("Acesso não permitido")
}


// Operador lógico ! - NOT (não) 
console.log("**** ! - NOT(não) ****")

// Inverte o valor lógico
console.log(!ehAdmin)

const estaLogado = false;
if (!estaLogado) {
    console.log("Faça login para continuar.")
}

const nome = "";
if (!nome) {
    console.log("Preencha seu nome")
}

const aceitouTermos = false;
if (!aceitouTermos) {
    console.log("Para continuar você precisa aceitar os termos.")
}
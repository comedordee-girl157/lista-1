const prompt = require('prompt-sync')();

// Recebendo os dois números
const numero1 = parseFloat(prompt('Digite o primeiro número: '));
const numero2 = parseFloat(prompt('Digite o segundo número: '));

// Somando os dois números
const soma = numero1 + numero2;

// Multiplicando o resultado da soma pelo primeiro número
const resultado = soma * numero1;

// Exibindo o resultado final
console.log('O resultado da operação (soma dos números multiplicada pelo primeiro número) é:', resultado);


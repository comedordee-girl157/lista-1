const prompt = require('prompt-sync')();

// Recebendo o salário mensal atual e o percentual de reajuste
const salarioAtual = parseFloat(prompt('Digite o salário mensal atual: '));
const percentualReajuste = parseFloat(prompt('Digite o percentual de reajuste (em %): '));

// Calculando o valor do reajuste
const valorReajuste = (percentualReajuste / 100) * salarioAtual;

// Calculando o novo salário
const novoSalario = salarioAtual + valorReajuste;

// Exibindo o novo salário
console.log('Novo salário após o reajuste:', novoSalario.toFixed(2));


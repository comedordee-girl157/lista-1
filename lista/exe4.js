const prompt = require('prompt-sync')();

// Recebendo o custo de fábrica do carro
const custoFabrica = parseFloat(prompt('Digite o custo de fábrica do carro: '));

// Definindo as porcentagens do distribuidor e dos impostos
const percentualDistribuidor = 0.28; // 28%
const percentualImpostos = 0.45; // 45%

// Calculando o custo do distribuidor
const custoDistribuidor = custoFabrica * percentualDistribuidor;

// Calculando o custo dos impostos
const custoImpostos = custoFabrica * percentualImpostos;

// Calculando o custo final ao consumidor
const custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

// Exibindo o custo final ao consumidor
console.log('O custo final do carro ao consumidor é:', custoFinal.toFixed(2));


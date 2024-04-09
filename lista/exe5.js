const prompt = require('prompt-sync')();

// Recebendo o custo de fábrica do carro, a porcentagem do distribuidor e o imposto
const custoFabrica = parseFloat(prompt('Digite o custo de fábrica do carro: '));
const percentualDistribuidor = parseFloat(prompt('Digite a porcentagem do distribuidor (em %): '));
const percentualImposto = parseFloat(prompt('Digite o percentual de imposto (em %): '));

// Convertendo as porcentagens para frações
const fracPercentualDistribuidor = percentualDistribuidor / 100;
const fracPercentualImposto = percentualImposto / 100;

// Calculando o custo do distribuidor e o custo dos impostos
const custoDistribuidor = custoFabrica * fracPercentualDistribuidor;
const custoImposto = custoFabrica * fracPercentualImposto;

// Calculando o custo final ao consumidor
const custoFinal = custoFabrica + custoDistribuidor + custoImposto;

// Exibindo o custo final ao consumidor
console.log('O custo final do carro ao consumidor é:', custoFinal.toFixed(2));

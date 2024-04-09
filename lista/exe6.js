const prompt = require('prompt-sync')();

// Recebendo o número de carros vendidos, o valor total das vendas, o salário fixo e o valor por carro vendido
const numeroCarrosVendidos = parseInt(prompt('Digite o número de carros vendidos: '));
const valorTotalVendas = parseFloat(prompt('Digite o valor total das vendas: '));
const salarioFixo = parseFloat(prompt('Digite o salário fixo do vendedor: '));
const valorPorCarroVendido = parseFloat(prompt('Digite o valor recebido por carro vendido: '));

// Calculando a comissão fixa por carro vendido
const comissaoPorCarro = numeroCarrosVendidos * valorPorCarroVendido;

// Calculando a comissão baseada no valor total das vendas (5%)
const comissaoPorVendas = valorTotalVendas * 0.05;

// Calculando o salário final do vendedor
const salarioFinal = salarioFixo + comissaoPorCarro + comissaoPorVendas;

// Exibindo o salário final do vendedor
console.log('O salário final do vendedor é:', salarioFinal.toFixed(2));

const prompt = require('prompt-sync')();

// Recebendo o raio e a altura da caixa d'água
const raio = parseFloat(prompt('Digite o raio da caixa d\'água: '));
const altura = parseFloat(prompt('Digite a altura da caixa d\'água: '));

// Definindo o valor de PI
const PI = Math.PI;

// Calculando o volume da caixa d'água cilíndrica
const volume = PI * raio ** 2 * altura;

// Exibindo o volume da caixa d'água cilíndrica
console.log('O volume da caixa d\'água cilíndrica é:', volume.toFixed(2));

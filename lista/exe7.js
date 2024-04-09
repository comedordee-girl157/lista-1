const prompt = require('prompt-sync')();

// Recebendo as duas notas do aluno
const nota1 = parseFloat(prompt('Digite a primeira nota: '));
const nota2 = parseFloat(prompt('Digite a segunda nota: '));

// Definindo os pesos das notas
const pesoNota1 = 4;
const pesoNota2 = 6;

// Calculando a média ponderada
const mediaFinal = (nota1 * pesoNota1 + nota2 * pesoNota2) / (pesoNota1 + pesoNota2);

// Exibindo a média final do aluno
console.log('A média final do aluno é:', mediaFinal.toFixed(2));


const prompt = require('prompt-sync')();

// Recebendo as quatro notas do aluno
const nota1 = parseFloat(prompt('Digite a primeira nota: '));
const nota2 = parseFloat(prompt('Digite a segunda nota: '));
const nota3 = parseFloat(prompt('Digite a terceira nota: '));
const nota4 = parseFloat(prompt('Digite a quarta nota: '));

// Calculando a média aritmética das notas
const media = (nota1 + nota2 + nota3 + nota4) / 4;

// Verificando se o aluno está aprovado ou reprovado
if (media >= 7.0) {
    console.log('Média:', media.toFixed(2), '- Aprovado');
} else {
    console.log('Média:', media.toFixed(2), '- Reprovado');
}

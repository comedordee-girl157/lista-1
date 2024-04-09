const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Tabela de percentuais de aumento por código de cargo
const tabelaAumento = {
    101: 0.05, // 5%
    102: 0.075, // 7.5%
    103: 0.10 // 10%
};

// Rota para calcular o novo salário do funcionário
app.post('/novo-salario', (req, res) => {
    const { salario, codigoCargo } = req.body;

    // Verificando se o salário e o código do cargo foram fornecidos
    if (!salario || !codigoCargo) {
        return res.status(400).json({ error: 'É necessário fornecer o salário e o código do cargo do funcionário.' });
    }

    // Calculando o percentual de aumento de acordo com o código do cargo
    let percentualAumento = tabelaAumento[codigoCargo];
    if (!percentualAumento) {
        percentualAumento = 0.15; // 15%
    }

    // Calculando o novo salário
    const novoSalario = salario * (1 + percentualAumento);

    // Calculando a diferença entre os salários
    const diferencaSalarios = novoSalario - salario;

    // Retornando o salário antigo, o novo salário e a diferença
    res.json({ salarioAntigo: salario, novoSalario, diferencaSalarios });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

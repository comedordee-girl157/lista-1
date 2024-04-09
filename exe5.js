const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Rota para calcular e imprimir o salário reajustado do funcionário
app.post('/salario-reajustado', (req, res) => {
    const { salario } = req.body;

    // Verificando se o salário foi fornecido
    if (!salario) {
        return res.status(400).json({ error: 'É necessário fornecer o salário do funcionário.' });
    }

    // Calculando o salário reajustado de acordo com as regras
    let salarioReajustado;
    if (salario <= 2000) {
        salarioReajustado = salario * 1.5; // Reajuste de 50%
    } else {
        salarioReajustado = salario * 1.3; // Reajuste de 30%
    }

    // Retornando o salário reajustado
    res.json({ salarioReajustado });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

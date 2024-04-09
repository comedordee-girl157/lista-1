const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Rota para calcular o salário total do vendedor
app.post('/salario-total', (req, res) => {
    const { nome, salarioFixo, totalVendas, percentualComissao } = req.body;

    // Verificando se todos os dados foram fornecidos
    if (!nome || !salarioFixo || !totalVendas || !percentualComissao) {
        return res.status(400).json({ error: 'É necessário fornecer todos os dados: nome, salarioFixo, totalVendas e percentualComissao.' });
    }

    // Calculando o salário total do vendedor
    const salarioTotal = salarioFixo + (totalVendas * (percentualComissao / 100));

    // Retornando o nome do vendedor e seu salário total
    res.json({ nome, salarioTotal });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

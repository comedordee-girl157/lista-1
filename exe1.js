const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Rota para calcular o estoque médio
app.post('/estoque-medio', (req, res) => {
    const { quantidadeMinima, quantidadeMaxima } = req.body;

    // Verificando se as quantidades mínima e máxima foram fornecidas
    if (!quantidadeMinima || !quantidadeMaxima) {
        return res.status(400).json({ error: 'É necessário fornecer a quantidade mínima e máxima.' });
    }

    // Calculando o estoque médio
    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2;

    // Retornando o resultado
    res.json({ estoqueMedio });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

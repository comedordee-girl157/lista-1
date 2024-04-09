const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Rota para calcular o maior preço e a média dos preços dos produtos
app.post('/analise-precos', (req, res) => {
    const { produtos } = req.body;

    // Verificando se os produtos foram fornecidos
    if (!produtos || produtos.length !== 15) {
        return res.status(400).json({ error: 'É necessário fornecer uma lista com 15 produtos.' });
    }

    // Calculando o maior preço e a média dos preços dos produtos
    let maiorPreco = 0;
    let somaPrecos = 0;
    produtos.forEach(produto => {
        const preco = parseFloat(produto.preco);
        if (preco > maiorPreco) {
            maiorPreco = preco;
        }
        somaPrecos += preco;
    });
    const mediaPrecos = somaPrecos / produtos.length;

    // Retornando o maior preço e a média dos preços
    res.json({ maiorPreco, mediaPrecos });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


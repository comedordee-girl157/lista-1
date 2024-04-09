const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Rota para calcular o salário reajustado
app.post('/salario-reajustado', (req, res) => {
    const { salario } = req.body;

    // Verificando se o salário foi fornecido
    if (!salario) {
        return res.status(400).json({ error: 'É necessário fornecer o salário do funcionário.' });
    }

    // Verificando se o funcionário tem direito ao aumento
    if (salario < 1000) {
        // Calculando o novo salário com aumento de 30%
        const salarioReajustado = salario * 1.3;
        res.json({ salarioReajustado });
    } else {
        res.json({ message: 'O funcionário não tem direito ao aumento.' });
    }
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

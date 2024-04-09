const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Rota para calcular o peso ideal da pessoa
app.post('/peso-ideal', (req, res) => {
    const { altura, sexo } = req.body;

    // Verificando se a altura e o sexo foram fornecidos
    if (!altura || !sexo) {
        return res.status(400).json({ error: 'É necessário fornecer a altura e o sexo.' });
    }

    // Calculando o peso ideal de acordo com o sexo
    let pesoIdeal;
    if (sexo.toLowerCase() === 'masculino') {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo.toLowerCase() === 'feminino') {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        return res.status(400).json({ error: 'O sexo fornecido é inválido. Utilize "masculino" ou "feminino".' });
    }

    // Retornando o peso ideal
    res.json({ pesoIdeal });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

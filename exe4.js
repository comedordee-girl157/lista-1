const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Rota para calcular a velocidade média do piloto
app.post('/velocidade-media', (req, res) => {
    const { nomePiloto, distanciaPercorrida, tempoPercorrido } = req.body;

    // Verificando se todos os dados foram fornecidos
    if (!nomePiloto || !distanciaPercorrida || !tempoPercorrido) {
        return res.status(400).json({ error: 'É necessário fornecer todos os dados: nomePiloto, distanciaPercorrida e tempoPercorrido.' });
    }

    // Calculando a velocidade média do piloto
    const velocidadeMedia = distanciaPercorrida / tempoPercorrido;

    // Retornando a frase com a velocidade média calculada
    res.json({ mensagem: `A velocidade média do ${nomePiloto} foi ${velocidadeMedia} km/h.` });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

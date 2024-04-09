const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Rota para calcular o salário a receber do funcionário
app.post('/salario-receber', (req, res) => {
    const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } = req.body;

    // Verificando se todos os dados foram fornecidos
    if (!salarioMinimo || !horasTrabalhadas || !dependentes || !horasExtras) {
        return res.status(400).json({ error: 'É necessário fornecer todos os dados: salarioMinimo, horasTrabalhadas, dependentes e horasExtras.' });
    }

    // Calculando o valor da hora trabalhada
    const valorHoraTrabalhada = salarioMinimo / 5;

    // Calculando o salário do mês
    const salarioMes = horasTrabalhadas * valorHoraTrabalhada;

    // Calculando o acréscimo para dependentes
    const acrescimoDependentes = dependentes * 32;

    // Calculando o valor das horas extras
    const valorHoraExtra = valorHoraTrabalhada * 1.5;
    const salarioHorasExtras = horasExtras * valorHoraExtra;

    // Calculando o salário bruto
    const salarioBruto = salarioMes + acrescimoDependentes + salarioHorasExtras;

    // Calculando o imposto de renda retido na fonte
    let irrf;
    if (salarioBruto <= 2000) {
        irrf = 0;
    } else if (salarioBruto <= 5000) {
        irrf = salarioBruto * 0.1;
    } else {
        irrf = salarioBruto * 0.2;
    }

    // Calculando o salário líquido
    const salarioLiquido = salarioBruto - irrf;

    // Calculando a gratificação
    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000;
    } else {
        gratificacao = 500;
    }

    // Calculando o salário a receber do funcionário
    const salarioReceber = salarioLiquido + gratificacao;

    // Retornando o resultado
    res.json({ salarioReceber });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

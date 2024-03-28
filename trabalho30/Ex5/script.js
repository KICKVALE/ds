let alturas = [];

function adicionarAltura() {
    const sexo = document.getElementById('sexo').value;
    const altura = parseFloat(document.getElementById('altura').value);
    alturas.push({ sexo, altura });

    const alturaForm = document.getElementById('alturaForm');
    alturaForm.reset();
}

document.getElementById('alturaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let maiorAltura = 0;
    let menorAltura = Number.MAX_VALUE;
    let totalMulheres = 0;
    let somaAlturaMulheres = 0;

    alturas.forEach(pessoa => {
        if (pessoa.altura > maiorAltura) {
            maiorAltura = pessoa.altura;
        }
        if (pessoa.altura < menorAltura) {
            menorAltura = pessoa.altura;
        }
        if (pessoa.sexo === '0') {
            totalMulheres++;
            somaAlturaMulheres += pessoa.altura;
        }
    });

    const mediaMulheres = totalMulheres ? somaAlturaMulheres / totalMulheres : 0;

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
        <h2>Resultados:</h2>
        <p>Maior Altura: ${maiorAltura.toFixed(2)}</p>
        <p>Menor Altura: ${menorAltura.toFixed(2)}</p>
        <p>Média de Altura das Mulheres: ${mediaMulheres.toFixed(2)}</p>
        <p>Quantidade de Homens: ${alturas.length - totalMulheres}</p>
    `;
});
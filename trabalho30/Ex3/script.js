let salariosCount = 0;

function adicionarSalario() {
    salariosCount++;
    const salariosDiv = document.getElementById('salarios');
    const inputSalario = document.createElement('input');
    inputSalario.type = 'number';
    inputSalario.name = `salario${salariosCount}`;
    inputSalario.placeholder = `Salário ${salariosCount}`;
    salariosDiv.appendChild(inputSalario);
}

document.getElementById('internForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cod = document.getElementById('cod').value;
    const nome = document.getElementById('nome').value;
    const ano = document.getElementById('ano').value;

    const salarios = [];
    for (let i = 1; i <= salariosCount; i++) {
        const salario = document.getElementsByName(`salario${i}`)[0].value;
        salarios.push(parseFloat(salario));
    }

    const sal_anual = salarios.reduce((acc, cur) => acc + cur, 0);

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
        <h2>Dados do Estagiário:</h2>
        <p>Código: ${cod}</p>
        <p>Nome: ${nome}</p>
        <p>Ano de Nascimento: ${ano}</p>
        <p>Salário Anual: ${sal_anual.toFixed(2)}</p>
    `;
    resultContainer.classList.add('result');
}); 

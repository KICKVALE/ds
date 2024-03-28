document.addEventListener('DOMContentLoaded', function() {
    const salaryForm = document.getElementById('salaryForm');
    const resultContainer = document.getElementById('resultContainer');
    const resultElement = document.getElementById('result');

    salaryForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const horasNormais = parseFloat(document.getElementById('horasNormais').value);
        const horasExtras = parseFloat(document.getElementById('horasExtras').value);

        const hora = 10.00;
        const horaExtra = 15.00;
        const poupPercentage = 0.08;

        const horasNormaisResult = horasNormais * hora;
        const horasExtrasResult = horasExtras * horaExtra;
        const totalGanho = horasNormaisResult + horasExtrasResult;
        const poupValue = totalGanho * poupPercentage;

        resultElement.innerHTML = `
            <p>Valor de horas normais: R$ ${horasNormaisResult.toFixed(2)}</p>
            <p>Valor de horas extras: R$ ${horasExtrasResult.toFixed(2)}</p>
            <p>Total de ganho no ano: R$ ${totalGanho.toFixed(2)}</p>
            <p>Valor a guardar na poupança: R$ ${poupValue.toFixed(2)}</p>
        `;
        resultContainer.classList.remove('hidden');
    });
});

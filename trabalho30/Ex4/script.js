document.getElementById('personalInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const cep = document.getElementById('cep').value;

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
        <h2>Dados Pessoais:</h2>
        <p>Nome: ${nome}</p>
        <p>Telefone: ${telefone}</p>
        <h2>Endereço:</h2>
        <p>Rua: ${rua}, ${numero}</p>
        <p>Bairro: ${bairro}</p>
        <p>Cidade: ${cidade}</p>
        <p>Estado: ${estado}</p>
        <p>CEP: ${cep}</p>
    `;
});
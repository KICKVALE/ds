document.addEventListener('DOMContentLoaded', function() {
    const gradesForm = document.getElementById('gradesForm');
    const resultContainer = document.getElementById('resultContainer');
    const resultElement = document.getElementById('result');

    gradesForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const studentId = parseInt(document.getElementById('studentId').value);
        const grade1 = parseFloat(document.getElementById('grade1').value);

        const grades = [grade1];
        let sum = grade1;

        for (let i = 2; i <= 12; i++) {
            const grade = parseFloat(prompt('Qual a ${i}ª nota (de 0 a 100):)'));
            grades.push(grade);
            sum += grade;
        }

        const average = sum / 12;
        let concept = '';

        if (average >= 90) {
            concept = 'A';
        } else if (average >= 75) {
            concept = 'B';
        } else if (average >= 60) {
            concept = 'C';
        } else if (average >= 40) {
            concept = 'D';
        } else {
            concept = 'E';
        }

        resultElement.innerHTML = `
            <p>Aluno ${studentId}:</p>
            <p>Média = ${average.toFixed(2)}</p>
            <p>Conceito = ${concept}</p>
        `;
        resultContainer.classList.remove('hidden');
    });
});
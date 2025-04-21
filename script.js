// Espera o DOM carregar completamente antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
    // Obtém referências aos elementos do DOM
    const inputText = document.getElementById('inputText');
    const sortButton = document.getElementById('sortButton');
    const resultElement = document.getElementById('result');

    // Adiciona um event listener para o botão de ordenar
    sortButton.addEventListener('click', function () {
        // Obtém o valor do input e remove espaços extras no início e fim
        const text = inputText.value.trim();

        // Verifica se o input não está vazio
        if (text === '') {
            alert('Por favor, digite algumas palavras para ordenar.');
            return;
        }

        // Processa o texto e ordena as letras de cada palavra
        const sortedText = sortLettersInWords(text);

        // Exibe o resultado na página
        resultElement.textContent = sortedText;
    });

    // Adiciona também a funcionalidade ao pressionar Enter no input
    inputText.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sortButton.click();
        }
    });
});

/**
 * Função que ordena as letras de cada palavra em uma string
 * @param {string} text - O texto contendo palavras com letras desordenadas
 * @returns {string} - O texto com as letras de cada palavra ordenadas alfabeticamente
 */
function sortLettersInWords(text) {
    // Divide o texto em palavras individuais
    const words = text.split(' ');

    // Processa cada palavra
    const sortedWords = words.map(word => {
        // Divide a palavra em letras individuais
        const letters = word.split('');

        // Ordena as letras alfabeticamente
        const sortedLetters = letters.sort((a, b) => a.localeCompare(b));

        // Junta as letras ordenadas de volta em uma palavra
        return sortedLetters.join('');
    });

    // Junta as palavras processadas de volta em uma string
    return sortedWords.join(' ');
}
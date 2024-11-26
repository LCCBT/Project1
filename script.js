const wordDisplay = document.getElementById('wordDisplay');
const wordInput = document.getElementById('wordInput');
const scoreDisplay = document.getElementById('score');

let words = ['你好', '世界', '打字', '遊戲'];
let currentWord = '';
let score = 0;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function updateWord() {
    currentWord = getRandomWord();
    wordDisplay.textContent = currentWord;
}

wordInput.addEventListener('input', () => {
    if (wordInput.value === currentWord) {
        score++;
        scoreDisplay.textContent = score;
        wordInput.value = '';
        updateWord();
    }
});

updateWord();

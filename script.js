// Parte 1: Configuración
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 10;
let gameOver = false;
const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('guess-input');
const messageDiv = document.getElementById('message');
const attemptsDiv = document.getElementById('attempts');
const resetButton = document.getElementById('reset-button');
const guessHistory = document.getElementById('guess-history');

// Función para mostrar mensajes con estilo dinámico
function showMessage(text, type) {
  messageDiv.textContent = text;
  messageDiv.className = type; // success o error
}

// Parte 2: Lógica del juego
guessForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (gameOver) return;

  const userGuess = Number(guessInput.value);
  attempts++;
  attemptsDiv.textContent = `Intentos: ${attempts}`;

  // Agrega al historial
  const listItem = document.createElement('li');
  listItem.textContent = userGuess;
  guessHistory.appendChild(listItem);

  // Comparar con el número aleatorio
  if (userGuess === randomNumber) {
    showMessage('¡Correcto! ¡Has adivinado el número!', 'success');
    gameOver = true;
  } else if (userGuess < randomNumber) {
    showMessage('Demasiado bajo. Intenta de nuevo.', 'error');
  } else {
    showMessage('Demasiado alto. Intenta de nuevo.', 'error');
  }

  // Límite de intentos
  if (attempts >= maxAttempts && !gameOver) {
    showMessage(`¡Has perdido! El número era ${randomNumber}.`, 'error');
    gameOver = true;
  }

  guessInput.value = '';
});

// Parte 3: Reiniciar el juego
resetButton.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  gameOver = false;
  guessInput.value = '';
  attemptsDiv.textContent = '';
  messageDiv.textContent = '';
  messageDiv.className = '';
  guessHistory.innerHTML = '';
});

const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const listItem = document.createElement('li');
  const taskTextElement = document.createElement('span');
  taskTextElement.textContent = taskText;
  listItem.appendChild(taskTextElement);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);

  taskInput.value = '';
}

taskList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'LI') {
    target.classList.toggle('completed');
  }
});

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', function (e) {
  let isValid = true;

  if (usernameInput.value.trim() === '') {
    isValid = false;
    usernameError.textContent = 'Имя пользователя обязательно';
  } else {
    usernameError.textContent = '';
  }

  if (emailInput.value.trim() === '') {
    isValid = false;
    emailError.textContent = 'Email обязателен';
  } else {
    emailError.textContent = '';
  }

  if (passwordInput.value.trim() === '') {
    isValid = false;
    passwordError.textContent = 'Пароль обязателен';
  } else {
    passwordError.textContent = '';
  }

  if (!isValid) {
    e.preventDefault(); // Остановка отправки формы, если есть ошибки
  }
});
const durationInput = document.getElementById('duration');
const startButton = document.getElementById('start-timer');
const countdownDisplay = document.getElementById('countdown');

let countdown;
let isRunning = false;

startButton.addEventListener('click', () => {
  if (!isRunning) {
    startTimer(durationInput.value);
    isRunning = true;
  }
});

function startTimer(duration) {
  let start = Date.now();
  let end = start + duration * 1000;

  function updateCountdown() {
    const now = Date.now();
    const timeLeft = end - now;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      isRunning = false;
      return;
    }

    displayCountdown(timeLeft);
  }

  function displayCountdown(timeLeft) {
    const seconds = Math.floor(timeLeft / 1000);
    countdownDisplay.textContent = seconds;
  }

  countdown = setInterval(updateCountdown, 1000);
  updateCountdown();
}
// page navigator 

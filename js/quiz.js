import questions from '../data/questions.js';

let currentIndex = 0;
let score = 0;
let selectedAnswer = null;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const submitBtn = document.getElementById('submit-answer');

submitBtn.style.display = 'none';

function loadQuestion(){
  const q = questions[currentIndex];

  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  selectedAnswer = null;
  submitBtn.style.display = 'none';

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = option;
    btn.className = 'option-btn';

    btn.onclick = () => {
      const prev = optionsEl.querySelector('.selected');
      if (prev) prev.classList.remove('selected');
      btn.classList.add('selected');
      selectedAnswer = option;
      submitBtn.style.display = 'inline-block';
    };

    optionsEl.appendChild(btn);
  });
}

submitBtn.addEventListener('click', () => {
  const q = questions[currentIndex];
  if (selectedAnswer === q.answer) score++;

  currentIndex++;
  if (currentIndex < questions.length){
    loadQuestion();
  } else {
    localStorage.setItem('score', score);
    window.location.href = '../html/results.html';
  }
});

window.addEventListener('DOMContentLoaded', loadQuestion);
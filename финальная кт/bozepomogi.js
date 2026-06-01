let score = 0;
const scoreDisplay = document.getElementById('score');
const clickerContainer = document.querySelector('.clicker-container');
const restartBtn = document.getElementById('restartBtn');

// При клике на контейнер
clickerContainer.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;

  // Анимация: увеличение и возврат
  clickerContainer.classList.add('clicked');
  setTimeout(() => {
    clickerContainer.classList.remove('clicked');
  }, 100);

  // Добавляем бонус 5 очков каждые 10 кликов
  if (score % 10 === 0 && score > 0) {
    score += 5;
    scoreDisplay.textContent = score;
  }

  // Если набрано ровно 100 очков, показываем модальное окно
  if (score === 100) {
    Swal.fire({
      title: '🎉 Поздравляю!',
      text: 'Ты набрал 100 очков! Гиару гордится тобой!',
      icon: 'success',
      confirmButtonText: 'Ура!',
      background: '#fff8fc',
      backdrop: 'rgba(255, 224, 240, 0.85)'
    });
  }
});

// Перезапуск игры
restartBtn.addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = score;
  // Добавляем простую анимацию перезапуска
  scoreDisplay.style.transform = 'scale(1.2)';
  setTimeout(() => {
    scoreDisplay.style.transform = 'scale(1)';
  }, 200);
});

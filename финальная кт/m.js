let score = 0;
  const scoreEl = document.getElementById('score');
  const clickerImg = document.getElementById('clicker-img');

  clickerImg.addEventListener('click', () => {
    score++;
    scoreEl.textContent = score;

    // Дополнительный визуальный отклик (опционально)
    clickerImg.style.transform = 'scale(0.98)';
    setTimeout(() => {
      clickerImg.style.transform = 'scale(1)';
    }, 50);
  });
// Убеждаемся, что DOM загружен
document.addEventListener('DOMContentLoaded', () => {
  const movieItems = document.querySelectorAll('.movie-item');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const closeModal = document.querySelector('.close');

  if (!modal || !modalTitle || !modalDesc || !closeModal) return console.error("Необходимые элементы отсутствуют");

  // Обработчик клика по каждому фильму
  movieItems.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');

      modalTitle.textContent = title;
      modalDesc.textContent = desc;

      modal.style.display = 'flex'; // Показать модальное окно
    });
  });

  // Закрытие по крестику
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Закрытие по клику вне контента
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Закрытие по клавише Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
});

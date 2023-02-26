const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modal = document.getElementById('modal');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('fade-in');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('fade-out');
  setTimeout(() => {
    modal.classList.remove('fade-in', 'fade-out');
  }, 500);
});

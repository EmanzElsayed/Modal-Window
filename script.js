'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');
const Model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  Model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  Model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    openModal();
  });
}

const btnCloseModal = document
  .querySelector('.close-modal')
  .addEventListener('click', function () {
    closeModal();
  });

overlay.addEventListener('click', function () {
  closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !Model.classList.contains('hidden')) {
    closeModal();
  }
});

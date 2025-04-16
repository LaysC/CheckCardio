document.addEventListener('DOMContentLoaded', () => {

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

const header = card.querySelector('.card-header');

const content = card.querySelector('.card-content');



header.addEventListener('click', () => {

  content.classList.toggle('active');

});

});

});


var itemsNav = document.querySelectorAll('.nav-li');
var itemsProjeto = document.querySelectorAll('.item-projeto');
var itemsHabilidade = document.querySelectorAll('.moldura-icone');
var estado = 0;
function dayMode() {
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('body').style.color = 'black';
  document.querySelector('.header').style.backgroundColor = '#EBEBEB';
  document.querySelector('#sobre-mim').style.backgroundColor = '#EBEBEB';
  for (var i = 0; i < itemsNav.length; i++) {
    itemsNav[i].style.color = '#000000';
  }

  for (var i = 0; i < itemsProjeto.length; i++) {
    itemsProjeto[i].style.backgroundColor = '#EBEBEB';
  }
  document.querySelector('#habilidades').style.backgroundColor = '#EBEBEB';

  for (var i = 0; i < itemsHabilidade.length; i++) {
    itemsHabilidade[i].style.backgroundColor = 'white';
  }
  document
    .querySelector('#toggleSwitch')
    .setAttribute('onclick', 'nightMode()');

  document.querySelector('.flex-experiencia').style.backgroundColor = '#EBEBEB';
  document.querySelector('.reverse').style.backgroundColor = '#EBEBEB';
  estado = 1;
}

function nightMode() {
  document.querySelector('body').style.backgroundColor = '#111111';
  document.querySelector('body').style.color = 'white';
  document.querySelector('.header').style.backgroundColor = '#2C2C2C';
  document.querySelector('#sobre-mim').style.backgroundColor = '#2C2C2C';
  for (var i = 0; i < itemsNav.length; i++) {
    itemsNav[i].style.color = 'white';
  }

  for (var i = 0; i < itemsProjeto.length; i++) {
    itemsProjeto[i].style.backgroundColor = '#2C2C2C';
  }

  document.querySelector('#habilidades').style.backgroundColor = '#2C2C2C';

  for (var i = 0; i < itemsHabilidade.length; i++) {
    itemsHabilidade[i].style.backgroundColor = '#111111';
  }

  document.querySelector('#toggleSwitch').setAttribute('onclick', 'dayMode()');

  estado = 0;

  document.querySelector('.flex-experiencia').style.backgroundColor = '#2C2C2C';
  document.querySelector('.reverse').style.backgroundColor = '#2C2C2C';
}

const menuHamburguer = document.querySelector('#menuHamburguer');
const navUl = document.querySelector('.nav-ul');
const header = document.querySelector('.header');
const toggle = document.querySelector('.switch');
const html = document.querySelector('html');
menuHamburguer.addEventListener('click', () => {
  navUl.classList.toggle('show');
  header.classList.toggle('show');
  menuHamburguer.classList.toggle('show');
  toggle.classList.toggle('show');
  html.classList.toggle('show');
  if (estado == 1) {
    navUl.classList.toggle('light');
  }
});

for (var i = 0; i < itemsNav.length; i++) {
  itemsNav[i].addEventListener('click', () => {
    navUl.classList.toggle('show');
    header.classList.toggle('show');
    menuHamburguer.classList.toggle('show');
    toggle.classList.toggle('show');
    html.classList.toggle('show');

    if (estado == 1) {
      navUl.classList.toggle('light');
    }
  });
}

itemsHabilidade[0].addEventListener('click', () => {
  itemsHabilidade[0].classList.toggle('show-hab');
  document.querySelector('.html').classList.toggle('show-hab');
});

itemsHabilidade[1].addEventListener('click', () => {
  itemsHabilidade[1].classList.toggle('show-hab');
  document.querySelector('.python').classList.toggle('show-hab');
});

itemsHabilidade[2].addEventListener('click', () => {
  itemsHabilidade[2].classList.toggle('show-hab');
  document.querySelector('.javascript').classList.toggle('show-hab');
});

itemsHabilidade[3].addEventListener('click', () => {
  itemsHabilidade[3].classList.toggle('show-hab');
  document.querySelector('.css').classList.toggle('show-hab');
});

itemsHabilidade[4].addEventListener('click', () => {
  itemsHabilidade[4].classList.toggle('show-hab');
  document.querySelector('.figma').classList.toggle('show-hab');
});

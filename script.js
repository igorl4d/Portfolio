const itemsNav = document.querySelectorAll('.nav-li');
const itemsProjeto = document.querySelectorAll('.item-projeto');
const itemsHabilidade = document.querySelectorAll('.moldura-icone');
const sectOff = document.querySelectorAll('.sectOff');
const flexExperiencia = document.querySelectorAll('.flex-experiencia');

function dayMode() {
  document.querySelector('body').classList.toggle('background-day');
  document.querySelector('.header').classList.toggle('background-day-gray');
  document.querySelector('.nav-ul').classList.toggle('background-day-gray');

  for (var i = 0; i < sectOff.length; i++) {
    sectOff[i].classList.toggle('background-day-gray');
  }

  for (var i = 0; i < itemsNav.length; i++) {
    itemsNav[i].classList.toggle('text-day');
  }

  for (var i = 0; i < itemsProjeto.length; i++) {
    itemsProjeto[i].classList.toggle('background-day-gray');
  }

  for (var i = 0; i < itemsHabilidade.length; i++) {
    itemsHabilidade[i].classList.toggle('background-day');
  }

  for (var i = 0; i < flexExperiencia.length; i++) {
    flexExperiencia[i].classList.toggle('background-day-gray');
  }
}

//Menu mobile
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
});

//Fecha menu mobile no redirecionar
for (var i = 0; i < itemsNav.length; i++) {
  itemsNav[i].addEventListener('click', () => {
    navUl.classList.toggle('show');
    header.classList.toggle('show');
    menuHamburguer.classList.toggle('show');
    toggle.classList.toggle('show');
    html.classList.toggle('show');
  });
}

//Função dos butões experiencia
itemsHabilidade.forEach(function (item) {
  item.addEventListener('click', function (e) {
    tipoItem = e.currentTarget.classList;

    if (tipoItem.contains('html')) {
      itemsHabilidade[0].classList.toggle('show-hab');
    }

    if (tipoItem.contains('python')) {
      itemsHabilidade[1].classList.toggle('show-hab');
    }

    if (tipoItem.contains('javascript')) {
      itemsHabilidade[2].classList.toggle('show-hab');
    }

    if (tipoItem.contains('css')) {
      itemsHabilidade[3].classList.toggle('show-hab');
    }

    if (tipoItem.contains('figma')) {
      itemsHabilidade[4].classList.toggle('show-hab');
    }
  });
});

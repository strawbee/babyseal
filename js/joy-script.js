'use strict';

function goHome() {
  document.querySelector('header').style.display = 'block';
  document.getElementById('templatesSection').style.display = 'none';
  document.getElementById('colorsSection').style.display = 'none';
  document.getElementById('aboutUsSection').style.display = 'none';
  document.querySelector('header').style.animationName = 'slide-up';
  document.querySelector('header').style.animationDuration = '2s';
}

function aboutUs() {
  document.getElementById('aboutUsSection').style.display = 'block';
  document.querySelector('header').style.display = 'none';
  document.getElementById('templatesSection').style.display = 'none';
  document.getElementById('colorsSection').style.display = 'none';
  document.getElementById('aboutUsSection').style.animationName = 'slide-up';
  document.getElementById('aboutUsSection').style.animationDuration = '2s';
}

function loadTemplates() {
  document.getElementById('templatesSection').style.display = 'block';
  document.querySelector('header').style.display = 'none';
  document.getElementById('colorsSection').style.display = 'none';
  document.getElementById('aboutUsSection').style.display = 'none';
  document.getElementById('templatesSection').style.animationName = 'slide-down';
  document.getElementById('templatesSection').style.animationDuration = '2s';
}

function templatesNext() {
  document.getElementById('colorsSection').style.display = 'block';
  document.getElementById('templatesSection').style.display = 'none';
  document.getElementById('colorsSection').style.animationName = 'slide-left';
  document.getElementById('colorsSection').style.animationDuration = '2s';
}

function colorsPrevious() {
  document.getElementById('templatesSection').style.display = 'block';
  document.getElementById('colorsSection').style.display = 'none';
  document.getElementById('templatesSection').style.animationName = 'slide-right';
  document.getElementById('templatesSection').style.animationDuration = '2s';
}


document.getElementById('homeLink').addEventListener('click', goHome);
document.getElementById('aboutUsLink').addEventListener('click', aboutUs);
document.getElementById('chooseLayoutLink').addEventListener('click', loadTemplates);
document.getElementById('headerNext').addEventListener('click', loadTemplates);
document.getElementById('templatesNextButton').addEventListener('click', templatesNext);
document.getElementById('colorsPreviousButton').addEventListener('click', colorsPrevious);
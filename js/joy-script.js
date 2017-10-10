'use strict';
var header = document.querySelector('header');
var templatesSection = document.getElementById('templatesSection');
var colorsSection = document.getElementById('colorsSection');
var aboutUsSection = document.getElementById('aboutUsSection');
var homeLink = document.getElementById('homeLink');
var aboutUsLink = document.getElementById('aboutUsLink');
var chooseLayoutLink = document.getElementById('chooseLayoutLink');
var wrapper = document.getElementById('wrapper');

// Navigation Functions
function goHome() {
  header.style.display = 'block';
  templatesSection.style.display = 'none';
  colorsSection.style.display = 'none';
  aboutUsSection.style.display = 'none';
  header.style.animationName = 'slide-up';
  header.style.animationDuration = '1.5s';
  homeLink.style.backgroundColor = '#333';
  aboutUsLink.style.backgroundColor = '';
  chooseLayoutLink.style.backgroundColor = '';
}

function aboutUs() {
  aboutUsSection.style.display = 'block';
  header.style.display = 'none';
  templatesSection.style.display = 'none';
  colorsSection.style.display = 'none';
  aboutUsSection.style.animationName = 'slide-down';
  aboutUsSection.style.animationDuration = '1.5s';
  homeLink.style.backgroundColor = '';
  aboutUsLink.style.backgroundColor = '#333';
  chooseLayoutLink.style.backgroundColor = '';
}

function loadTemplates() {
  templatesSection.style.display = 'block';
  header.style.display = 'none';
  colorsSection.style.display = 'none';
  aboutUsSection.style.display = 'none';
  templatesSection.style.animationName = 'slide-down';
  templatesSection.style.animationDuration = '1.5s';
  homeLink.style.backgroundColor = '';
  aboutUsLink.style.backgroundColor = '';
  chooseLayoutLink.style.backgroundColor = '#333';
}

function templatesNext() {
  colorsSection.style.display = 'block';
  templatesSection.style.display = 'none';
  colorsSection.style.animationName = 'slide-left';
  colorsSection.style.animationDuration = '1.5s';
}

function colorsPrevious() {
  templatesSection.style.display = 'block';
  colorsSection.style.display = 'none';
  templatesSection.style.animationName = 'slide-right';
  templatesSection.style.animationDuration = '1.5s';
}

// Other Functions
function applyColors(event) {
  event.preventDefault();
  var possibleColors = document.getElementsByName('colorsRadioButton');
  if (possibleColors[0].checked === true) {
    changeColor('#4ec3d8', '#07a4c1', '#057287'); // Default
  } else if (possibleColors[1].checked === true) {
    changeColor('#d14747', '#a80606', '#870505'); // Red
  } else if (possibleColors[2].checked === true) {
    changeColor('#efa556', '#c14807', '#A05616'); // Orange
  } else if (possibleColors[3].checked === true) {
    changeColor('#ceaf00', '#876c00', '#82700d'); // Yellow
  } else if (possibleColors[4].checked === true) {
    changeColor('#009b0f', '#006d01', '#016300'); // Green
  } else if (possibleColors[5].checked === true) {
    changeColor('#0071b2', '#004e7f', '#063451'); // Blue
  } else if (possibleColors[6].checked === true) {
    changeColor('#a55697', '#821865', '#7c2969'); // Purple
  }
}

function changeColor(gradient1, gradient2, shadow) {
  wrapper.style.background = 'linear-gradient(' + gradient1 + ', ' + gradient2 + ') fixed';
  homeLink.addEventListener('mouseover', function() { this.style.backgroundColor = shadow; });
  homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  aboutUsLink.addEventListener('mouseover', function() { this.style.backgroundColor = shadow; });
  aboutUsLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  chooseLayoutLink.addEventListener('mouseover', function() { this.style.backgroundColor = shadow; });
  chooseLayoutLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  document.querySelector('h1').style.textShadow = '2px 2px 4px ' + shadow;
  document.getElementById('headerInstructions').style.textShadow = '2px 2px 3px ' + shadow;
  document.getElementById('templatesHeader').style.textShadow = '2px 2px 4px ' + shadow;
  document.getElementById('colorsHeader').style.textShadow = '2px 2px 4px ' + shadow;
  document.getElementById('aboutUsHeader').style.textShadow = '2px 2px 4px ' + shadow;
  templatesSection.style.textShadow = '1px 1px 3px ' + shadow;
  colorsSection.style.textShadow = '1px 1px 3px ' + shadow;
  aboutUsSection.style.textShadow = '1px 1px 3px ' + shadow;
}

// Navigation Event Listeners
homeLink.addEventListener('click', goHome);
aboutUsLink.addEventListener('click', aboutUs);
chooseLayoutLink.addEventListener('click', loadTemplates);
document.getElementById('headerNext').addEventListener('click', loadTemplates);
document.getElementById('templatesNextButton').addEventListener('click', templatesNext);
document.getElementById('colorsPreviousButton').addEventListener('click', colorsPrevious);
document.getElementById('getCodeButton').addEventListener('click', function() { window.open('code.html', '_blank'); });

// Other Event Listeners
document.getElementById('colorsForm').addEventListener('submit', applyColors);

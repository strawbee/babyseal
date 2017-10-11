'use strict';
var colorsSection = document.getElementById('colorsSection');
var aboutUsSection = document.getElementById('aboutUsSection');
var homeLink = document.getElementById('homeLink');
var aboutUsLink = document.getElementById('aboutUsLink');
var chooseLayoutLink = document.getElementById('chooseLayoutLink');
var wrapper = document.getElementById('wrapper');
var joyStoreColor, jeffStoreColor;

// Navigation Functions
function goHome() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
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
}

function aboutUs() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
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
}

function loadTemplates() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
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
}

function templatesNext() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    colorsSection.style.display = 'block';
    templatesSection.style.display = 'none';
    colorsSection.style.animationName = 'slide-left';
    colorsSection.style.animationDuration = '1.5s';
  }
}

function colorsPrevious() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    templatesSection.style.display = 'block';
    colorsSection.style.display = 'none';
    templatesSection.style.animationName = 'slide-right';
    templatesSection.style.animationDuration = '1.5s';
  }
}

/* ==================================== Colors ==================================== */

// Global function to call upon clicking apply

function applyColors(event) {
  event.preventDefault();
  var possibleColors = document.getElementsByName('colorsRadioButton');

  // Default Color - calls individual color function depending on the active template, then stores the selected colors for each template.
  if (possibleColors[0].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#4ec3d8', '#07a4c1', '#057287');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#000', '#111');
    }
    joyStoreColor = ['#4ec3d8', '#07a4c1', '#057287'];
    jeffStoreColor = ['#000', '#111'];

  // Red
  } else if (possibleColors[1].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#d14747', '#a80606', '#870505');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#BB0000', '#690000');
    }
    joyStoreColor = ['#d14747', '#a80606', '#870505'];
    jeffStoreColor = ['#BB0000', '#690000'];

  // Orange
  } else if (possibleColors[2].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#efa556', '#c14807', '#A05616');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#D14800', '#D16024');
    }
    joyStoreColor = ['#efa556', '#c14807', '#A05616'];
    jeffStoreColor = ['#D14800', '#D16024'];

  // Yellow
  } else if (possibleColors[3].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#ceaf00', '#876c00', '#82700d');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#FFE100', '#DEC300');
    }
    joyStoreColor = ['#ceaf00', '#876c00', '#82700d'];
    jeffStoreColor = ['#FFE100', '#DEC300'];

  // Green
  } else if (possibleColors[4].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#009b0f', '#006d01', '#016300');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#008705', '#006D04');
    }
    joyStoreColor = ['#009b0f', '#006d01', '#016300'];
    jeffStoreColor = ['#008705', '#006D04'];

  // Blue
  } else if (possibleColors[5].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#0071b2', '#004e7f', '#063451');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#3D5091', '#001991');
    }
    joyStoreColor = ['#0071b2', '#004e7f', '#063451'];
    jeffStoreColor = ['#3D5091', '#001991'];

  // Purple
  } else if (possibleColors[6].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#a55697', '#821865', '#7c2969');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#680078', '#9A00B8');
    }
    joyStoreColor = ['#a55697', '#821865', '#7c2969'];
    jeffStoreColor = ['#680078', '#9A00B8'];
  }

  // Sends stored colors for each template to local storage
  localStorage['joyColors'] = JSON.stringify(joyStoreColor);
  localStorage['jeffColors'] = JSON.stringify(jeffStoreColor);
  localStorage.colorStored = true;
}

// Individualized color functions

function joyChangeColor(gradient1, gradient2, shadow) {
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

function jeffChangeColor(gradientA, gradientB) {
  document.querySelector('body').style.background = 'linear-gradient(' + gradientA + ', ' + gradientB + ')';
}

// Pulls stored colors for each template from local storage, and applies the correct color function depending on which template is active
if (localStorage.colorStored) {
  joyStoreColor = JSON.parse(localStorage['joyColors']);
  jeffStoreColor = JSON.parse(localStorage['jeffColors']);
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    joyChangeColor(joyStoreColor[0], joyStoreColor[1], joyStoreColor[2]);
  }
  if (activeTemplate === allTemplates[3]) {
    jeffChangeColor(jeffStoreColor[0], jeffStoreColor[1]);
  }
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

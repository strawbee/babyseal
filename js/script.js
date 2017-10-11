'use strict';

var header = document.querySelector('header');
var templatesSection = document.getElementById('templatesSection');
var colorsSection = document.getElementById('colorsSection');
var backgroundsSection = document.getElementById('backgroundsSection');
var aboutUsSection = document.getElementById('aboutUsSection');
var homeLink = document.getElementById('homeLink');
var aboutUsLink = document.getElementById('aboutUsLink');
var chooseLayoutLink = document.getElementById('chooseLayoutLink');
var wrapper = document.getElementById('wrapper');
var joyStoreColor, jeffStoreColor;



/* ==================================== TEMPLATES ==================================== */

var stylesheets = document.querySelectorAll('link');
var activeTemplate;

var allTemplates = [
  'css/style.css',
  'css/joy-style.css',
  'css/seth-style.css',
  'css/jeff-style.css'
];

// Loops through template radio buttons. If a button is checked, change the stylesheet accordingly and store the value to local storage. Set local storage 'startAtTemplate' and 'templateStored' to true and reload page.
function applyTemplates(event) {
  event.preventDefault();
  var possibleTemplates = document.getElementsByName('templatesRadioButton');
  localStorage.startAtTemplate = 'true';
  for (var radio = 0; radio < allTemplates.length; radio++) {
    if (possibleTemplates[radio].checked === true) {
      stylesheets[2].href = allTemplates[radio];
      localStorage['template'] = allTemplates[radio];
      localStorage.templateStored = 'true';
      window.location.reload('true');
    }
  }
}

// Checks local storage - if 'templatesStored' is true, then loads it to page. If not, then use default template.
if (localStorage.templateStored === 'true') {
  activeTemplate = localStorage['template'];
  stylesheets[2].href = activeTemplate;
} else {
  activeTemplate = allTemplates[0];
}

/* Checks local storage to see if the page should start at template page (after user presses apply template) or at the header page (on reload or new session).

If 'startAtTemplate' is currently true, then sets it to false. That way, when the applyTemplates function is called, it is set to true. If it isn't called, it remains false and the page will load on header instead of templates section. */

if (localStorage.startAtTemplate === 'true') {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    header.style.display = 'none';
    templatesSection.style.display = 'block';
  }
  localStorage.startAtTemplate = false;
} else if (localStorage.startAtTemplate === 'false'){
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    header.style.display = 'block';
    templatesSection.style.display = 'none';
  }
}

// Apply Templates Event Listener
document.getElementById('templatesForm').addEventListener('submit', applyTemplates);




/* ==================================== NAV AND BUTTONS ==================================== */

// Nav: Home Link
function goHome() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    header.style.display = 'block';
    templatesSection.style.display = 'none';
    colorsSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    backgroundsSection.style.display = 'none';
    header.style.animationName = 'slide-up';
    header.style.animationDuration = '1.5s';
    homeLink.style.backgroundColor = '#333';
    aboutUsLink.style.backgroundColor = '';
    chooseLayoutLink.style.backgroundColor = '';
  }
}

// Nav: About Us Link
function aboutUs() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    aboutUsSection.style.display = 'block';
    header.style.display = 'none';
    templatesSection.style.display = 'none';
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'none';
    aboutUsSection.style.animationName = 'slide-down';
    aboutUsSection.style.animationDuration = '1.5s';
    homeLink.style.backgroundColor = '';
    aboutUsLink.style.backgroundColor = '#333';
    chooseLayoutLink.style.backgroundColor = '';
  }
}

// Nav: Choose Layout Link
function loadTemplates() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    templatesSection.style.display = 'block';
    header.style.display = 'none';
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    templatesSection.style.animationName = 'slide-down';
    templatesSection.style.animationDuration = '1.5s';
    homeLink.style.backgroundColor = '';
    aboutUsLink.style.backgroundColor = '';
    chooseLayoutLink.style.backgroundColor = '#333';
  }
}

// Button: going to colors section from the templates section
function templatesNext() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    colorsSection.style.display = 'block';
    templatesSection.style.display = 'none';
    colorsSection.style.animationName = 'slide-left';
    colorsSection.style.animationDuration = '1.5s';
  }
}

// Button: going back to templates section from color section
function colorsPrevious() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    templatesSection.style.display = 'block';
    colorsSection.style.display = 'none';
    templatesSection.style.animationName = 'slide-right';
    templatesSection.style.animationDuration = '1.5s';
  }
}

// Button: going to backgrounds section from color section
function colorsNext() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'block';
    backgroundsSection.style.animationName = 'slide-left';
    backgroundsSection.style.animationDuration = '1.5s';
  }
}

// Button: going from backgrounds section back to color section
function backgroundsPrevious() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    colorsSection.style.display = 'block';
    backgroundsSection.style.display = 'none';
    colorsSection.style.animationName = 'slide-right';
    colorsSection.style.animationDuration = '1.5s';
  }
}

// Navigation Event Listeners
homeLink.addEventListener('click', goHome);
aboutUsLink.addEventListener('click', aboutUs);
chooseLayoutLink.addEventListener('click', loadTemplates);
document.getElementById('headerNext').addEventListener('click', loadTemplates);
document.getElementById('templatesNextButton').addEventListener('click', templatesNext);
document.getElementById('colorsPreviousButton').addEventListener('click', colorsPrevious);
document.getElementById('colorsNextButton').addEventListener('click', colorsNext);
document.getElementById('backgroundsPreviousButton').addEventListener('click', backgroundsPrevious);
document.getElementById('getCodeButton').addEventListener('click', function() { window.open('code.html', '_blank'); });




/* ==================================== Colors ==================================== */

var joyAllBackgrounds = [
  '../images/joy-bgs/default.jpg',
  '../images/joy-bgs/red.jpg',
  '../images/joy-bgs/orange.jpg',
  '../images/joy-bgs/yellow.jpg',
  '../images/joy-bgs/green.jpg',
  '../images/joy-bgs/blue.jpg',
  '../images/joy-bgs/purple.jpg'
];

var joyActiveBackground = joyAllBackgrounds[0];

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
    joyActiveBackground = joyAllBackgrounds[0];

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
    joyActiveBackground = joyAllBackgrounds[1];

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
    joyActiveBackground = joyAllBackgrounds[2];

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
    joyActiveBackground = joyAllBackgrounds[3];

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
    joyActiveBackground = joyAllBackgrounds[4];

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
    joyActiveBackground = joyAllBackgrounds[5];


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
    joyActiveBackground = joyAllBackgrounds[6];
  }

  // Sends stored colors for each template to local storage
  localStorage['joyColors'] = JSON.stringify(joyStoreColor);
  localStorage['jeffColors'] = JSON.stringify(jeffStoreColor);
  localStorage['joyBackground'] = joyActiveBackground;
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

// Pulls stored colors and backgrounds for each template from local storage, and applies the correct color function depending on which template is active
if (localStorage.colorStored) {
  joyStoreColor = JSON.parse(localStorage['joyColors']);
  jeffStoreColor = JSON.parse(localStorage['jeffColors']);
  joyActiveBackground = localStorage['joyBackground'];
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    joyChangeColor(joyStoreColor[0], joyStoreColor[1], joyStoreColor[2]);
  }
  if (activeTemplate === allTemplates[3]) {
    jeffChangeColor(jeffStoreColor[0], jeffStoreColor[1]);
  }
}

// Colors Event Listeners
document.getElementById('colorsForm').addEventListener('submit', applyColors);




/* ==================================== Backgrounds ==================================== */

var section = document.querySelectorAll('section');

function applyBackgrounds() {
  event.preventDefault();
  var possibleBackgrounds = document.getElementsByName('backgroundsRadioButton');

  for (var bg = 0; bg < joyAllBackgrounds.length; bg++) {
    if (possibleBackgrounds[0].checked === true) {
      // If yes background on Joy's templates
      if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
        wrapper.style.background = 'url("' + joyActiveBackground + '") fixed;';
        for (var k = 0; k < section.length; k++) {
          section[k].style.opacity = '0.8';
          section[k].style.background = '#000';
        }
      }
    }
    else if (possibleBackgrounds[1].checked === true) {
      // If no background on Joy's templates
      if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
        wrapper.style.background = 'linear-gradient(' + joyStoreColor[0] + ', ' + joyStoreColor[1] + ') fixed';
        for (var l = 0; l < section.length; l++) {
          section[l].style.opacity = '1.0';
          section[l].style.background = 'inherit';
        }
      }
    }
  }
}


// Backgrounds Event Listeners
backgroundsForm.addEventListener('submit', applyBackgrounds);

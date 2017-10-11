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
var activeTab = document.getElementsByClassName(' active');
var tabContent = document.getElementsByClassName('tabcontent');
var body = document.querySelector('body');
var section = document.querySelectorAll('section');
var joyStoreColor, jeffStoreColor, sethStoreColor;
var stylesheets = document.querySelectorAll('link');
var activeTemplate;

var allTemplates = [
  'css/style.css',
  'css/joy-style.css',
  'css/seth-style.css',
  'css/jeff-style.css'
];

var joyAllBackgrounds = [
  'images/joy-bgs/default.jpg',
  'images/joy-bgs/red.jpg',
  'images/joy-bgs/orange.jpg',
  'images/joy-bgs/yellow.jpg',
  'images/joy-bgs/green.jpg',
  'images/joy-bgs/blue.jpg',
  'images/joy-bgs/purple.jpg'
];

var joyActiveBackground = joyAllBackgrounds[0];


/* ==================================== TEMPLATES ==================================== */

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

// Seth Nav
function openTab (evt, navTab) {
  // Declare all variables
  var i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  // Get all elements with class='tablinks' and remove the class 'active'
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', ' ');
    tablinks[i].id = ' ';
    // tabcontent[i].id = ' ';
  }
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(navTab).style.display = 'block';
  evt.currentTarget.className += ' active';
  evt.currentTarget.id = 'activeTab';
  // navTab.id = "activeContent";
}

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
    colorsSection.style.animationName = 'slide-down';
    colorsSection.style.animationDuration = '1.5s';
  }
}

// Button: going back to templates section from color section
function colorsPrevious() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    templatesSection.style.display = 'block';
    colorsSection.style.display = 'none';
    templatesSection.style.animationName = 'slide-down';
    templatesSection.style.animationDuration = '1.5s';
  }
}

// Button: going to backgrounds section from color section
function colorsNext() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'block';
    backgroundsSection.style.animationName = 'slide-down';
    backgroundsSection.style.animationDuration = '1.5s';
  }
}

// Button: going from backgrounds section back to color section
function backgroundsPrevious() {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    colorsSection.style.display = 'block';
    backgroundsSection.style.display = 'none';
    colorsSection.style.animationName = 'slide-down';
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

/* ==================================== Colors & Backgrounds ==================================== */


// Global function to call upon clicking apply colors

function applyColors(event) {
  event.preventDefault();
  var possibleColors = document.getElementsByName('colorsRadioButton');

  // Default Color - calls individual color function depending on the active template, then stores the selected colors for each template.
  if (possibleColors[0].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#4ec3d8', '#07a4c1', '#057287');
    }
    if (activeTemplate === allTemplates[2]) {
      sethChangeColor('#2E7C52', '#73AF8F');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#000', '#111');
    }
    joyStoreColor = ['#4ec3d8', '#07a4c1', '#057287'];
    jeffStoreColor = ['#000', '#111'];
    sethStoreColor = ['#2E7C52', '#73AF8F'];
    joyActiveBackground = joyAllBackgrounds[0];

  // Red
  } else if (possibleColors[1].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#d14747', '#a80606', '#870505');
    }
    if (activeTemplate === allTemplates[2]) {
      sethChangeColor('red', 'darkRed');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#BB0000', '#690000');
    }
    joyStoreColor = ['#d14747', '#a80606', '#870505'];
    jeffStoreColor = ['#BB0000', '#690000'];
    sethStoreColor = ['red', 'darkRed'];
    joyActiveBackground = joyAllBackgrounds[1];

  // Orange
  } else if (possibleColors[2].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#efa556', '#c14807', '#A05616');
    }
    if (activeTemplate === allTemplates[2]) {
      sethChangeColor('orange', 'orange');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#D14800', '#D16024');
    }
    joyStoreColor = ['#efa556', '#c14807', '#A05616'];
    jeffStoreColor = ['#D14800', '#D16024'];
    sethStoreColor = ['orange', 'orange'];
    joyActiveBackground = joyAllBackgrounds[2];

  // Yellow
  } else if (possibleColors[3].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#ceaf00', '#876c00', '#82700d');
    }
    if (activeTemplate === allTemplates[2]) {
      sethChangeColor('yellow', 'yellow');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#FFE100', '#DEC300');
    }
    joyStoreColor = ['#ceaf00', '#876c00', '#82700d'];
    jeffStoreColor = ['#FFE100', '#DEC300'];
    sethStoreColor = ['yellow', 'yellow'];
    joyActiveBackground = joyAllBackgrounds[3];

  // Green
  } else if (possibleColors[4].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#009b0f', '#006d01', '#016300');
    }
    if (activeTemplate === allTemplates[2]) {
      sethChangeColor('green', 'green');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#008705', '#006D04');
    }
    joyStoreColor = ['#009b0f', '#006d01', '#016300'];
    jeffStoreColor = ['#008705', '#006D04'];
    sethStoreColor = ['green', 'green'];
    joyActiveBackground = joyAllBackgrounds[4];

  // Blue
  } else if (possibleColors[5].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#0071b2', '#004e7f', '#063451');
    }
    if (activeTemplate === allTemplates[2]) {
      sethChangeColor('blue', 'blue');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#3D5091', '#001991');
    }
    joyStoreColor = ['#0071b2', '#004e7f', '#063451'];
    jeffStoreColor = ['#3D5091', '#001991'];
    sethStoreColor = ['blue', 'blue'];
    joyActiveBackground = joyAllBackgrounds[5];

  // Purple
  } else if (possibleColors[6].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#a55697', '#821865', '#7c2969');
    }
    if (activeTemplate === allTemplates[2]) {
      sethChangeColor('purple', 'purple');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#680078', '#9A00B8');
    }
    joyStoreColor = ['#a55697', '#821865', '#7c2969'];
    jeffStoreColor = ['#680078', '#9A00B8'];
    sethStoreColor = ['purple', 'purple'];
    joyActiveBackground = joyAllBackgrounds[6];
  }

  // Backgrounds
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    joyCheckBackground();
  }

  // Sends stored colors for each template to local storage
  localStorage['joyColors'] = JSON.stringify(joyStoreColor);
  localStorage['jeffColors'] = JSON.stringify(jeffStoreColor);
  localStorage['sethColors'] = JSON.stringify(sethStoreColor);
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
  document.getElementById('headerNext').style.textShadow = '2px 2px 3px ' + shadow;
  document.getElementById('templatesHeader').style.textShadow = '2px 2px 4px ' + shadow;
  document.getElementById('colorsHeader').style.textShadow = '2px 2px 4px ' + shadow;
  document.getElementById('aboutUsHeader').style.textShadow = '2px 2px 4px ' + shadow;
  templatesSection.style.textShadow = '1px 1px 3px ' + shadow;
  colorsSection.style.textShadow = '1px 1px 3px ' + shadow;
  aboutUsSection.style.textShadow = '1px 1px 3px ' + shadow;
}

function sethChangeColor(background, tabs) {
  body.style.backgroundColor = background;
  document.getElementById('activeTab').style.backgroundColor = tabs;
  document.getElementById('navTab1').style.backgroundColor = tabs;
  document.getElementById('navTab2').style.backgroundColor = tabs;
  document.getElementById('navTab3').style.backgroundColor = tabs;
}

function jeffChangeColor(gradientA, gradientB) {
  document.querySelector('body').style.background = 'linear-gradient(' + gradientA + ', ' + gradientB + ')';
}

// Background Functions

function applyBackgrounds() {
  event.preventDefault();
  var possibleBackgrounds = document.getElementsByName('backgroundsRadioButton');

  for (var bg = 0; bg < joyAllBackgrounds.length; bg++) {
    if (possibleBackgrounds[0].checked === true) {
      localStorage.backgroundStored = 'true';
      // If yes background on Joy's templates
      if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
        joyYesBackground();
      }
    }
    else if (possibleBackgrounds[1].checked === true) {
      localStorage.backgroundStored = 'false';
      // If no background on Joy's templates
      if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
        joyNoBackground();
      }
    }
  }
}

function joyYesBackground() {
  wrapper.style.background = 'url("' + joyActiveBackground + '")';
  wrapper.style.backgroundSize = 'cover';
  wrapper.style.backgroundAttachment = 'fixed';
  for (var k = 0; k < section.length; k++) {
    section[k].style.opacity = '0.8';
    section[k].style.background = '#000';
  }
}

function joyNoBackground() {
  wrapper.style.background = 'linear-gradient(' + joyStoreColor[0] + ', ' + joyStoreColor[1] + ')';
  wrapper.style.backgroundSize = 'cover';
  wrapper.style.backgroundAttachment = 'fixed';
  for (var l = 0; l < section.length; l++) {
    section[l].style.opacity = '1.0';
    section[l].style.background = 'inherit';
  }
}

function joyCheckBackground() {
  if (localStorage.backgroundStored === 'true') {
    joyYesBackground();
  } else { joyNoBackground(); }
}

// Pulls stored colors and backgrounds for each template from local storage, and applies the correct color function depending on which template is active
if (localStorage.colorStored) {
  joyStoreColor = JSON.parse(localStorage['joyColors']);
  jeffStoreColor = JSON.parse(localStorage['jeffColors']);
  sethStoreColor = JSON.parse(localStorage['sethColors']);
  joyActiveBackground = localStorage['joyBackground'];
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    joyChangeColor(joyStoreColor[0], joyStoreColor[1], joyStoreColor[2]);
    joyCheckBackground();
  }
  if (activeTemplate === allTemplates[2]) {
    sethChangeColor(sethStoreColor[0], sethStoreColor[1]);
  }
  if (activeTemplate === allTemplates[3]) {
    jeffChangeColor(jeffStoreColor[0], jeffStoreColor[1]);
  }
}

// Colors Event Listeners
document.getElementById('colorsForm').addEventListener('submit', applyColors);
// Backgrounds Event Listeners
backgroundsForm.addEventListener('submit', applyBackgrounds);

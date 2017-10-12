'use strict';

var header = document.querySelector('header');
var templatesSection = document.getElementById('templatesSection');
var colorsSection = document.getElementById('colorsSection');
var backgroundsSection = document.getElementById('backgroundsSection');
var aboutUsSection = document.getElementById('aboutUsSection');
var homeLink = document.getElementById('homeLink');
var aboutUsLink = document.getElementById('aboutUsLink');
var chooseLayoutLink = document.getElementById('chooseLayoutLink');
var sethHomeLink = document.getElementById('sethHomeLink');
var sethAboutUsLink = document.getElementById('sethAboutUsLink');
var sethChooseLayoutLink = document.getElementById('sethChooseLayoutLink');
var wrapper = document.getElementById('wrapper');
var body = document.querySelector('body');
var section = document.querySelectorAll('section');
var joyStoreColor, jeffStoreColor, sethStoreColor;
var stylesheets = document.querySelectorAll('link');
var activeTemplate, joyTemplate, sethTemplate, jeffTemplate;

var allTemplates = [
  'css/style.css',
  'css/joy-style.css',
  'css/seth-style.css',
  'css/jeff-style.css'
];

var joyColors = [ // gradient1, gradient2, shadow
  ['#4ec3d8', '#07a4c1', '#057287'],
  ['#d14747', '#a80606', '#870505'],
  ['#efa556', '#c14807', '#A05616'],
  ['#ceaf00', '#876c00', '#82700d'],
  ['#009b0f', '#006d01', '#016300'],
  ['#0071b2', '#004e7f', '#063451'],
  ['#a55697', '#821865', '#7c2969'],
];

var sethColors = [ // background, tabs
  ['#a88051', '#F9DAB8'],
  ['#ff4d4d', '#F1C8BF'],
  ['#f98d53', '#f8dab9'],
  ['#ffdb4d', '#f8e7b9'],
  ['#75d776', '#e2ebc7'],
  ['#4dbbff', '#cadbe8'],
  ['#e368c2', '#D1C7E9'],
];

var jeffColors = [ // gradientA, gradientB
  ['#49494C', '#666F78'],
  ['#690000', '#BB0000'],
  ['#D14800', '#D16024'],
  ['#998700', '#DEC300'],
  ['#008705', '#006D04'],
  ['#3D5091', '#001991'],
  ['#680078', '#9A00B8'],
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

var jeffAllBackgrounds = [
  'images/jeff-bgs/default.png',
  'images/jeff-bgs/red.png',
  'images/jeff-bgs/orange.png',
  'images/jeff-bgs/yellow.png',
  'images/jeff-bgs/green.png',
  'images/jeff-bgs/blue.png',
  'images/jeff-bgs/purple.png'
];

var sethAllBackgrounds = [
  'images/seth-bgs/default.jpg',
  'images/seth-bgs/red.jpg',
  'images/seth-bgs/orange.jpg',
  'images/seth-bgs/yellow.jpg',
  'images/seth-bgs/green.jpg',
  'images/seth-bgs/blue.jpg',
  'images/seth-bgs/purple.jpg'
];

var joyActiveBackground = joyAllBackgrounds[0];
var sethActiveBackground = sethAllBackgrounds[0];
var jeffActiveBackground = jeffAllBackgrounds[0];

/* ==================================== TEMPLATES FUNCTION ==================================== */

// Loops through template radio buttons. If a button is checked, change the stylesheet accordingly and store the value to local storage. Set local storage 'startAtTemplate' and 'templateStored' to 'true' and reload page.
function applyTemplates(event) {
  event.preventDefault();
  var possibleTemplates = document.getElementsByName('templatesRadioButton');
  localStorage.startAtTemplate = 'true';
  for (var radio = 0; radio < allTemplates.length; radio++) {
    if (possibleTemplates[radio].checked === true) {
      stylesheets[1].href = allTemplates[radio];
      localStorage['template'] = allTemplates[radio];
      localStorage.templateStored = 'true';
      window.location.reload('true');
    }
  }
}

/* =============================== COLORS & BACKGROUND FUNCTIONS =============================== */

// Global function to call upon clicking apply colors
function applyColors(event) {
  event.preventDefault();
  var possibleColors = document.getElementsByName('colorsRadioButton');

  // Calls individual color function depending on the active template, then stores the selected colors and applicable background for each template.
  for (var i = 0; i < possibleColors.length; i++) {
    if (possibleColors[i].checked === true) {
      if (joyTemplate) {
        joyChangeColor(joyColors[i]);
      }
      if (sethTemplate) {
        sethChangeColor(sethColors[i]);
      }
      if (jeffTemplate) {
        jeffChangeColor(jeffColors[i]);
      }
      joyStoreColor = joyColors[i];
      sethStoreColor = sethColors[i];
      jeffStoreColor = jeffColors[i];
      joyActiveBackground = joyAllBackgrounds[i];
      sethActiveBackground = sethAllBackgrounds[i];
      jeffActiveBackground = jeffAllBackgrounds[i];
    }
  }

  // Checks if background option is set to yes, and applies background if so.
  if (joyTemplate) {
    joyCheckBackground();
  }
  if (sethTemplate) {
    sethCheckBackground();
  }
  if (jeffTemplate) {
    jeffCheckBackground();
  }

  // Sends stored colors and background for each template to local storage
  localStorage['joyColors'] = JSON.stringify(joyStoreColor);
  localStorage['jeffColors'] = JSON.stringify(jeffStoreColor);
  localStorage['sethColors'] = JSON.stringify(sethStoreColor);
  localStorage['joyBackground'] = joyActiveBackground;
  localStorage['jeffBackground'] = jeffActiveBackground;
  localStorage['sethBackground'] = sethActiveBackground;
  localStorage.colorStored = 'true';
}

// Individualized color functions

function joyChangeColor(joyArray) {
  wrapper.style.background = 'linear-gradient(' + joyArray[0] + ', ' + joyArray[1] + ') fixed';
  document.querySelector('h1').style.textShadow = '2px 2px 4px ' + joyArray[2];
  document.getElementById('headerInstructions').style.textShadow = '2px 2px 3px ' + joyArray[2];
  document.getElementById('headerNext').style.textShadow = '2px 2px 3px ' + joyArray[2];
  document.getElementById('templatesHeader').style.textShadow = '2px 2px 4px ' + joyArray[2];
  document.getElementById('colorsHeader').style.textShadow = '2px 2px 4px ' + joyArray[2];
  document.getElementById('aboutUsHeader').style.textShadow = '2px 2px 4px ' + joyArray[2];
  templatesSection.style.textShadow = '1px 1px 3px ' + joyArray[2];
  colorsSection.style.textShadow = '1px 1px 3px ' + joyArray[2];
  aboutUsSection.style.textShadow = '1px 1px 3px ' + joyArray[2];
}

function sethChangeColor(sethArray) {
  body.style.backgroundColor = sethArray[0];
  document.getElementById('navTab1').style.backgroundColor = sethArray[1];
  document.getElementById('navTab2').style.backgroundColor = sethArray[1];
  document.getElementById('navTab3').style.backgroundColor = sethArray[1];
  sethChooseLayoutLink.style.background = sethArray[1];
}

function jeffChangeColor(jeffArray) {
  body.style.background = 'linear-gradient(' + jeffArray[0] + ', ' + jeffArray[1] + ')';
}

// Global function called when applying background

function applyBackgrounds() {
  event.preventDefault();
  var possibleBackgrounds = document.getElementsByName('backgroundsRadioButton');

  for (var bg = 0; bg < joyAllBackgrounds.length; bg++) {
    if (possibleBackgrounds[0].checked === true) {
      localStorage.backgroundStored = 'true';
      // If yes background on Joy's templates
      if (joyTemplate) {
        joyYesBackground();
      }
      // If yes background on Seth's template
      if (sethTemplate) {
        sethYesBackground();
      }
      // if yes background on Jeff's template
      if (jeffTemplate) {
        jeffYesBackground();
      }
    }
    else if (possibleBackgrounds[1].checked === true) {
      localStorage.backgroundStored = 'false';
      // If no background on Joy's templates
      if (joyTemplate) {
        joyNoBackground();
      }
      // If no background on Seth's template
      if (sethTemplate) {
        sethNoBackground();
      }
      // If no background on Jeff's template
      if (jeffTemplate) {
        jeffNoBackground();
      }
    }
  }
}

// Individual Background Functions

function joyYesBackground() {
  wrapper.style.background = 'url("' + joyActiveBackground + '") fixed';
  wrapper.style.backgroundSize = 'cover';
  for (var k = 0; k < section.length; k++) {
    section[k].style.opacity = '0.8';
    section[k].style.background = '#000';
  }
}

function joyNoBackground() {
  wrapper.style.background = 'linear-gradient(' + joyStoreColor[0] + ', ' + joyStoreColor[1] + ') fixed';
  wrapper.style.backgroundSize = 'cover';
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

function sethYesBackground() {
  body.style.background = 'url("' + sethActiveBackground + '") fixed';
  body.style.backgroundSize = 'cover';
}

function sethNoBackground() {
  body.style.background = ' ';
  body.style.background = sethStoreColor[0];
}

function sethCheckBackground() {
  if (localStorage.backgroundStored === 'true') {
    sethYesBackground();
  } else { sethNoBackground(); }
}

function jeffYesBackground() {
  body.style.background = 'url("' + jeffActiveBackground + '") fixed';
  body.style.backgroundSize = 'cover';
}

function jeffNoBackground() {
  jeffChangeColor(jeffStoreColor[0], jeffStoreColor[1]);
}

function jeffCheckBackground() {
  if (localStorage.backgroundStored === 'true') {
    jeffYesBackground();
  } else { jeffNoBackground(); }
}

/* ================================== NAV AND BUTTONS FUNCTIONS ================================== */

// Nav: Home Link
function goHome() {
  if (jeffTemplate) {
    window.location.href = '#wrapper';
  }
  else if (sethTemplate) {
    document.getElementById('navTab1').style.display = 'block';
    document.getElementById('navTab2').style.display = 'none';
    document.getElementById('navTab3').style.display = 'none';
    templatesSection.style.display = 'none';
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    sethHomeLink.style.background = sethStoreColor[1];
    sethAboutUsLink.style.background = '#f1f1f1';
    sethChooseLayoutLink.style.background = '#f1f1f1';
  }
  else if (joyTemplate) {
    header.style.display = 'block';
    templatesSection.style.display = 'none';
    colorsSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    backgroundsSection.style.display = 'none';
    header.style.animationName = 'slide-down';
    header.style.animationDuration = '1.5s';
    homeLink.style.backgroundColor = '#333';
    aboutUsLink.style.backgroundColor = '#000';
    chooseLayoutLink.style.backgroundColor = '#000';
    homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
    aboutUsLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    chooseLayoutLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  }
}

// Nav: About Us Link
function aboutUs() {
  if (jeffTemplate) {
    window.location.href = '#aboutUsSection';
  }
  else if (sethTemplate) {
    document.getElementById('navTab1').style.display = 'none';
    document.getElementById('navTab2').style.display = 'block';
    document.getElementById('navTab3').style.display = 'none';
    templatesSection.style.display = 'none';
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'none';
    aboutUsSection.style.display = 'inline';
    sethAboutUsLink.style.background = sethStoreColor[1];
    sethChooseLayoutLink.style.background = '#f1f1f1';
    sethHomeLink.style.background = '#f1f1f1';
  }
  else if (joyTemplate) {
    aboutUsSection.style.display = 'block';
    header.style.display = 'none';
    templatesSection.style.display = 'none';
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'none';
    aboutUsSection.style.animationName = 'slide-down';
    aboutUsSection.style.animationDuration = '1.5s';
    homeLink.style.backgroundColor = '#000';
    aboutUsLink.style.backgroundColor = '#333';
    chooseLayoutLink.style.backgroundColor = '#000';
    homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    aboutUsLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
    chooseLayoutLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  }
}

// Nav: Choose Layout Link
function loadTemplates() {
  if (jeffTemplate) {
    window.location.href = '#templatesSection';
  }
  else if (sethTemplate) {
    document.getElementById('navTab1').style.display = 'none';
    document.getElementById('navTab2').style.display = 'none';
    document.getElementById('navTab3').style.display = 'block';
    templatesSection.style.display = 'inline';
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    sethChooseLayoutLink.style.background = sethStoreColor[1];
    sethAboutUsLink.style.background = '#f1f1f1';
    sethHomeLink.style.background = '#f1f1f1';
  }
  else if (joyTemplate) {
    templatesSection.style.display = 'block';
    header.style.display = 'none';
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    templatesSection.style.animationName = 'slide-down';
    templatesSection.style.animationDuration = '1.5s';
    homeLink.style.backgroundColor = '#000';
    aboutUsLink.style.backgroundColor = '#000';
    chooseLayoutLink.style.backgroundColor = '#333';
    homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    aboutUsLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    chooseLayoutLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
  }
}

// Button: going to colors section from the templates section
function templatesNext() {
  if (jeffTemplate) {
    window.location.href = '#colorsSection';
  } else {
    colorsSection.style.display = 'block';
    templatesSection.style.display = 'none';
    colorsSection.style.animationName = 'slide-down';
    colorsSection.style.animationDuration = '1.5s';
  }
}

// Button: going back to templates section from color section
function colorsPrevious() {
  if (jeffTemplate) {
    window.location.href = '#templatesSection';
  } else {
    templatesSection.style.display = 'block';
    colorsSection.style.display = 'none';
    templatesSection.style.animationName = 'slide-down';
    templatesSection.style.animationDuration = '1.5s';
  }
}

// Button: going to backgrounds section from color section
function colorsNext() {
  if (jeffTemplate) {
    window.location.href = '#backgroundsSection';
  } else {
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'block';
    backgroundsSection.style.animationName = 'slide-down';
    backgroundsSection.style.animationDuration = '1.5s';
  }
}

// Button: going from backgrounds section back to color section
function backgroundsPrevious() {
  if (jeffTemplate) {
    window.location.href = '#colorsSection';
  } else {
    colorsSection.style.display = 'block';
    backgroundsSection.style.display = 'none';
    colorsSection.style.animationName = 'slide-down';
    colorsSection.style.animationDuration = '1.5s';
  }
}

/* =============================== STUFF THAT HAPPENS WHEN PAGE LOADS =============================== */

// Checks local storage - if 'templatesStored' is true, then loads it to page. If not, then use default template.
if (localStorage.templateStored === 'true') {
  activeTemplate = localStorage['template'];
  stylesheets[1].href = activeTemplate;
} else {
  activeTemplate = allTemplates[0];
}

joyTemplate = activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1];
sethTemplate = activeTemplate === allTemplates[2];
jeffTemplate = activeTemplate === allTemplates[3];

// Pulls stored colors and backgrounds for each template from local storage, and applies the correct color function depending on which template is active
if (localStorage.colorStored) {
  joyStoreColor = JSON.parse(localStorage['joyColors']);
  jeffStoreColor = JSON.parse(localStorage['jeffColors']);
  sethStoreColor = JSON.parse(localStorage['sethColors']);
  joyActiveBackground = localStorage['joyBackground'];
  sethActiveBackground = localStorage['sethBackground'];
  jeffActiveBackground = localStorage['jeffBackground'];
  if (joyTemplate) {
    joyChangeColor(joyStoreColor);
    joyCheckBackground();
  }
  if (sethTemplate) {
    sethChangeColor(sethStoreColor);
    sethCheckBackground();
  }
  if (jeffTemplate) {
    jeffChangeColor(jeffStoreColor);
    jeffCheckBackground();
  }
} else {
  joyStoreColor = joyColors[0];
  jeffStoreColor = jeffColors[0];
  sethStoreColor = sethColors[0];
}

/* Checks local storage to see if the page should start at template page (after user presses apply template) or at the header page (on reload or new session).
If 'startAtTemplate' is currently true, then sets it to false. That way, when the applyTemplates function is called, it is set to true. If it isn't called, it remains false and the page will load on header instead of templates section. */

if (localStorage.startAtTemplate === 'true') {
  if (joyTemplate) {
    header.style.display = 'none';
    templatesSection.style.display = 'block';
  }
  else if (sethTemplate) {
    sethChooseLayoutLink.style.background = sethStoreColor[1];
  }
  localStorage.startAtTemplate = false;
} else if (localStorage.startAtTemplate === 'false'){
  if (joyTemplate) {
    header.style.display = 'block';
    templatesSection.style.display = 'none';
  }
  else if (sethTemplate) {
    document.getElementById('navTab1').style.display = 'block';
    document.getElementById('navTab2').style.display = 'none';
    document.getElementById('navTab3').style.display = 'none';
    templatesSection.style.display = 'none';
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    sethHomeLink.style.background = sethStoreColor[1];
    sethAboutUsLink.style.background = '#f1f1f1';
    sethChooseLayoutLink.style.background = '#f1f1f1'; }
}

/* ==================================== EVENT LISTENERS ==================================== */

// Navigation Event Listeners
homeLink.addEventListener('click', goHome);
aboutUsLink.addEventListener('click', aboutUs);
chooseLayoutLink.addEventListener('click', loadTemplates);
sethHomeLink.addEventListener('click', goHome);
sethAboutUsLink.addEventListener('click', aboutUs);
sethChooseLayoutLink.addEventListener('click', loadTemplates);
document.getElementById('headerNext').addEventListener('click', loadTemplates);
document.getElementById('templatesNextButton').addEventListener('click', templatesNext);
document.getElementById('colorsPreviousButton').addEventListener('click', colorsPrevious);
document.getElementById('colorsNextButton').addEventListener('click', colorsNext);
document.getElementById('backgroundsPreviousButton').addEventListener('click', backgroundsPrevious);
document.getElementById('getCodeButton').addEventListener('click', function() { window.open('code.html', '_blank'); });

// Apply Templates Event Listener
document.getElementById('templatesForm').addEventListener('submit', applyTemplates);

// Apply Colors Event Listeners
document.getElementById('colorsForm').addEventListener('submit', applyColors);

// Apply Background Event Listeners
backgroundsForm.addEventListener('submit', applyBackgrounds);

// Joy's Nav Mouseovers
if (joyTemplate) {
  homeLink.addEventListener('mouseover', function() { this.style.backgroundColor = joyStoreColor[2]; });
  aboutUsLink.addEventListener('mouseover', function() { this.style.backgroundColor = joyStoreColor[2]; });
  chooseLayoutLink.addEventListener('mouseover', function() { this.style.backgroundColor = joyStoreColor[2]; });
  homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
  aboutUsLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  chooseLayoutLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  if (templatesSection.style.display === 'block') {
    chooseLayoutLink.style.backgroundColor = '#333';
    homeLink.style.backgroundColor = '#000';
    homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    chooseLayoutLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
  }
}

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

var jeffAllBackgrounds = [
  'images/jeff-bgs/default.jpg',
  'images/jeff-bgs/red.jpg',
  'images/jeff-bgs/orange.jpg',
  'images/jeff-bgs/yellow.jpg',
  'images/jeff-bgs/green.jpg',
  'images/jeff-bgs/blue.jpg',
  'images/jeff-bgs/purple.jpg'
];

var sethAllBackgrounds = [
  'images/jeff-bgs/default.jpg',
  'images/jeff-bgs/red.jpg',
  'images/jeff-bgs/orange.jpg',
  'images/jeff-bgs/yellow.jpg',
  'images/jeff-bgs/green.jpg',
  'images/jeff-bgs/blue.jpg',
  'images/jeff-bgs/purple.jpg'
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
      stylesheets[2].href = allTemplates[radio];
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

  // Default Color - calls individual color function depending on the active template, then stores the selected colors and applicable background for each template.
  if (possibleColors[0].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#4ec3d8', '#07a4c1', '#057287');
    }
    if (activeTemplate === allTemplates[2]) {
      sethChangeColor('#2E7C52', '#73AF8F');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#49494C', '#666F78');
    }
    joyStoreColor = ['#4ec3d8', '#07a4c1', '#057287'];
    jeffStoreColor = ['#49494C', '#666F78'];
    sethStoreColor = ['#2E7C52', '#73AF8F'];
    joyActiveBackground = joyAllBackgrounds[0];
    jeffActiveBackground = jeffAllBackgrounds[0];
    sethActiveBackground = sethAllBackgrounds[0];

  // Red
  } else if (possibleColors[1].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#d14747', '#a80606', '#870505');
    }
    if (activeTemplate === allTemplates[2]) {
      sethChangeColor('#a80606', '#d14747');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#690000', '#BB0000');
    }
    joyStoreColor = ['#d14747', '#a80606', '#870505'];
    jeffStoreColor = ['#690000', '#BB0000'];
    sethStoreColor = ['#a80606', '#d14747'];
    joyActiveBackground = joyAllBackgrounds[1];
    jeffActiveBackground = jeffAllBackgrounds[1];
    sethActiveBackground = sethAllBackgrounds[1];

  // Orange
  } else if (possibleColors[2].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#efa556', '#c14807', '#A05616');
    }
    if (activeTemplate === allTemplates[2]) {
      sethChangeColor('#c14807', '#efa556');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#D14800', '#D16024');
    }
    joyStoreColor = ['#efa556', '#c14807', '#A05616'];
    jeffStoreColor = ['#D14800', '#D16024'];
    sethStoreColor = ['#c14807', '#efa556'];
    joyActiveBackground = joyAllBackgrounds[2];
    jeffActiveBackground = jeffAllBackgrounds[2];
    sethActiveBackground = sethAllBackgrounds[2];

  // Yellow
  } else if (possibleColors[3].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#ceaf00', '#876c00', '#82700d');
    }
    if (activeTemplate === allTemplates[2]) {
      sethChangeColor('#876c00', '#ceaf00');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#998700', '#DEC300');
    }
    joyStoreColor = ['#ceaf00', '#876c00', '#82700d'];
    jeffStoreColor = ['#998700', '#DEC300'];
    sethStoreColor = ['#876c00', '#ceaf00'];
    joyActiveBackground = joyAllBackgrounds[3];
    jeffActiveBackground = jeffAllBackgrounds[3];
    sethActiveBackground = sethAllBackgrounds[3];

  // Green
  } else if (possibleColors[4].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#009b0f', '#006d01', '#016300');
    }
    if (activeTemplate === allTemplates[2]) {
      sethChangeColor('#006d01', '#009b0f');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#008705', '#006D04');
    }
    joyStoreColor = ['#009b0f', '#006d01', '#016300'];
    jeffStoreColor = ['#008705', '#006D04'];
    sethStoreColor = ['#006d01', '#009b0f'];
    joyActiveBackground = joyAllBackgrounds[4];
    jeffActiveBackground = jeffAllBackgrounds[4];
    sethActiveBackground = sethAllBackgrounds[4];

  // Blue
  } else if (possibleColors[5].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#0071b2', '#004e7f', '#063451');
    }
    if (activeTemplate === allTemplates[2]) {
      sethChangeColor('#004e7f', '#0071b2');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#3D5091', '#001991');
    }
    joyStoreColor = ['#0071b2', '#004e7f', '#063451'];
    jeffStoreColor = ['#3D5091', '#001991'];
    sethStoreColor = ['#004e7f', '#0071b2'];
    joyActiveBackground = joyAllBackgrounds[5];
    jeffActiveBackground = jeffAllBackgrounds[5];
    sethActiveBackground = sethAllBackgrounds[5];

  // Purple
  } else if (possibleColors[6].checked === true) {
    if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
      joyChangeColor('#a55697', '#821865', '#7c2969');
    }
    if (activeTemplate === allTemplates[2]) {
      sethChangeColor('#821865', '#a55697');
    }
    if (activeTemplate === allTemplates[3]) {
      jeffChangeColor('#680078', '#9A00B8');
    }
    joyStoreColor = ['#a55697', '#821865', '#7c2969'];
    jeffStoreColor = ['#680078', '#9A00B8'];
    sethStoreColor = ['#821865', '#a55697'];
    joyActiveBackground = joyAllBackgrounds[6];
    jeffActiveBackground = jeffAllBackgrounds[6];
    sethActiveBackground = sethAllBackgrounds[6];
  }

  // Backgrounds
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    joyCheckBackground();
  }

  if (activeTemplate === allTemplates[2]) {
    sethCheckBackground();
  }

  if (activeTemplate === allTemplates[3]) {
    jeffCheckBackground();
  }

  // Sends stored colors for each template to local storage
  localStorage['joyColors'] = JSON.stringify(joyStoreColor);
  localStorage['jeffColors'] = JSON.stringify(jeffStoreColor);
  localStorage['sethColors'] = JSON.stringify(sethStoreColor);
  localStorage['joyBackground'] = joyActiveBackground;
  localStorage['jeffBackground'] = jeffActiveBackground;
  localStorage['sethBackground'] = sethActiveBackground;
  localStorage.colorStored = 'true';
}

// Individualized color functions

function joyChangeColor(gradient1, gradient2, shadow) {
  wrapper.style.background = 'linear-gradient(' + gradient1 + ', ' + gradient2 + ') fixed';
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
  document.getElementById('navTab1').style.backgroundColor = tabs;
  document.getElementById('navTab2').style.backgroundColor = tabs;
  document.getElementById('navTab3').style.backgroundColor = tabs;
  sethChooseLayoutLink.style.background = tabs;
}

function jeffChangeColor(gradientA, gradientB) {
  body.style.background = 'linear-gradient(' + gradientA + ', ' + gradientB + ')';
}

// General Background Function

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
      // If yes background on Seth's template
      if (activeTemplate === allTemplates[2]) {
        sethYesBackground();
      }
      // if yes background on Jeff's template
      if (activeTemplate === allTemplates[3]) {
        jeffYesBackground();
      }
    }
    else if (possibleBackgrounds[1].checked === true) {
      localStorage.backgroundStored = 'false';
      // If no background on Joy's templates
      if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
        joyNoBackground();
      }
      // If no background on Seth's template
      if (activeTemplate === allTemplates[2]) {
        sethNoBackground();
      }
      // If no background on Jeff's template
      if (activeTemplate === allTemplates[3]) {
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
  localStorage['onTemplatesPage'] = 'false';
  if (activeTemplate === allTemplates[3]) {
    window.location.href = '#wrapper';
  }
  else if (activeTemplate === allTemplates[2]) {
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
  else if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    header.style.display = 'block';
    templatesSection.style.display = 'none';
    colorsSection.style.display = 'none';
    aboutUsSection.style.display = 'none';
    backgroundsSection.style.display = 'none';
    header.style.animationName = 'slide-up';
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
  localStorage['onTemplatesPage'] = 'false';
  if (activeTemplate === allTemplates[3]) {
    window.location.href = '#aboutUsSection';
  }
  else if (activeTemplate === allTemplates[2]) {
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
  else if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
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
  localStorage['onTemplatesPage'] = 'true';
  if (activeTemplate === allTemplates[3]) {
    window.location.href = '#templatesSection';
  }
  else if (activeTemplate === allTemplates[2]) {
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
  else if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
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
  if (activeTemplate === allTemplates[3]) {
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
  if (activeTemplate === allTemplates[3]) {
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
  if (activeTemplate === allTemplates[3]) {
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
  if (activeTemplate === allTemplates[3]) {
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
  stylesheets[2].href = activeTemplate;
} else {
  activeTemplate = allTemplates[0];
}

// Pulls stored colors and backgrounds for each template from local storage, and applies the correct color function depending on which template is active
if (localStorage.colorStored) {
  joyStoreColor = JSON.parse(localStorage['joyColors']);
  jeffStoreColor = JSON.parse(localStorage['jeffColors']);
  sethStoreColor = JSON.parse(localStorage['sethColors']);
  joyActiveBackground = localStorage['joyBackground'];
  sethActiveBackground = localStorage['sethBackground'];
  jeffActiveBackground = localStorage['jeffBackground'];
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    joyChangeColor(joyStoreColor[0], joyStoreColor[1], joyStoreColor[2]);
    joyCheckBackground();
  }
  if (activeTemplate === allTemplates[2]) {
    sethChangeColor(sethStoreColor[0], sethStoreColor[1]);
    sethCheckBackground();
  }
  if (activeTemplate === allTemplates[3]) {
    jeffChangeColor(jeffStoreColor[0], jeffStoreColor[1]);
    jeffCheckBackground();
  }
} else {
  joyStoreColor = ['#4ec3d8', '#07a4c1', '#057287'];
  jeffStoreColor = ['#49494C', '#666F78'];
  sethStoreColor = ['#2E7C52', '#73AF8F'];
}

/* Checks local storage to see if the page should start at template page (after user presses apply template) or at the header page (on reload or new session).

If 'startAtTemplate' is currently true, then sets it to false. That way, when the applyTemplates function is called, it is set to true. If it isn't called, it remains false and the page will load on header instead of templates section. */

if (localStorage.startAtTemplate === 'true') {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    header.style.display = 'none';
    templatesSection.style.display = 'block';
  }
  else if (activeTemplate === allTemplates[2]) {
    sethChooseLayoutLink.style.background = sethStoreColor[1];
  }
  localStorage.startAtTemplate = false;
} else if (localStorage.startAtTemplate === 'false'){
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    header.style.display = 'block';
    templatesSection.style.display = 'none';
  }
  else if (activeTemplate === allTemplates[2]) {
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
if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
  homeLink.addEventListener('mouseover', function() { this.style.backgroundColor = joyStoreColor[2]; });
  aboutUsLink.addEventListener('mouseover', function() { this.style.backgroundColor = joyStoreColor[2]; });
  chooseLayoutLink.addEventListener('mouseover', function() { this.style.backgroundColor = joyStoreColor[2]; });
  homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
  aboutUsLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  chooseLayoutLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
}
if (localStorage['onTemplatesPage'] === 'true') {
  if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    chooseLayoutLink.style.backgroundColor = '#333';
    homeLink.style.backgroundColor = '#000';
    homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    chooseLayoutLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
  }
  localStorage['onTemplatesPage'] = 'false';
}

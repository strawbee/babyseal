/* ================================== NAV AND BUTTONS FUNCTIONS ================================== */

// Nav: Home Link
function goHome() {
  window.location.href = '#wrapper';
}

// Nav: About Us Link
function aboutUs() {
  window.location.href = '#aboutUsSection';
}

// Nav: Choose Layout Link
function loadTemplates() {
  window.location.href = '#templatesSection';
}

  // Button: going to colors section from the templates section
function templatesNext() {
  window.location.href = '#colorsSection';
}

// Button: going back to templates section from color section
function colorsPrevious() {
  window.location.href = '#templatesSection';
}

// Button: going to backgrounds section from color section
function colorsNext() {
  window.location.href = '#backgroundsSection';
}

// Button: going from backgrounds section back to color section
function backgroundsPrevious() {
  window.location.href = '#colorsSection';
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

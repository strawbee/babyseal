'use strict';

// CHANGING TEMPLATES
var stylesheets = document.querySelectorAll('link');

var allTemplates = [
  'css/style.css',
  'css/joy-style.css',
  'css/seth-style.css',
  'css/jeff-style.css'
];

function applyTemplates(event) {
  event.preventDefault();
  var possibleTemplates = document.getElementsByName('templatesRadioButton');

  for (var radio = 0; radio < allTemplates.length; radio++) {
    if (possibleTemplates[radio].checked === true) {
      stylesheets[2].href = allTemplates[radio];
      localStorage['template'] = allTemplates[radio];
      localStorage.templateStored = true;
      window.location.reload(true);
    }
  }
}

// Checks Stored Templates
if (localStorage.templateStored) {
  var activeTemplate = localStorage['template'];
  stylesheets[2].href = activeTemplate;
  /*if (activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1]) {
    document.querySelector('header').style.display = 'none';
    document.getElementById('templatesSection').style.display = 'block';
  } else if (activeTemplate === allTemplates[2]) {
    // Insert Seth's stuff
  }*/
} else {
  stylesheets[2].href = allTemplates[0];
}

// Apply Templates Event Listener
document.getElementById('templatesForm').addEventListener('submit', applyTemplates);


// JOY'S SCRIPT

'use strict';
var stylesheets = document.querySelectorAll('link');

function applyTemplates(event) {
  event.preventDefault();
  var possibleTemplates = document.getElementsByName('templatesRadioButton');

  if (possibleTemplates[0].checked === true) {
    stylesheets[2].href = 'css/style.css';
  } else if (possibleTemplates[1].checked === true) {
    stylesheets[2].href = 'css/joy-style.css';
  } else if (possibleTemplates[2].checked === true) {
    stylesheets[2].href = 'css/seth-style.css';
  } else if (possibleTemplates[3].checked === true) {
    stylesheets[2].href = 'css/jeff-style.css';
  }
  document.getElementById('wrapper').style.animationName = 'change-template';
}

document.getElementById('templatesForm').addEventListener('submit', applyTemplates);

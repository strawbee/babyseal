'use strict'
var wrapper = document.getElementById('wrapper');
var activeTab = document.getElementsByClassName(' active');
var tabContent = document.getElementsByClassName('tabcontent');
var header = document.querySelector('header');
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
};
//-----------------------------------------------------------
//            EVENT HANDLERS
//-----------------------------------------------------------
//Teamplate loading is handled by script.js
 function loadNewColor (event) {
  event.preventDefault();
  //take radio button selection and load the chosen color theme!
  var tabClass = document.getElementsByClassName('tabcontent');
  //check ALL radio button
  if (document.getElementById('colorsDefault').checked === true) {
    //change colors of DOM elements to First color theme
    wrapper.style.backgroundColor = '#2E7C52';
    document.getElementById('activeTab').style.backgroundColor = '#73AF8F';
    document.getElementById('navTab1').style.backgroundColor = '#73AF8F';
    document.getElementById('navTab2').style.backgroundColor = '#73AF8F';
    document.getElementById('navTab3').style.backgroundColor = '#73AF8F';
  }else if (document.getElementById('colorsRed').checked === true) {
    //change colors of DOM elements to First color theme
    wrapper.style.backgroundColor = 'red';
    document.getElementById('navTab1').style.backgroundColor = 'darkRed';
    document.getElementById('navTab2').style.backgroundColor = 'darkRed';
    document.getElementById('navTab3').style.backgroundColor = 'darkRed';
    document.getElementById('activeTab').style.backgroundColor = 'darkRed';
  } else if (document.getElementById('colorsOrange').checked === true) {
  //change colors of DOM elements to First color theme
    wrapper.style.backgroundColor = 'orange';
  } else if (document.getElementById('colorsYellow').checked === true) {
  //change colors of DOM elements to First color theme
    wrapper.style.backgroundColor = 'yellow';
  } else if (document.getElementById('colorsGreen').checked === true) {
  //change colors of DOM elements to First color theme
    wrapper.style.backgroundColor = 'green';
  } else if (document.getElementById('colorsBlue').checked === true) {
    //change colors of DOM elements to First color theme
    wrapper.style.backgroundColor = 'blue';
  } else if (document.getElementById('colorsPurple').checked === true) {
  //change colors of DOM elements to First color theme
    wrapper.style.backgroundColor = 'purple';
  }
}
//-----------------------------------------------------------
//            EVENT LISTENERS
//-----------------------------------------------------------
document.getElementById('colorsForm').addEventListener('submit', loadNewColor);

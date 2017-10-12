'use strict';

  var sethHomeLink = document.getElementById('sethHomeLink');
  var sethAboutUsLink = document.getElementById('sethAboutUsLink');
  var sethChooseLayoutLink = document.getElementById('sethChooseLayoutLink');

  /* ================================== NAV AND BUTTONS FUNCTIONS ================================== */

  // Nav: Home Link
  function goHome() {
    document.getElementById('navTab1').style.display = 'block';
    document.getElementById('navTab2').style.display = 'none';
    document.getElementById('navTab3').style.display = 'none';
    sethHomeLink.style.background = '#e2ebc7';
    sethAboutUsLink.style.background = '#f1f1f1';
    sethChooseLayoutLink.style.background = '#f1f1f1';
  }

  // Nav: About Us Link
  function aboutUs() {
    document.getElementById('navTab1').style.display = 'none';
    document.getElementById('navTab2').style.display = 'block';
    document.getElementById('navTab3').style.display = 'none';
    sethAboutUsLink.style.background = '#e2ebc7';
    sethChooseLayoutLink.style.background = '#f1f1f1';
    sethHomeLink.style.background = '#f1f1f1';
  }

  // Nav: Third Link
  function thirdLink() {
    document.getElementById('navTab1').style.display = 'none';
    document.getElementById('navTab2').style.display = 'none';
    document.getElementById('navTab3').style.display = 'block';
    sethChooseLayoutLink.style.background = '#e2ebc7';
    sethAboutUsLink.style.background = '#f1f1f1';
    sethHomeLink.style.background = '#f1f1f1';
  }

  /* ==================================== EVENT LISTENERS ==================================== */

  // Navigation Event Listeners
  sethHomeLink.addEventListener('click', goHome);
  sethAboutUsLink.addEventListener('click', aboutUs);
  sethChooseLayoutLink.addEventListener('click', thirdLink);

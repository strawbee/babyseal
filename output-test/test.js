'use strict';

var header = document.querySelector('header');
var link1Section = document.getElementById('link1Section');
var link2Section = document.getElementById('link2Section');
var homeLink = document.getElementById('homeLink');
var link2 = document.getElementById('link2');
var link1 = document.getElementById('link1');

/* ================================== NAV FUNCTIONS ================================== */

// Nav: Home Link
function goHome() {
  header.style.display = 'block';
  link1Section.style.display = 'none';
  link2Section.style.display = 'none';
  header.style.animationName = 'slide-down';
  header.style.animationDuration = '1.5s';
  homeLink.style.backgroundColor = '#333';
  link2.style.backgroundColor = '#000';
  link1.style.backgroundColor = '#000';
  homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
  link2.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  link1.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
}

// Nav: Second Link
function secondLink() {
  link2Section.style.display = 'block';
  header.style.display = 'none';
  link1Section.style.display = 'none';
  link2Section.style.animationName = 'slide-down';
  link2Section.style.animationDuration = '1.5s';
  homeLink.style.backgroundColor = '#000';
  link2.style.backgroundColor = '#333';
  link1.style.backgroundColor = '#000';
  homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  link2.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
  link1.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
}

// Nav: Third Link
function thirdLink() {
  link1Section.style.display = 'block';
  header.style.display = 'none';
  link2Section.style.display = 'none';
  link1Section.style.animationName = 'slide-down';
  link1Section.style.animationDuration = '1.5s';
  homeLink.style.backgroundColor = '#000';
  link2.style.backgroundColor = '#000';
  link1.style.backgroundColor = '#333';
  homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  link2.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  link1.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
}

/* ==================================== EVENT LISTENERS ==================================== */

// Navigation Event Listeners
homeLink.addEventListener('click', goHome);
link2.addEventListener('click', secondLink);
link1.addEventListener('click', thirdLink);

// Nav Mouseovers
homeLink.addEventListener('mouseover', function() { this.style.backgroundColor = '#057287'; });
link2.addEventListener('mouseover', function() { this.style.backgroundColor = '#057287'; });
link1.addEventListener('mouseover', function() { this.style.backgroundColor = '#057287'; });
homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
link2.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
link1.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });

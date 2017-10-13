'use strict';

var allTemplates = [
  'css/style.css',
  'css/joy-style.css',
  'css/seth-style.css',
  'css/jeff-style.css'
];

if (localStorage.templateStored === 'true') {
  activeTemplate = localStorage['template'];
} else {
  activeTemplate = allTemplates[0];
}

var joyTemplate = activeTemplate === allTemplates[0] || activeTemplate === allTemplates[1];
var joyTemplate1 = activeTemplate === allTemplates[0];
var joyTemplate2 = activeTemplate === allTemplates[1];
var sethTemplate = activeTemplate === allTemplates[2];
var jeffTemplate = activeTemplate === allTemplates[3];

var joyColors = [];
var sethColors = [];
var jeffColors = [];

var joyHTML = document.getElementById('joyHTML');
var sethHTML = document.getElementById('sethHTML');
var jeffHTML = document.getElementById('jeffHTML');
var instructionsNav = document.getElementById('instructionsNav');
var htmlNav = document.getElementById('htmlNav');
var cssNav = document.getElementById('cssNav');
var jsNav = document.getElementById('jsNav');
var instructionsDiv = document.getElementById('instructionsDiv');
var htmlOutput = document.getElementById('htmlOutput');
var cssOutput = document.getElementById('cssOutput');
var jsOutput = document.getElementById('jsOutput');
var cssH3 = document.getElementById('cssH3');
var jsH3 = document.getElementById('jsH3');
var activeTemplate, joyActiveBackground, sethActiveBackground, jeffActiveBackground;

/* =============================== CHECKING LOCAL STORAGE =============================== */

if (localStorage.colorStored === 'true') {
  joyColors = JSON.parse(localStorage['joyColors']);
  sethColors = JSON.parse(localStorage['sethColors']);
  jeffColors = JSON.parse(localStorage['jeffColors']);
} else {
  joyColors = ['#4ec3d8', '#07a4c1', '#057287'];
  sethColors = ['#2E7C52', '#73AF8F'];
  jeffColors = ['#49494C', '#666F78'];
}

if (localStorage.backgroundStored === 'true') {
  joyActiveBackground = 'url(\'https://raw.githubusercontent.com/strawbee/babyseal/master/' + localStorage['joyBackground'] + '\');';
  sethActiveBackground = 'url(\'https://raw.githubusercontent.com/strawbee/babyseal/master/' + localStorage['sethBackground'] + '\');';
  jeffActiveBackground = 'url(\'https://raw.githubusercontent.com/strawbee/babyseal/master/' + localStorage['jeffBackground'] + '\');';
} else {
  joyActiveBackground = 'linear-gradient(' + joyColors[0] + ', ' + joyColors[1] + ') fixed;';
  sethActiveBackground = sethColors[0];
  jeffActiveBackground = 'linear-gradient(' + jeffColors[0] + ', ' + jeffColors[1] + ') fixed;';
}

/* =============================== OUTPUTS RELEVANT HTML CODE =============================== */

if (joyTemplate) {
  joyHTML.style.display = 'block';
  sethHTML.style.display = 'none';
  jeffHTML.style.display = 'none';
} else if (sethTemplate) {
  joyHTML.style.display = 'none';
  sethHTML.style.display = 'block';
  jeffHTML.style.display = 'none';
} else if (jeffTemplate) {
  joyHTML.style.display = 'none';
  sethHTML.style.display = 'none';
  jeffHTML.style.display = 'block';
}

/* =============================== OUTPUTS RELEVANT CSS CODE =============================== */

if (joyTemplate1) {
  cssH3.textContent = 'Template 1 (Top Nav Fixed)';
  document.getElementById('joyCSS1').textContent = `
  @import url("https://fonts.googleapis.com/css?family=Raleway");

  * {
    box-sizing: border-box;
  }

  body {
    background: #000;
    font-family: Raleway, sans-serif;
    font-weight: 100;
    color: #FFF;
    letter-spacing: 0.05em;
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 900;
    color: #eee;
  }

  a:hover {
    color: #fff;
  }

  p {
    margin-bottom: 25px;
  }

  #wrapper {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100vw;
    background: ${joyActiveBackground}
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 0;
  }

  nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: #000;
    text-align: center;
    box-shadow: 0 3px 1px #222;
    z-index: 2;
  }

  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  nav li {
    display: inline-block;
    padding: 30px 45px;
    background: #000;
    font-size: 1.2em;
    text-shadow: 2px 2px 2px #333;
    transition: background 1s;
  }

  nav li:hover {
    background: ${joyColors[2]};
    cursor: auto;
  }

  header {
    display: block;
    margin: 110px 50px 80px 50px;
    padding: 40px;
    line-height: 2em;
    text-align: center;
    cursor: default;
    overflow: auto;
  }

  h1 {
    font-size: 3em;
    font-weight: 900;
    text-shadow: 2px 2px 4px ${joyColors[2]};
    padding: 10px 30px 30px 30px;
    animation-name: h1-animation;
    animation-duration: 3s;
    transition: transform 1s;
    white-space: nowrap;
  }

  h1:hover {
    transform: translate(10px, 0);
  }

  @keyframes h1-animation {
    from { opacity: 0; margin-right: 500px; }
    to { opacity: 1; margin-right: 0; }
  }

  header p {
    text-shadow: 2px 2px 3px ${joyColors[2]};
    margin: 20px;
  }

  header p a:hover {
    cursor: auto;
  }

  section {
    position: relative;
    margin: 110px 50px 80px 50px;
    padding: 40px 50px;
    line-height: 2em;
    text-shadow: 1px 1px 3px ${joyColors[2]};
    overflow: auto;
    border-radius: 20px;
    opacity: 1.0;
    text-align: justify;
  }

  h2 {
    font-size: 3em;
    font-weight: 900;
    text-align: center;
    padding-bottom: 40px;
    text-shadow: 2px 2px 4px ${joyColors[2]};
    animation-name: h2-animation;
    animation-duration: 2.5s;
    transition: transform 1s;
  }

  @keyframes h2-animation {
    from { margin-left: 500px; opacity: 0; }
    to { margin-left: 0px; opacity: 1; }
  }

  h2:hover {
    transform: translate(10px, 0);
  }

  img {
    border: solid 3px #fff;
    border-radius: 5px;
    opacity: 0.8;
    transition: opacity 1s;
    margin: 10px;
    box-shadow: 1px 1px 2px #333;
  }

  img:hover {
    opacity: 1.0;
  }

  button {
    margin: 30px 10px 10px 10px;
    padding: 20px;
    font-size: 1.2em;
    border-radius: 10px;
    border: solid 2px #000;
    background: #fff;
    color: #000;
    box-shadow: 2px 2px 2px #000;
  }

  button:hover {
    border: solid 2px #ededed;
    background: #000;
    color: #fff;
    box-shadow: 1px 1px 2px #333;
  }

  button:focus {
    outline: 0;
  }

  input {
    border: solid 2px #000;
    border-radius: 5px;
    padding: 5px;
  }

  input:focus {
    background: #333;
    outline: 0;
  }

  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #000;
    text-align: center;
    color: #8c8c8c;
    text-shadow: 1px 1px 1px #333;
    box-shadow: 0 -2px 1px #333;
    padding: 20px;
    z-index: 1;
    transition: color 1s;
  }

  footer:hover {
    cursor: default;
    color: #fff;
  }

  #link1Section, #link2Section {
    display: none;
  }

  #homeLink {
    background: #333;
  }

  @keyframes slide-down {
    from { margin-top: -100%; }
    to { margin-top: 110px; }
  }
  `;
}

else if (joyTemplate2) {
  cssH3.textContent = 'Template 2 (Side Nav Fixed)';
  document.getElementById('joyCSS1').textContent = `
  @import url("https://fonts.googleapis.com/css?family=Raleway");

  * {
    box-sizing: border-box;
  }

  body {
    background: #000;
    font-family: Raleway, sans-serif;
    font-weight: 100;
    color: #FFF;
    letter-spacing: 0.05em;
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 900;
    color: #eee;
  }

  a:hover {
    color: #fff;
  }

  p {
    margin-bottom: 25px;
  }

  #wrapper {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100vw;
    background: ${joyActiveBackground}
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 0;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 260px;
    background: #000;
    text-align: center;
    box-shadow: 0 3px 1px #222;
    z-index: 2;
  }

  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  nav li {
    padding: 30px 71px;
    background: #000;
    font-size: 1.2em;
    text-shadow: 2px 2px 2px #333;
    transition: background 1s;
  }

  nav li:hover {
    background: ${joyColors[2]};
    cursor: auto;
  }

  header {
    display: block;
    margin: 30px 30px 30px 290px;
    padding: 30px;
    line-height: 2em;
    text-align: center;
    cursor: default;
    overflow: auto;
  }

  h1 {
    font-size: 3em;
    font-weight: 900;
    text-shadow: 3px 3px 3px ${joyColors[2]};
    padding: 10px 30px 30px 30px;
    animation-name: h1-animation;
    animation-duration: 3s;
    transition: transform 1s;
    white-space: nowrap;
  }

  h1:hover {
    transform: translate(10px, 0);
  }

  @keyframes h1-animation {
    from { opacity: 0; margin-right: 500px; }
    to { opacity: 1; margin-right: 0; }
  }

  header p {
    text-shadow: 2px 2px 3px ${joyColors[2]};
    margin: 20px;
  }

  header p a:hover {
    cursor: auto;
  }


  section {
    position: relative;
    margin: 30px 30px 30px 290px;
    padding: 30px;
    line-height: 2em;
    text-shadow: 1px 1px 3px ${joyColors[2]};
    overflow: auto;
    border-radius: 20px;
    opacity: 1.0;
    text-align: justify;
  }


  h2 {
    font-size: 3em;
    font-weight: 900;
    text-align: center;
    padding-bottom: 40px;
    text-shadow: 2px 2px 4px ${joyColors[2]};
    animation-name: h2-animation;
    animation-duration: 2.5s;
    transition: transform 1s;
  }

  @keyframes h2-animation {
    from { margin-left: 500px; opacity: 0; }
    to { margin-left: 0px; opacity: 1; }
  }

  h2:hover {
    transform: translate(10px, 0);
  }

  img {
    border: solid 3px #fff;
    border-radius: 5px;
    opacity: 0.8;
    transition: opacity 1s;
    margin: 10px;
    box-shadow: 1px 1px 2px #333;
  }

  img:hover {
    opacity: 1.0;
  }

  button {
    margin: 30px 10px 10px 10px;
    padding: 20px;
    font-size: 1.2em;
    border-radius: 10px;
    border: solid 2px #000;
    background: #fff;
    color: #000;
    box-shadow: 2px 2px 2px #000;
  }

  button:hover {
    border: solid 2px #ededed;
    background: #000;
    color: #fff;
    box-shadow: 1px 1px 2px #333;
  }

  button:focus {
    outline: 0;
  }

  input {
    border: solid 2px #000;
    border-radius: 5px;
    padding: 5px;
  }

  input:focus {
    background: #333;
    outline: 0;
  }

  footer {
    position: fixed;
    bottom: 0;*
    width: 100%;
    background: #222;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #333;
    box-shadow: 0 -1px 2px #333;
    padding: 20px 20px 20px 310px;
    z-index: 1;
    opacity: 0;
    transition: opacity 1s;
  }

  footer:hover {
    cursor: default;
    opacity: 1;
  }

  #link1Section, #link2Section {
    display: none;
  }

  #homeLink {
    background: #333;
  }

  @keyframes slide-down {
    from { margin-top: -100%; }
    to { margin-top: 30px; }
  }
  `;
}

else if (sethTemplate) {
  cssH3.textContent = 'Template 3 (Folders)';
  document.getElementById('sethCSS').textContent = `
  /*Style Sheet of Folders Template */
  @import url("https://fonts.googleapis.com/css?family=Raleway");
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  body {
    font-family: Raleway, sans-serif;
    background-color: ${sethActiveBackground}
  }

  #wrapper {
    position: relative;
    height: 100vh;
  }

  header {
    font-size: 35px;
    padding: 20px;
    height: 40px;
    background-color: #001409;
    color: #DDEDE5;
    box-shadow: 0px 3px 3px 3px rgba(10, 10, 10, .8);
    font-family: 'Josefin Sans', sans-serif;
  }

  h1 {
      position: absolute;
      left: -300px;
      -webkit-animation: slide 0.5s forwards;
      -webkit-animation-delay: .25s;
      animation: slide 0.5s forwards;
      animation-delay: .5s;
  }

  h2 {
    margin: 20px;
  }

  @-webkit-keyframes slide {
      100% { left: 0; }
  }

  @keyframes slide {
      100% { left: 50%; }
  }

  nav {
    margin: 50px 0 0 5%;
    width: 90%;
  }

  /* Style the tab */
  nav .tab {
    display: inline-block;
    margin: 0 0 -3px 0;
  }

  #shadowDiv {
    top: 135px;
    width: 90%;
    margin: 0 0 50px 5%;
    box-shadow:  10px 10px 10px rgba(10, 10, 10, .8);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  /* Style the buttons inside the tab */
  .tab button {
    font-size: 20px;
    border-bottom: none;
    background-color: inherit;
    float: left;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    background-color: #f1f1f1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-width: 4px 4px 0 4px;
    border-color: #ccc;
    border-bottom-width: 3px;
    border-bottom-color: #ccc;
  }
  /* Change background color of buttons on hover */
  .tab button:hover {
      background-color: #a9a9a9;
  }
  /* Create an active/current tablink class */
  .tab button.active {
      background-color: ${sethColors[1]};
      border-bottom-color: ${sethColors[1]};
  }
  /* Style the tab content */
  .tabcontent {
    font-size: 18px;
      display: none;
      padding: 20px 20px;
      border: 4px solid #ccc;
      border-top: none;
      background-color: ${sethColors[1]};
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
  }
  /*Display on Default*/
  #navTab1 {
    display: block;
  }

  #sethHomeLink {
    background-color: ${sethColors[1]};
  }

  .tabcontent {
      -webkit-animation: fadeEffect 1.5s;
      animation: fadeEffect 1.5s; /* Fading effect takes 1 second */
  }
  @-webkit-keyframes fadeEffect {
      from {opacity: 0;}
      to {opacity: 1;}
  }
  @keyframes fadeEffect {
      from {opacity: 0;}
      to {opacity: 1;}
  }

  #thirdSection img {
    vertical-align: middle;
    text-align: center;
    width: 15%;
    height: auto;
    margin: 2% 3% 1% 1%;/*20px 30px 10px 10px*/
    border: 3px solid #ccc;
    border-radius: 10px;
    box-shadow: 4px 4px 4px #057287;
  }

  #thirdSection img:hover {
    box-shadow: 4px 4px 4px #222;
  }

  footer {
    font-size: 18px;
    text-align: center;
    padding: 20px;
    margin: 10px auto;
    bottom: 0;
    width: 250px;
    background-color: rgba(255,255,255,0.7);
    box-shadow: 4px 4px 4px rgba(10, 10, 10, .8);
    border-radius: 10px;
    border: 4px solid #ccc;
  }
  `;
}

else if (jeffTemplate) {
  cssH3.textContent = 'Template 4 (Fixed Width Scroll)';
  document.getElementById('jeffCSS').textContent = `
    @import url("https://fonts.googleapis.com/css?family=Raleway");

    html {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background: ${jeffActiveBackground};
      font-family: Raleway;
      line-height: 2em;
      margin: auto;
    }

    #wrapper {
      margin: 50px auto 0 auto;
      width: 720px;
    }

    header {
      display: inline-block;
      float: left;
      font-size: 22px;
      padding: 10px;
      text-align: center;
      width: 71%;
      color: white;
    }

    h1 {
      font-size: 36px;
      margin-bottom: 15px;
      text-shadow: 0 0 1px #630e0e;
    }

    #headerInstructions {
      text-shadow: 0 0 1px #630e0e;
      margin-bottom: 20px;
    }

    a {
      color: #000;
      text-transform: uppercase;
      text-decoration: none;
      background: white;
      padding: 5px;
      border-radius: 7px;
      font-weight: 900;
      font-size: 0.9em;
    }

    a:hover {
      box-shadow: 2px 2px 2px #000;
      background: #eee;
    }

    nav {
      display: inline-block;
      float: right;
      font-size: 17px;
      margin-top: 20px;
      padding-left: 5px;
      width: 26%;
      color: white;
    }

    nav ul li {
      padding: 5px;
    }

    section {
      background: white;
      display: inline-block;
      float: left;
      padding: 15px 10px;
      width: 70%;
      text-align: justify;
    }

     h2 {
       font-size: 2em;
       text-align: center;
    }


    #link2Section {
      border-radius: 25px;
      margin-top: 20px;
    }

    #link2Section p {
      margin-bottom: 25px;
    }

    #link2Section img {
      float: left;
      margin-right: 20px;
      width: 150px;
      height: 150px;
      border: solid 1px;
    }

    #wrapper {
      margin: 50px auto 0 auto;
      width: 720px;
    }

    #link1Section {
      border-radius: 25px;
      margin-top: 20px;
      text-align: left;
    }


    button {
      padding: 10px;
      margin: 15px 5px;
      background: #fff;
      border: solid 3px #000;
      border-radius: 5px;
      font-size: 1em;
    }

    button:hover {
      box-shadow: 2px 2px 2px #000;
      background: #eee;
      transform: translate(-1px, -1px)
    }


    img {
      vertical-align: middle;
      margin: 0 10px 10px 3px;
      border: solid 1px black;
      border-radius: 5px;
    }

    img:hover {
      box-shadow: 2px 2px 2px #000;
      transform: translate(-1px, -1px)
    }

    footer {
      clear: both;
      display: block;
      padding: 50px;
      width: 421px;
      text-align: center;
      color: #fff;
    }
  `;
}

/* ============================== OUTPUTS RELEVANT JAVASCRIPT CODE ============================== */

if (joyTemplate) {
  jsH3.textContent = 'Template 1 (Top Nav Fixed) / Template 2 (Side Nav Fixed)'
  document.getElementById('joyJS').textContent = `
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
    homeLink.addEventListener('mouseover', function() { this.style.backgroundColor = '${joyColors[2]}'; });
    link2.addEventListener('mouseover', function() { this.style.backgroundColor = '${joyColors[2]}'; });
    link1.addEventListener('mouseover', function() { this.style.backgroundColor = '${joyColors[2]}'; });
    homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
    link2.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    link1.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  `;
}


else if (sethTemplate) {
  jsH3.textContent = 'Template 3 (Folders)'
  document.getElementById('sethJS').textContent = `

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
    sethHomeLink.style.background = '${sethColors[1]}';
    sethAboutUsLink.style.background = '#f1f1f1';
    sethChooseLayoutLink.style.background = '#f1f1f1';
  }

  // Nav: About Us Link
  function aboutUs() {
    document.getElementById('navTab1').style.display = 'none';
    document.getElementById('navTab2').style.display = 'block';
    document.getElementById('navTab3').style.display = 'none';
    sethAboutUsLink.style.background = '${sethColors[1]}';
    sethChooseLayoutLink.style.background = '#f1f1f1';
    sethHomeLink.style.background = '#f1f1f1';
  }

  // Nav: Third Link
  function thirdLink() {
    document.getElementById('navTab1').style.display = 'none';
    document.getElementById('navTab2').style.display = 'none';
    document.getElementById('navTab3').style.display = 'block';
    sethChooseLayoutLink.style.background = '${sethColors[1]}';
    sethAboutUsLink.style.background = '#f1f1f1';
    sethHomeLink.style.background = '#f1f1f1';
  }

  /* ==================================== EVENT LISTENERS ==================================== */

  // Navigation Event Listeners
  sethHomeLink.addEventListener('click', goHome);
  sethAboutUsLink.addEventListener('click', aboutUs);
  sethChooseLayoutLink.addEventListener('click', thirdLink);
`;
}

else if (jeffTemplate) {
  jsH3.textContent = 'Template 4 (Fixed Width Scroll)'
  document.getElementById('jeffJS').textContent = 'There is no JavaScript for this layout. You\'re welcome.';
}

/* ========================= FUNCTIONS AND EVENT LISTENERS FOR CODE.HTML ========================= */

function clickInstructionsButton() {
  instructionsDiv.style.display = 'block';
  htmlOutput.style.display = 'none';
  cssOutput.style.display = 'none';
  jsOutput.style.display = 'none';
  instructionsNav.style.background = '#fff';
  htmlNav.style.background = '#eee';
  cssNav.style.background = '#eee';
  jsNav.style.background = '#eee';
}

function clickHtmlButton() {
  instructionsDiv.style.display = 'none';
  htmlOutput.style.display = 'block';
  cssOutput.style.display = 'none';
  jsOutput.style.display = 'none';
  instructionsNav.style.background = '#eee';
  htmlNav.style.background = '#fff';
  cssNav.style.background = '#eee';
  jsNav.style.background = '#eee';
}

function clickCssButton() {
  instructionsDiv.style.display = 'none';
  htmlOutput.style.display = 'none';
  cssOutput.style.display = 'block';
  jsOutput.style.display = 'none';
  instructionsNav.style.background = '#eee';
  htmlNav.style.background = '#eee';
  cssNav.style.background = '#fff';
  jsNav.style.background = '#eee';
}

function clickJsButton() {
  instructionsDiv.style.display = 'none';
  htmlOutput.style.display = 'none';
  cssOutput.style.display = 'none';
  jsOutput.style.display = 'block';
  instructionsNav.style.background = '#eee';
  htmlNav.style.background = '#eee';
  cssNav.style.background = '#eee';
  jsNav.style.background = '#fff';
}

instructionsNav.addEventListener('click', clickInstructionsButton);
htmlNav.addEventListener('click', clickHtmlButton);
cssNav.addEventListener('click', clickCssButton);
jsNav.addEventListener('click', clickJsButton);

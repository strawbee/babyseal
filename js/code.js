'use strict';

var color1 = 'red';
var color2 = 'green';
document.getElementById('joyHTML').style.display = 'block';

document.getElementById('joyCSS').style.display = 'block'
document.getElementById('joyCSS').innerHTML = `#wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient('${color1}', '${color2}') fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 0;
}`;

"use script";


function changeColor(gradientA, gradientB) {
  document.querySelector('body').style.background = 'linear-gradient(' + gradientA + ', ' + gradientB + ')';
}

function colorSelect(event) {
  event.preventDefault();
  var colorOptions = document.getElementsByName('colorsRadioButton');
  if (colorOptions[0].checked === true) {
    changeColor('#000', '#111'); // Default
  } else if (colorOptions[1].checked === true) {
    changeColor('#BB0000', '#690000'); // Red
  } else if (colorOptions[2].checked === true) {
    changeColor('#D14800', '#D16024'); // Orange
  } else if (colorOptions[3].checked === true) {
    changeColor('#FFE100', '#DEC300'); // Yellow
  } else if (colorOptions[4].checked === true) {
    changeColor('#008705', '#006D04'); // Green
  } else if (colorOptions[5].checked === true) {
    changeColor('#3D5091', '#001991'); // Blue
  } else if (colorOptions[6].checked === true) {
    changeColor('#680078', '#9A00B8'); // Purple
  }
}

document.getElementById('colorsForm').addEventListener('submit', colorSelect)

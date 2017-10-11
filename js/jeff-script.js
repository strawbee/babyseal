"use script";


function jeffChangeColor(gradientA, gradientB) {
  document.querySelector('body').style.background = 'linear-gradient(' + gradientA + ', ' + gradientB + ')';
}

function applyColors(event) {
  event.preventDefault();
  var colorOptions = document.getElementsByName('colorsRadioButton');
  if (colorOptions[0].checked === true) {
    jeffChangeColor('#000', '#111'); // Default
  } else if (colorOptions[1].checked === true) {
    jeffChangeColor('#BB0000', '#690000'); // Red
  } else if (colorOptions[2].checked === true) {
    jeffChangeColor('#D14800', '#D16024'); // Orange
  } else if (colorOptions[3].checked === true) {
    jeffChangeColor('#FFE100', '#DEC300'); // Yellow
  } else if (colorOptions[4].checked === true) {
    jeffChangeColor('#008705', '#006D04'); // Green
  } else if (colorOptions[5].checked === true) {
    jeffChangeColor('#3D5091', '#001991'); // Blue
  } else if (colorOptions[6].checked === true) {
    jeffChangeColor('#680078', '#9A00B8'); // Purple
  }
}

document.getElementById('colorsForm').addEventListener('submit', appplyColors)

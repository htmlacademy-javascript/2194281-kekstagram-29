let buttonPlus = document.querySelector('.scale__control--bigger');
let buttonMinus = document.querySelector('.scale__control--smaller');
let valueScaleDisplay = document.querySelector('.scale__control--value');
let effectImages = document.querySelector('.img-upload__preview img');

let valueScale = 100;
valueScaleDisplay.value = `${valueScale} %`

buttonMinus.addEventListener('click', () => {
  if (valueScale > 25) {
    valueScale -= 25;
    valueScaleDisplay.value = `${valueScale} %`;
  }
  effectImages.style.transform = `scale(0.${valueScale})`
})
buttonPlus.addEventListener('click', () => {
  if (valueScale !== 100) {
    valueScale += 25;
    valueScaleDisplay.value = `${valueScale} %`;
    effectImages.style.transform = `scale(0.${valueScale})`
  }
  if (valueScale === 100) {
    effectImages.style.transform = `scale(1)`
  }

})





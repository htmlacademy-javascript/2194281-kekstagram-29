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


let slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [0],
  connect: 'lower',
  range: {
    'min': 0,
    'max': 1
  },
  step: 0.1,
});


let effectPreview = document.querySelectorAll('.effects__item');


for (let i = 0; i < effectPreview.length; i++) {
  effectPreview[i].addEventListener('click', (e) => {
    let effectName = e.target.value;
    effectImages.className = `effects__preview--${effectName}`;


    let levelValue = document.querySelector('.effect-level__value');


    slider.noUiSlider.on('update', () => {
      levelValue.value = slider.noUiSlider.get();
      effectImages.style.filter = `invert(${levelValue.value}%)`
        function getStyle(contain, effect) {
          if (effectImages.classList.contains(contain)) {
            effectImages.style.filter = `${effect}(${levelValue.value})`;
          }
        }
        getStyle('effects__preview--chrome', 'grayscale');
        getStyle('effects__preview--sepia', 'sepia');
    })


    effectPreview[i].addEventListener('click', () => {
      if (effectImages.classList.contains('effects__preview--marvin')) {
        slider.noUiSlider.updateOptions({
          range: {
            'min': 0,
            'max': 100
          },
          step: 1
        });
        effectImages.style.filter = `invert(${levelValue.value}%)`
      }
    })
  })
}
















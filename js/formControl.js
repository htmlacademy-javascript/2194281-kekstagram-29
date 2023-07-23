// переменная модалуи с формой
let formSplice = document.querySelector('.img-upload__overlay');
// переменная инпута для загрузки фото
let downloadImg = document.querySelector('#upload-file');
// переменная кнопки закрывающей модалку
let closeModalForm = document.querySelector('#upload-cancel');


//событие отрабатывает после загрузки фото
downloadImg.addEventListener('change', (e) => {
  //получаю загруженное фото и передаю его в фото превью фильтра
  let filterFile = downloadImg.files[0];
  let reader = new FileReader();
  reader.onloadend = function () {
    document.querySelector('.img-upload__preview img').src = reader.result;
    let previewFilterFile = document.querySelectorAll('.effects__preview');
    for (let i = 0; i < previewFilterFile.length; i++) {
      previewFilterFile[i].style.backgroundImage = `url(${reader.result})`;
    }
  }
  reader.readAsDataURL(filterFile);

  // открываю модалку
  formSplice.classList.remove('hidden');
  document.body.classList.add('modal-open');
})


// событие закрывает модалку по кику
closeModalForm.addEventListener('click', () => {
  formSplice.classList.add('hidden');
  document.body.classList.remove('modal-open');
})


// событие закрывает модалку по нажатию на Escape
document.addEventListener('keydown', (e) => {
  if (e.code === "Escape") {
    formSplice.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
})





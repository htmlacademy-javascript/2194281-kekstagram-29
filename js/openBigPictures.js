// импортирую иммитацию сервера (заглушку)
import {newArrayFhotoOptions} from './seeders/seeders.js';

// обьявляю нужные переменные
let pictures = document.querySelectorAll('.picture');
let bigPicture = document.querySelector('.big-picture');
let bigPictureImg = document.querySelector('.big-picture__img img');
let closeBigPicture = document.querySelector('.big-picture__cancel');
let likesCount = document.querySelector('.likes-count');
let commetsCount = document.querySelector('.comments-count');
let commetnsBlock = document.querySelector('.social__comments');
const commensTemplate = document.querySelector('#comment').content;
const commentsArray = newArrayFhotoOptions;

//цикл пробегает по всем превью и добавляет кол-во лайков и комментов
pictures.forEach(item => {
  let image = item.querySelector('img');
  // кол-во лайков в превью
  let likes = item.querySelector('.picture__likes');
  //кол-во комментов в превью
  let comments= item.querySelector('.picture__comments');

  // Обработчик открывает модалку при клике на превью со всем его содержимым
  image.addEventListener('click', (e) => {
    // удаляю класс скрывающий модалку
    bigPicture.classList.remove('hidden');
    // изменяем путь к картинке (получаем его из превью)
    bigPictureImg.src = e.target.src;

    //обращаюсь к переменным с данными о лайках и комментах в превью и переписываю их в модалку
    likesCount.textContent = likes.textContent;
    commetsCount.textContent = comments.textContent;

    // сбрасываю содержимое отрисованного темплейта внутри блока комментов в модалке
    commetnsBlock.innerHTML = '';
    // сбрасываю скролл при открытой модалке
    document.body.classList.add('.modal-open');

    //цикл создает блок с комментариями в модалке
    commentsArray.forEach( (commentsArray, i) => {
      // условие ограничивает число комментариев исходя из данных в превью
      if(i < Number(commetsCount.textContent)) {
        //клонирую темплейт блока комментов для каждой модалки при вызове обработчика
        const commentsElement = commensTemplate.cloneNode(true);
        // добавляю текст коммента из сидера (имитация сервера)
        commentsElement.querySelector('.social__text').textContent = commentsArray.comments[0].message;
        // добавляю аватар коментирующего из сидера (имитация сервера)
        commentsElement.querySelector('.social__picture').src = commentsArray.comments[0].avatar;

        // переменная сщ стартовым числом комментов
        let viewComments = 5;


        // изначально выводим 5 комментов
        if(i < viewComments) {
          // добавляю склонированный элемент в разметку
          commetnsBlock.appendChild(commentsElement);
        }

        // кнопка "Загрузить еще"
        let loadCommBtn = document.querySelector('.social__comments-loader');
        // Узел с выводом текста числа комментов
        let startCommentsCount = document.querySelector('.social__comment-count');

        // обработчик по клику на "загрузить еще" подгружает оставшиеся комменты и меняет текст с выводом числа комментов
        loadCommBtn.addEventListener('click', (e) => {
          e.preventDefault();
          // меняем текст
          startCommentsCount.textContent = commetsCount.textContent + ' из ' + commetsCount.textContent + ' комментариев';
          // подгружаем все комменты
          commetnsBlock.appendChild(commentsElement);
        })

      }
    });
  });
});

// закрываю модалку по клику на крестик
closeBigPicture.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
})

// закрываю модалку по нажатию на esc
document.addEventListener('keydown', (e) => {
  if (e.code === "Escape") {
    bigPicture.classList.add('hidden');
  }

})



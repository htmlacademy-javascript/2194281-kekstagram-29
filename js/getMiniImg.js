// импортирую иммитацию сервера (заглушку)
import {newArrayFhotoOptions} from './seeders/seeders.js';

// содержимое темплейта
const pictures = document.querySelector('.pictures');
// добавляю темплейт в разметку
const pictureMinTemplate = document.querySelector('#picture').content.querySelector('.picture');

// записываю массив сидер в переменную
const picturesImg = newArrayFhotoOptions;

// цикл клонирует темплейт и добавляет в него данные
picturesImg.forEach( (picturesImg) => {
  // клонирую
  const pictureElement = pictureMinTemplate.cloneNode(true);

  //переписываю данные из массива сидера
  pictureElement.querySelector('.picture__img').src = picturesImg.url;
  pictureElement.querySelector('.picture__img').alt = picturesImg.description;
  pictureElement.querySelector('.picture__likes').textContent = picturesImg.likes;
  pictureElement.querySelector('.picture__comments').textContent = picturesImg.comments.length;

// добавляю в разметку клоны темплейта
  pictures.appendChild(pictureElement);
});





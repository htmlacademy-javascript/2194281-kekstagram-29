import {newArrayFhotoOptions} from './seeders/seeders.js';

const pictures = document.querySelector('.pictures');
const pictureMinTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesImg = newArrayFhotoOptions;

picturesImg.forEach( (picturesImg) => {
  const pictureElement = pictureMinTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picturesImg.url;
  pictureElement.querySelector('.picture__img').alt = picturesImg.description;
  pictureElement.querySelector('.picture__likes').textContent = picturesImg.likes;
  pictureElement.querySelector('.picture__comments').textContent = picturesImg.comments.length;

  pictures.appendChild(pictureElement);
});





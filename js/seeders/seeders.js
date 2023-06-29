import {getRandomArrayElement} from './util.js';
import {userLike} from './seedersLike.js';
import {userDescr} from './seedersDescr.js';
import {userPhotoNumber} from './seedersUserPhoto.js';
import {userComments} from './seederComments.js';






const creatPhotoOptions = () => ({
  id: getRandomArrayElement(userPhotoNumber),
  url: `photos/${getRandomArrayElement(userPhotoNumber)}.jpg`,
  description: getRandomArrayElement(userDescr),
  likes: getRandomArrayElement(userLike),
  comments: userComments.slice(getRandomArrayElement(userPhotoNumber)),
});
const newArrayFhotoOptions = Array.from({length: 25}, creatPhotoOptions);

console.log(newArrayFhotoOptions);

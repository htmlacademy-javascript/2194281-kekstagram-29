import {userName} from './seedersName.js';
import {getRandomArrayElement} from './util.js';
import {commentMessege} from './seedersCommMes.js';
import {userAvatar} from './seedersAvatar.js';

const userComments = [];

for (let i = 1; i <= 30; i++) {
  const commentsPush = {
    id: i,
    avatar: `img/avatar-${getRandomArrayElement(userAvatar)}.svg`,
    message: getRandomArrayElement(commentMessege),
    name: getRandomArrayElement(userName),
  };
  userComments.push(commentsPush);
}
export {userComments};

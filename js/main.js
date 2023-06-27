let userName = [
  'Jhon', 'Mike', 'Jessy', 'Alex', 'Anna', 'Paul', 'Jack', 'Caty'
];

let userPhotoNumber = [];
let userLike = [];
for(let i = 0; i <= 25; i++) {
  userPhotoNumber.push(i);
};
for(let i = 15; i <= 250; i++) {
  userLike.push(i);
};

let userDescr = [
  'Cool', 'False', 'Nice', 'Great', 'Lile', 'Dislike'
];



const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

let userComments =[];
let userAvatar = ['1', '2', '3', '4', '5', '6'];
let commentMessege = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'огда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
for(let i = 1; i <= 30; i++) {
  let commentsPush = {
    id: i,
    avatar:`img/avatar-${getRandomArrayElement(userAvatar)}.svg`,
    message: getRandomArrayElement(commentMessege),
    name: getRandomArrayElement(userName),
  };
  userComments.push(commentsPush);
}


const creatPhotoOptions = () => ({
  id: getRandomArrayElement(userPhotoNumber),
  url: `photos/${getRandomArrayElement(userPhotoNumber)}.jpg`,
  description: getRandomArrayElement(userDescr),
  likes: getRandomArrayElement(userLike),
  comments: userComments.slice(getRandomArrayElement(userPhotoNumber)),
});
const newArrayFhotoOptions = Array.from({length: 25}, creatPhotoOptions);



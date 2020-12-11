var messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var randomizer = function (array) {
  return Math.floor(Math.random() * array.length);
};

var likes = [];
for(var i = 15; i < 200; i++) {
  likes.push(i);
}

var pictureComments = function () {
  return {
    avatar: 'img/avatar-' + randomizer(messages) + '.svg',
    message: messages[randomizer(messages)]
  };
};

var comments = [];
for (var j = 0; j < 6; j++) {
  comments.push(pictureComments());
}

var commentsCount = [];
for (var m = 1; m < 25; m++) {
  commentsCount.push(m);
}

var pictureInfo = function () {
  return {
    url: 'photos/' + k + '.jpg',
    description: '',
    likes: likes[randomizer(likes)],
    comments: commentsCount[randomizer(commentsCount)],
    message: comments
  };
};

var pictures = [];
for(var k = 1; k < 26; k++) {
  pictures.push(pictureInfo());
}


var renderPictures = function (picture) {
  var usersPictures = document.querySelector('.pictures');
  var pictureTemplate = document.getElementById('picture').content.querySelector('.picture');
  var fragment = document.createDocumentFragment();

  picture.forEach(function (pictureItem) {
    var pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = pictureItem.url;
    pictureElement.querySelector('.picture__likes').textContent = pictureItem.likes;
    pictureElement.querySelector('.picture__comments').textContent = pictureItem.comments;

    fragment.appendChild(pictureElement);
    usersPictures.appendChild(fragment);
  })
};

renderPictures(pictures);

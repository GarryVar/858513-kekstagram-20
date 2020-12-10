var messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

var randomizer = function(array) {
  return Math.floor(Math.random() * array.length);
}

var likes = [];
for(var j = 15; j < 200; j++) {
  likes.push(j);
};

var makeComments = function() {
  var comment = {};
    comment.avatar = 'img/avatar-' + randomizer(messages) +'.svg';
    comment.message = messages[randomizer(messages)];

    return comment;
};


var commentsArray = [];
for(var l = 0; l < 6; l++) {
  commentsArray.push(makeComments());
};



var descriptBlocks = function() {
  var block = {};
    block.url = 'photos/' + i + '.jpg';
    block.description = '';
    block.likes = likes[randomizer(likes)];
    block.message = commentsArray;

  return block;
};



console.log(descriptBlocks());

var blocks = [];
for(var i = 1; i < 26; i++) {
  blocks.push(descriptBlocks());
};


console.log(blocks);

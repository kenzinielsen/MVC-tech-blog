const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This is a tech blog message',
    user_id: 6,
    //post_id: 1
  },
  {
    comment_text: 'This is another one!',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Awesome news, it works!!',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'This is a message',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'You can create your own message too!',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'This was made during a coding bootcamp',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'This was enjoyable to create',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Sweet, this is a useful app',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'One more message',
    user_id: 10,
    post_id: 11
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
const { Post } = require('../models');

const postdata = [
  {
    title: 'This is a tech blog',
    contents: 'This is the content ',
    user_id: 10
  },
  {
    title: 'This was made in a coding bootcamp',
    contents: 'All of the information is here',
    user_id: 8
  },
  {
    title: 'Yay, it works!',
    contents: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'All kinds of tech news',
    contents: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'Another tech blog update!',
    contents: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'You can also leave a post of your own',
    contents: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'This app is very useful.',
    contents: 'https://java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

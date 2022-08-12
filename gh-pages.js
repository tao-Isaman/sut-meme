import ghpages from 'gh-pages';
// var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'main',
    repo: 'https://github.com/tao-Isaman/sut-meme', // Update to point to your repository
    user: {
      name: 'sut-meme', // update to use your name
      email: 'tao.isaman@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
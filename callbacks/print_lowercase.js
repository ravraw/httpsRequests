var getHtml = require('./http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function print_lowercase(html) {
  console.log(html.toLowerCase());
};

getHtml( requestOptions,print_lowercase);

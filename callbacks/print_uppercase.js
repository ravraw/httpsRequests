var getHtml = require('./http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function print_upperCase(html) {
  console.log(html.toUpperCase());
};

getHtml( requestOptions,print_upperCase);
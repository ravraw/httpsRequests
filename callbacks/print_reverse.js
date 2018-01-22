var getHtml = require('./http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function print_reverse(html) {
  console.log(html.split("").reverse().join(""));
};

getHtml( requestOptions,print_reverse);
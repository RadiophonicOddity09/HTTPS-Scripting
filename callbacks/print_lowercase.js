var getHTML = require('../module.js');

function printLowercase (html) {
  console.log(html.toLowerCase());
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
  };

getHTML(requestOptions, printLowercase);


var https = require('https');

function getAndPrintHTML (options) {

 https.get(options, function(response) {
    response.setEncoding('utf-8');
    response.on('data', function(data) {
      console.log("Chunks recieved: " + '/n' + data);
      var newData = '';
      newData += data;
      console.log(newData);
    });
    response.on('end', function() {
     console.log("The stream has ended");
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions);

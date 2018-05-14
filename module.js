var https = require('https');
module.exports = function getHTML (options, callback) {
    https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function (html) {
      console.log('Chunk Received. Length:');
      callback(html);
      var newData = [];
      newData += html;
      console.log(html);
    });
    response.on('end', function() {
     console.log('Response Stream Complete');
    });
  });
};
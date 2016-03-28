
// var http = require("http");
// var requestModule = require('./request-handler.js');
// var urlParser = require('url');

// var port = 3000;

// var ip = "127.0.0.1";

// var server = http.createServer(function(request, response) {
//   var parts = urlParser.parse(request.url);

//   if (parts.pathname === '/classes/chatterbox') {
//     requestModule.requestHandler(request, response);
//   } else {
//     requestModule.sendResponse(response, 'Not Found', 404);
//   }
// });
// console.log("Listening on http://" + ip + ":" + port);
// server.listen(port, ip);


// function writeData(request) {
//   var body = '';
//   request.on('error', function(err) {
//     console.error(err);
//   });
//   request.on('data', function(chunk) {
//     body += chunk;
//   });
//   request.on('end', function() {
//     var outputFilename = 'server/classes/chatterbox/data.json';
//     var myData = fileData;

//     myData.results.push(JSON.parse(body));

//     fs.writeFile(outputFilename, JSON.stringify(myData, null, 2), function(err) {
//       if(err) {
//         console.log(err);
//       } else {
//         console.log("JSON saved to " + outputFilename);
//       }
//     });
//   });
// }
---
layout: post
title:  "Writing to JSON files in Node.js"
date:   2016-03-23 23:00:00
categories:
tags: nodejs javascript
image:
---

``` js
var server = http.createServer(function(request, response) {
  var parts = urlParser.parse(request.url);

  if (parts.pathname === '/classes/chatterbox') {
    requestModule.requestHandler(request, response);
  } else {
    requestModule.sendResponse(response, 'Not Found', 404);
  }
});
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
```

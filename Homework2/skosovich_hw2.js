var express = require('express')
var app = express()

var http = require('http');
var url = require('url');

// This is Assignment 2 for Web API
// Steven Kosovich
// This program may be over-commented, but it helps me understand it

// The default, when you request the url with nothing else
app.all('/', function (req, res){
        res.send("You have requested the base url with no urn (headers or parameters)");
})

// This will accept a get request
app.all('/gets', function (req, res){
  // Checking if it is good
  if (req.method == "GET"){
    // If it is good, check for headers and parameters
    if (url.parse(req.url).search == null){
      res.send("There were no headers or query parameters sent in");
    }
    // It is good with a header or a parameter, so show the info
    else{
      res.send(req.query);
    }
  }
  // If it's not good, reject the request
  else{
    res.status(400);
    res.send('Not a supported http method used');
  }
})

// This will accept a post request
app.all('/posts', function (req, res){
  // Checking if it is good
  if (req.method == "POST"){
    // If it is good, check for headers and parameters
    if (url.parse(req.url).search == null){
      res.send("There were no headers or query parameters sent in");
    }
    // It is good with a header or a parameter, so show the info
    else{
      res.send(req.query);
    }
  }
  // If it's not good, reject the request
  else{
    res.status(400);
    res.send('Not a supported http method used');
  }
})

// This will accept a put request
app.all('/puts', function (req, res){
  // Checking if it is good
  if (req.method == "PUT"){
    // If it is good, check for headers and parameters
    if (url.parse(req.url).search == null){
      res.send("There were no headers or query parameters sent in");
    }
    // It is good with a header or a parameter, so show the info
    else{
      res.send(req.query);
    }
  }
  // If it's not good, reject the request
  else{
    res.status(400);
    res.send('Not a supported http method used');
  }
})

// This will accept a delete request
app.all('/deletes', function (req, res){
  // Checking if it is good
  if (req.method == "DELETE"){
    // If it is good, check for headers and parameters
    if (url.parse(req.url).search == null){
      res.send("There were no headers or query parameters sent in");
    }
    // It is good with a header or a parameter, so show the info
    else{
      res.send(req.query);
    }
  }
  // If it's not good, reject the request
  else{
    res.status(400);
    res.send('Not a supported http method used');
  }
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)

})

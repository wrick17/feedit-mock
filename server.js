var express = require('express'),
    path = require('path'),
    superagent = require('superagent'),
    cors = require('cors'),
    app = express();

app.use(cors());
app.use(express.static(path.join('./')));

app.get('/getData', function(request, response) {
  superagent
    .get(request.query.link)
    .end(function(err, res) {
      if (err) console.log(err);
      response.json(JSON.parse(res.text));
    });
});

app.get('/getList', function(request, response) {
  superagent
    .get('http://www.reddit.com/reddits.json?limit=100')
    .end(function(err, res) {
      if (err) console.log(err);
      response.json(JSON.parse(res.text));
    });
});

app.get('/feeds/*', function(req, res) {
 res.sendFile(__dirname + '/index.html');
});

var server = app.listen(process.env.PORT || 3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('server started at port ', port);

});
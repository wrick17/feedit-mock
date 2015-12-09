var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join('./')));

app.get('/*',function(req,res){
 res.sendFile(__dirname + '/index.html');
});

var server = app.listen(process.env.PORT || 3000, function() {

  var host = server.address().address || 'localhost';
  var port = server.address().port;

  console.log('server started at port ', port);

});
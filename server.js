var express = require('express');
var app = express();

app.use('/node_modules', express.static('node_modules'));
app.use('/', express.static('./'));

app.listen(3000, '127.0.0.1', function () {
  console.log('Example app listening on port 3000!')
});

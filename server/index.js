const express = require('express')
const app = express()

app.get('/', function(req, res, next){
  // console.log('get route');
  res.send('<h1>Welcome to WitWhere</h1>');
});

app.listen(3000, () => console.log("Listening on port 3k"))
const express = require('express');
const app = express();
const path = require('path')
const http = require('http').Server(app);
const userController = require('./controllers/data/db')
const bodyParser = require('body-parser')
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(8000, () => console.log('listening on 8000'));

// app.use(express.static('../build'))

io.on('connection', (client) => {
  client.emit('news', client.id);
  console.log("new client connected: ", client.id)
  client.on('my other event', function (data) {
    console.log(data);
  });
})

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.resolve('build', 'bundle.js'))
});

app.get('/fonts/Commodore64.ttf', (req, res) => {
  res.sendFile(path.resolve('build/font', 'C64.ttf'))
});

app.get('/', (req, res, next) => {
  // console.log('get route');
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/socket', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../socket.html'))
})

app.post(
          '/api/signin', 
          bodyParser.json(), 
          userController.signinUser
          )

app.post(
          '/api/signup', 
          bodyParser.json(), 
          userController.signinUser
          )

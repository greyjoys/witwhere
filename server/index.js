const express = require('express');
const app = express();
const path = require('path');
const userController = require('./controllers/data/db');
const bodyParser = require('body-parser');
const fs = require('fs');
const cookieController = require('./controllers/cookie/cookieController');


// initialize socket io
const server = require('http').Server(app);
const { initializeSocketService } = require('./controllers/socketController');
initializeSocketService(server);

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.use(bodyParser.json());

app.get('/', cookieController.setCookie, (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.post('/api/signup', userController.createUser);

app.post('/api/login', userController.loginUser);

server.listen(8000, () => console.log('listening on 8000'));

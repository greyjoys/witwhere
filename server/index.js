const express = require('express');
const app = express();
const path = require('path');
const userController = require('./controllers/data/db');
const bodyParser = require('body-parser');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs');

// Overall Game State
const state = {
  playerList: [],
  promptList: ["A bad time to shake someone's hand", 'this is another prompt'],
  gameReady: false,
  timer: '',
  gameStage: 1
};

app.use('/build', express.static(path.resolve(__dirname, '../build')));

io.on('connection', client => {
  // Upon pressing 'ready', set a property on the user marking them as ready. Advance to the next game phase once both players are ready. *INCOMPLETE*
  client.on('advanceStage', data => {
    console.log(client.id, data);
    const players = fs.readFileSync('./playerState.js', 'utf8');
    players.push({ id: client.id, ready: data.ready });
    if (players[0].ready && players[1].ready) {
      client.emit('nextStage', true);
      fs.writeFileSync('./playerState.js', '[]', err =>
        console.log('fs error: ', err)
      );
    }
  });
})
  // Upon logging in, create a new user object and store it in playerList within state. Send back the updated state to the front end.



app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.resolve('build', 'bundle.js'))

  client.on('signIn', data => {
    state.playerList.push({
      id: client.id,
      username: data.username,
      answer: []
    });
    client.emit(state);
  });
});

app.use(bodyParser.json())

// app.get('/build/bundle.js', (req, res) => {
//   res.sendFile(path.resolve('build', 'bundle.js'));
// });

// app.get('/fonts/Commodore64.ttf', (req, res) => {
//   res.sendFile(path.resolve('build/font', 'C64.ttf'));
// });

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/socket', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../socket.html'));
});

app.post(
          '/api/signup', 
          userController.createUser
          )

app.post(
          '/api/signin', 
          userController.signinUser
          )

server.listen( 8000, () => console.log('listening on 8000') );

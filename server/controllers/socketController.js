const socketIO = require('socket.io');
const GameManager = require('./lib/GameManagerModel');
const gameController = require('./gameController');

function initializeSocketService(server) {
  const io = socketIO(server);
  const connections = [];

  io.on('connection', socket => {
    /* 
    Handles join events
  */
    connections.push(socket.id);

    setInterval(() => {
      for (let i = 0; i < connections.length; i += 1) {
        // to emit heartbeat
        io.to(connections[i]).emit('message', `heart beat for ${i}`);
      }
    }, 1000);

    socket.on('CREATE', () => {
      gameController.createGame(socket);
    });

    socket.on('JOIN', req => {
      console.log(socket);
      gameController.joinGame(socket, req, io);
    });

    /*
      Handles any events labeled move.
    */
    socket.on('ADD_RESPONSE', req => {
      gameController.addResponse(socket, req, io);
    });

    /*
      Handles disconnecting events
    */
    socket.on('SUBMIT_VOTE', req => {
      gameController.submitVote(socket, req, io);
    });

    socket.on('disconnect', () => {
      console.log('player disconnected');
    });
  });
}
module.exports = { initializeSocketService };

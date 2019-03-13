const socketIO = require('socket.io');
const GameManager = require('./lib/GameManagerModel');

function initializeSocketService(server) {
  const io = socketIO(server);
  const connections = [];

  io.on('connection', socket => {
    /* 
    Handles join events
  */

    console.log(socket.id);
    connections.push(socket.id);
    console.log('someone joined');
    console.log('current connections', connections);
    // socket.emit("player_joined", "welcome");
    // setInterval(() => {
    //   // socket.emit('message', 'hello');
    //   for (let i = 0; i < connections.length; i += 1) {
    //     socket.to(connections[i]).emit('message', i);
    //   }
    // }, 1000);

    socket.on('CREATE', () => {
      const reqSocketId = socket.id;
      const newGid = GameManager.createGame();
      socket.to(reqSocketId).emit('CREATE', newGid);
    });

    socket.on('JOIN', req => {
      // add socketID to connections within the game Session
    });

    /* 
    Handles any events labeled move.
  */
    socket.on('ADD_RESPONSE', req => {});

    /* 
    Handles disconnecting events
  */
    socket.on('SUBMIT_VOTE', payload => {
      console.log('player disconnected');
    });
  });
}
module.exports = initializeSocketService;

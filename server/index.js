const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const path = require('path')

// app.use(express.static('../build'))

app.ws('/echo', (ws, req) => {
  ws.on('message', (msg) => { //msg is the string we input
    ws.send(msg + " received");
    let connectedUsers = expressWs.getWss('/echo');
    // console.log('connectedUsers.clients', connectedUsers.clients)
    connectedUsers.clients.forEach( client => client.send(msg))
  })
})

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.resolve('build', 'bundle.js'))
})

app.get('/', (req, res, next) => {
  // console.log('get route');
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(3000, () => console.log("Listening on port 3k"))
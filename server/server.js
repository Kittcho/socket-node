const express = require('express');
const socketIO = require('socket.io');

const http = require('http'); // crea servidor

const path = require('path');

const app = express(); // crea servidor con express

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

module.exports.io = socketIO(server); // esta es la comunicación del backend

require('./sockets/socket')


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
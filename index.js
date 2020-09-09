var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

server.listen(PORT, function() {
  console.log('Chat server running');
});


import React from 'react';
import ReactDOM from 'react-dom';

import NameForm from '.client/NameForm'


ReactDOM.render(
    <div>
    <NameForm />


    </div>    
    ,
    
  document.getElementById('root')
);



var io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('message', function(msg) {
    io.emit('message', msg);
  });
});

#!/usr/bin/env node
require('dotenv').config();
const BinanceService = require('./services/binanceService');
const CryptoMarketDomain = require('./domain/cryptoMarketDomain');
const ResponseServer = require('./infrastructure/responseServer');

var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

server.listen(8080,async function()  {
    console.log((new Date()) + ' Server is listening on port 8080');
});

wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  return true;
}

wsServer.on('request', function(request) {
  if (!originIsAllowed(request.origin)) {
    request.reject();
    console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
    return;
  }
  
  var connection = request.accept('echo-protocol', request.origin);

  console.log((new Date()) + ' Connection accepted.');
 
  connection.on('message', async  function(message) {
    let response;
    try{
      response = await CryptoMarketDomain.processMessage(message);
    }catch(e){
      response = ResponseServer.create(500, e);
    }
    console.log(response.toJson());
    connection.sendUTF(response.toJson());
  });

  connection.on('close', function(reasonCode, description) {
      console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});
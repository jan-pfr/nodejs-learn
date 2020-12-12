const mosca = require('mosca')
const mqtt = require('mqtt')

moscaSettings = {
    host: "localhost",
    port: 1884,
    persistence : { factory : mosca.persistence.Memory }
};
var server = new mosca.Server(moscaSettings);
server.on('ready');

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
    console.log('Published', packet.topic, packet.payload);
});
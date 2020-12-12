//reminder for me that I have to rollback the changes in the validator class in jsonschema (\node_modules\jsonschema\lib\validator.js:111)

const mosca = require('mosca')
const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://localhost:1884')
//Server
moscaSettings = {
    host: "localhost",
    port: 1884,
    persistence : { factory : mosca.persistence.Memory }
};
const server = new mosca.Server(moscaSettings);
server.on('ready', backfire);
function backfire (){
    console.log('ready to fire!');
}
server.on('published', function(packet) {
    console.log('Published payload: ', packet.payload);
});

//Client
client.on('connect', function () {
    client.subscribe('temp/change', function (err) {
        if (!err) {
            client.publish('log/subscriptions', 'success sub to temp/change')
        }
    })
})
client.on('connect', function () {
    client.subscribe('log/subscriptions')
})
client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
})


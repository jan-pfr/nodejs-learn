const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://localhost:1884')
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


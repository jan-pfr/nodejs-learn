//initialise server
const http = require('http');
const express = require('express');
const app = express();
const routerGetTemp = express.Router();
const routerSetTemp = express.Router();
const server = http.createServer(app);
//defining ports
let port = Number(process.env.PORT);
let id;
if (!port)
    port = 3000;
server.listen(port);
//routing for gettemperature
app.use('/gettemperature',routerGetTemp);
//routing for settemperature
app.use('/settemperature', routerSetTemp);

    //GET temmperature of chosen room
    routerGetTemp.get('/:room', (req, res)=>{
        id = req.params.room;
        for (let i = 0; i<= rooms.length-1; i++){
            if (id === rooms[i].id){
                res.status(200).json({
                    //message: 'Du bist in der ' + rooms[i].room,
                    degree: rooms[i].degrees

                });
            }
        }
    });

    //GET change temperature of chosen room
    routerSetTemp.get('/:room/:degrees',(req, res)=>{
        id = req.params.room;
        for (let x = 0; x<= rooms.length-1; x++) {
            if (id === rooms[x].id) {
                rooms[x].degrees = req.params.degrees;
                res.status(200).json({
                    message:'Neue Temperatur ' + rooms[x].degrees+ '℃'
                });
            }
        }
    });


//current rooms with temperatures
let rooms = [
    {
        id: 'kitchen',
        room: 'Küche',
        degrees: 23
},
    {
        id: 'bathroom',
        room: 'Badezimmer',
        degrees: 22
},
    {
        id: 'bedroom',
        room: 'Schlafzimmer',
        degrees: 21
},
    {
        id: 'livingroom',
        room: 'Wohnzimmer',
        degrees: 25
},
    {
        id: 'office',
        room: 'Büro',
        degrees: 20
}]
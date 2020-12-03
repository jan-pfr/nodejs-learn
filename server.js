const http = require('http');
const express = require('express');
const app = express();
const routerGetTemp = express.Router();
const routerSetTemp = express.Router();
const server = http.createServer(app);
let port = Number(process.env.PORT);
let id;
if (!port)
    port = 3000;
server.listen(port);
app.use('/gettemperature',routerGetTemp);
app.use('/settemperature', routerSetTemp);

    routerGetTemp.get('/:room', (req, res, next)=>{
        id = req.params.room;
        for (var i = 0; i<= rooms.length-1; i++){
            if (id === rooms[i].id){
                res.status(200).json({
                    //message: 'Du bist in der ' + rooms[i].room,
                    degree: rooms[i].degree

                });
            }
        }
    });

    routerSetTemp.get('/:room/:degrees',(req, res,next)=>{
        id = req.params.room;
        newDegree = req.params.degrees;
    });

//Rooms
let rooms = [
    {
        id: 'kitchen',
        room: 'Küche',
        degree: 23
},
    {
        id: 'bathroom',
        room: 'Badezimmer',
        degree: 22
},
    {
        id: 'bedroom',
        room: 'Schlafzimmer',
        degree: 21
},
    {
        id: 'livingroom',
        room: 'Wohnzimmer',
        degree: 25
},
    {
        id: 'office',
        room: 'Büro',
        degree: 20
}]
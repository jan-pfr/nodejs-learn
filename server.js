//Server initialisieren
const http = require('http');
const express = require('express');
const app = express();
const routerGetTemp = express.Router();
const routerSetTemp = express.Router();
const server = http.createServer(app);
//Port definieren
let port = Number(process.env.PORT);
let id;
if (!port)
    port = 3000;
server.listen(port);
//Routing für gettemperature
app.use('/gettemperature',routerGetTemp);
//Routing für settemperature
app.use('/settemperature', routerSetTemp);

    //Zurückgabe der Temperatur des gewünschten Raums
    routerGetTemp.get('/:room', (req, res)=>{
        id = req.params.room;
        for (let i = 0; i<= rooms.length-1; i++){
            if (id === rooms[i].id){
                res.status(200).json({
                    //message: 'Du bist in der ' + rooms[i].room,
                    degree: rooms[i].degree

                });
            }
        }
    });

    //Zurückgeben der geänderten Temperatur
    routerSetTemp.get('/:roomid/:degrees',(req, res)=>{
        id = req.params.roomid;
        for (let x = 0; x<= rooms.length-1; x++) {
            if (id === rooms[x].id) {
                rooms[x].degrees = req.params.degrees;
                res.status(200).json({
                    message:'Neue Temperatur ' + rooms[x].degrees+ '℃'
                });
            }
        }
    });


//vorhandene Räume mit Temperaturen
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
const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();
const server = http.createServer(app);
let port = Number(process.env.PORT);
if (!port)
    port = 3000;
server.listen(port);
app.use('/gettemperature',router);

    router.get('/:room', (req, res)=>{
        const id = req.params.room;
        for (var i = 0; i<= rooms.length-1; i++){
            if (id === rooms[i].id){
                res.status(200).json({
                    //message: 'Du bist in der ' + rooms[i].room,
                    degree: rooms[i].degrees

                });
            }
        }
    });

//Rooms
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
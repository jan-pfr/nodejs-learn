const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
       message: 'Looks <<GET>> good to me?!'
    });
});
router.post('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Looks <<POST>> good to me?!'
    });
});

router.get('/:room', (req, res,next)=>{
        const id = req.params.room;
        if (id === 'kitchen'){
            res.status(200).json({
                message: 'Du bist in der Küche',
                room: id
            });
        }else{
            res.status(200).json({
                message: 'Diesen Raum gibt es nicht'
            });
        }

});

module.exports = router;

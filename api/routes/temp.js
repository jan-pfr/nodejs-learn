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

module.exports = router;

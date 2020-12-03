const express = require('express');
const app = express();
app.use(express.static('./static'));
app.listen(4567);
console.log('localhost:4567');

const express = require('express');
const app = express();
var mongoose = require('mongoose');
const cors = require('cors');
const port = 8000;
app.use(cors());

const makeConnection = require('./config/connectionLogic');
makeConnection();

app.use('/api/formdata', require('./routes/api/formdata'));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const makeConnection = async () => {
  try {
    await mongoose.connect(db, {useNewUrlParser: true}); // useNewUrlPaser is just to prevent mongodb warning
    console.log('mongodb connection successful');
  } catch (err) {
    console.error(err.message);
    //EXIT PROCESS WITH FAILURE
    process.exit(1);
  }
};
module.exports = makeConnection;

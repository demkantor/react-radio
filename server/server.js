const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/internet_raio`, {useUnifiedTopology: true, useNewUrlParser: true });
//   const connection = mongoose.connection;
//   connection.once('open', function() {
//     console.log("MongoDB database connected...");
// })

/** ---------- START SERVER ---------- **/
/** Listen * */
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
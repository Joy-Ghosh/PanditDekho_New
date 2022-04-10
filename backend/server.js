const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/PanditDekho", (err) => {
  if (!err) console.log("mongo connected");
  else console.log("error db :" + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;  

const mongoose = require("mongoose");

var Client = mongoose.model("Client", {
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
});

module.exports = { Client };

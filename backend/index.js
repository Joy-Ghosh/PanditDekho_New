const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { mongoose } = require("./server.js");
var Client_signup_Route = require("./routes/client_signup.route.js");
const CookieParser = require("cookie-parser");
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(CookieParser());
const port = process.env.PORT || 4100;
app.listen(port, () => {
  console.log("Connected to port " + port);
});

app.use("/clients", Client_signup_Route);



const express = require("express");
const cli = require("nodemon/lib/cli");
const router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

var { Client } = require("../model/Client_signup");

//to get all data
//=> localhost:4100/clients/list
router.get("/list", (req, res) => {
  Client.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error to get  Clients " + JSON.stringify(err, undefined, 2));
    }
  });
});

//get the data
//=> localhost:4100/clients/id to get specific data
router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);
  Client.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error to get  Clients " + JSON.stringify(err, undefined, 2));
    }
  });
});

//to post to db
//=> localhost:4100/clients/
router.post("/", (req, res) => {
  var client = new Client({
    name: req.body.name,
    phone: req.body.phone,
    state: req.body.state,
    city: req.body.city,
  });
  client.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("error in client save: " + JSON.stringify(err, undefined, 2));
    }
  });
});

//update data
router.put("./:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);
  var client = {
    name: req.body.name,
    phone: req.body.phone,
    state: req.body.state,
    city: req.body.city,
  };
  Client.findByIdAndUpdate(
    req.params.id,
    { $set: client },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "error in client Update: " + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);
  Client.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "error in client Delete: " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});
module.exports = router;

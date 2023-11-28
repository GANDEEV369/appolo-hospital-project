// let mongodb = require("mongodb");
// let talentsprint = mongodb.MongoClient;
// let checkusername = require("express").Router().get("/:username", (req, res) => {
//     talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//       if (err) {
//         throw err;
//       } else {
//           db.collection("ApolloUser").findOne({ "username":req.params.username},(err, result) => {
//             if (err) {
//                 res.send({"message":"UserName available"});
//             } else {
//               res.send({"message":"UserName already used"});
//             }
//           }
//         );
//       }
//     });
//   });
// module.exports = checkusername;
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const express = require("express");

const checkusername = express
  .Router()
  .get("/:username", (req, res) => {
    MongoClient.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
      if (err) {
        throw err;
      } else {
        db.collection("ApolloUser").findOne({ username: req.params.username }, (err, result) => {
          if (err) {
            res.send({ message: "Error checking username availability" });
          } else {
            if (result) {
              // Username already exists
              res.send({ message: "Username already used" });
            } else {
              // Username is available
              res.send({ message: "Username available" });
            }
            db.close(); // Close the database connection
          }
        });
      }
    });
  });

module.exports = checkusername;

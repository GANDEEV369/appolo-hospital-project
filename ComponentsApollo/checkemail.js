// let mongodb = require("mongodb");
// let talentsprint = mongodb.MongoClient;
// // let login = require("express").Router().get("/:id", (req, res) => {
// let checkmail = require("express")
//   .Router()
//   .get("/:email", (req, res) => {
//     talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//       if (err) {
//         throw err;
//       } else {
//         // db.collection("Employee").findOne({ "id":parseInt(req.params.id),"name":( req.params.name),"batch":parseInt(req.params.batch),"salary":parseInt(req.params.salary)},(err, result) => {
//         db.collection("ApolloUser").findOne(
//           { email: req.params.email },
//           (err, result) => {
//             if (err) {
//               //   throw err;
//             } else {
//               if (req.params.username === req.body.username) {
//                 res.send({ message: "Email already registered" });
//               } else {
//                 res.send({ message: "Email not registered" });
//               }
//             }
//           }
//         );
//       }
//     }); //my code
//   });
// module.exports = checkmail;
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const express = require("express");

const checkmail = express
  .Router()
  .post("/", (req, res) => {
    MongoClient.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
      if (err) {
        throw err;
      } else {
        db.collection("ApolloUser").findOne({ email: req.body.email }, (err, result) => {
          if (err) {
            throw err;
          } else {
            if (result) {
              res.send({ message: "Email already registered" });
            } else {
              res.send({ message: "Email not registered" });
            }
            db.close(); // Close the database connection
          }
        });
      }
    });
  });

module.exports = checkmail;
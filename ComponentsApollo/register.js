// // let mongodb= require('mongodb');
// // let client = mongodb.MongoClient;
// // let register = require("express").Router().post('/',(req,res)=>{
// //     client.connect("mongodb://localhost:27017/FSD54",(err,db)=>{
// //         if(err){
// //             throw err
// //         }
// //         else{
// //             db.collection("participants").insertOne({"name":req.body.name,"batch"}=>{

// //             })
// //         }
// //     })
// // })

// // let mongodb = require('mongodb');
// // let client = mongodb.MongoClient;
// // let register = require("express").Router().post('/',(req,res)=>{
// //     client.connect("mongodb://localhost:27017/batch54",(err,db)=>{
// //         if(err){
// //             throw err
// //         }else{
// //             // You need to specify the name of the database before accessing the collection
// //             // let dbo = db.db("FSD54");
// //             let db = db.db("batch54");
// //             // You were missing a colon after the batch key in the document
// //             db.collection("participants").insertOne({"name":req.body.name,"batch":req.body.batch},(err,result)=>{
// //                 if(err){
// //                     throw err
// //                 }else{
// //                     res.send(result)
// //                 }
// //             })
// //         }
// //     })
// // })
// let mongodb = require("mongodb");
// let talentsprint = mongodb.MongoClient;

// let login = require("express")
//   .Router()
//   .get("/:id/:name/:batch", (req, res) => { // You need to specify the parameters in the route path
//     talentsprint.connect("mongodb://localhost:27017/batch54", (err, db) => {
//       if (err) {
//         throw err;
//       } else {
//         // You need to specify the name of the database before accessing the collection
//         let dbo = db.db("batch54");
//         dbo.collection("Employee").findOne(
//           { id: req.params.id, name: req.params.name, batch: req.params.batch }, // You don't need to quote the field names unless they contain special characters
//           (err, result) => {
//             if (err) {
//               throw err;
//             } else {
//               res.send(result);
//             }
//           }
//         );
//       }
//     });
//   });
// module.exports = login;
// let mongodb = require("mongodb");
// let talentsprint = mongodb.MongoClient;

// let register = require("express").Router().post("/", (req, res) => {
//     talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//       if (err) throw err;
//       else {
//         db.collection("Apollo").insertOne(
//           {"username": req.body.username, "name": req.body.name, "mail": req.body.mail ,"password":(req.body.password),"confirmpassword":(req.body.confirmpassword)},
//           (err, result) => {
//             if (err) throw err;
//             res.send({ message: "1 document inserted" });
//             db.close();
//           }
//         );
//       }
//     });

 
//   });
// module.exports = register;
// let mongodb = require("mongodb");
// let talentsprint = mongodb.MongoClient;
// let register = require("express").Router().post("/", (req, res) => {
//     talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//       if (err) throw err;
//       else {
//         if(req.body.password !== req.body.confirmpassword) {
//             res.send({ message: "Passwords do not match" });
//         } else {
//             db.collection("ApolloUser").insertOne(
//               {"username": req.body.username, "name": req.body.name, "mail": req.body.mail ,"password":(req.body.password),"confirmpassword":(req.body.confirmpassword)},
//               (err, result) => {
//                 if (err) throw err;
//                 res.send(result);
//                 db.close();
//               }
//             );
//         }
//       }
//     });
// });
// module.exports = register;// actual code
// let mongodb = require("mongodb");
// let talentsprint = mongodb.MongoClient;
// let register = require("express").Router().post("/", (req, res) => {
//   talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//     if (err) {
//       res.status(500).send({ message: "Database connection error" });
//       return;
//     }

//     const username = req.body.username;
//     const email = req.body.mail;
//     const password = req.body.password;
//     const confirmpassword = req.body.confirmpassword;

//     // Add frontend validation checks
//     if (password !== confirmpassword) {
//       res.status(400).send({ message: "Passwords do not match" });
//       db.close();
//       return;
//     }

//     if (password.length < 8 || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password) || /\s/.test(password)) {
//       res.status(400).send({ message: "Password does not meet requirements" });
//       db.close();
//       return;
//     }

//     if (/\s/.test(username) || /\s/.test(email)) {
//       res.status(400).send({ message: "Spaces are not allowed in username or email" });
//       db.close();
//       return;
//     }

//     // Check if the username or email already exist in the database
//     db.collection("ApolloUser").findOne(
//       { $or: [{ "username": username }, { "mail": email }] },
//       (err, user) => {
//         if (err) {
//           res.status(500).send({ message: "Database error" });
//           db.close();
//           return;
//         }

//         if (user) {
//           res.status(400).send({ message: "Username or email already exists" });
//           db.close();
//           return;
//         }

//         // If all checks pass, insert the new user
//         db.collection("ApolloUser").insertOne(
//           {
//             "username": username,
//             "name": req.body.name,
//             "mail": email,
//             "password": password,
//             "confirmpassword": confirmpassword,
//           },
//           (err, result) => {
//             if (err) {
//               res.status(500).send({ message: "Database error" });
//             } else {
//               res.status(200).send({ message: "Registration successful" });
//             }
//             db.close();
//           }
//         );
//       }
//     );
//   });
// });

// module.exports = register;
let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;
let express = require("express");
let register = express.Router();

register.post("/", (req, res) => {
  talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
    if (err) {
      res.status(500).send({ message: "Database connection error" });
      return;
    }

    const username = req.body.username;
    const email = req.body.email; // changed from 'mail' to 'email'
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;

    // Add frontend validation checks
    if (password !== confirmpassword) {
      res.status(400).send({ message: "Passwords do not match" });
      db.close();
      return;
    }

    // Check if the username or email already exist in the database
    db.collection("ApolloUser").findOne(
      { $or: [{ "username": username }, { "email": email }] }, // changed from 'mail' to 'email'
      (err, user) => {
        if (err) {
          res.status(500).send({ message: "Database error" });
          db.close();
          return;
        }

        if (user) {
          res.status(400).send({ message: "Username or email already exists" });
          db.close();
          return;
        }

        // If all checks pass, insert the new user
        db.collection("ApolloUser").insertOne(
          {
            "username": username,
            "name": req.body.name,
            "email": email, // changed from 'mail' to 'email'
            "password": password,
            "confirmpassword": confirmpassword,
          },
          (err, result) => {
            if (err) {
              res.status(500).send({ message: "Database error" });
            } else {
              res.status(200).send({ message: "Registration successful" });
            }
            db.close();
          }
        );
      }
    );
  });
});

module.exports = register;

// const mongodb = require("mongodb");
// const { MongoClient } = mongodb;

// const register = require("express").Router().post("/", async (req, res) => {
//   try {
//     const client = new MongoClient("mongodb://localhost:27017", { useUnifiedTopology: true });
//     await client.connect();

//     const db = client.db("ApolloDB");
//     const collection = db.collection("ApolloUser");

//     const { username, mail, password, confirmpassword, name } = req.body;

//     // Add frontend validation checks
//     if (password !== confirmpassword) {
//       return res.status(400).send({ message: "Passwords do not match" });
//     }

//     if (password.length < 8 || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password) || /\s/.test(password)) {
//       return res.status(400).send({ message: "Password does not meet requirements" });
//     }

//     if (/\s/.test(username) || /\s/.test(mail)) {
//       return res.status(400).send({ message: "Spaces are not allowed in username or email" });
//     }

//     // Check if the username or email already exist in the database
//     const existingUser = await collection.findOne({ $or: [{ username }, { mail }] });
//     if (existingUser) {
//       return res.status(400).send({ message: "Username or email already exists" });
//     }

//     // If all checks pass, insert the new user
//     const result = await collection.insertOne({ username, name, mail, password, confirmpassword });
//     if (result.insertedCount === 1) {
//       return res.status(200).send({ message: "Registration successful" });
//     } else {
//       return res.status(500).send({ message: "Database error" });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send({ message: "Server error" });
//   } finally {
//     client.close();
//   }
// });

// module.exports = register;
// let mongodb = require("mongodb");//actual code
// let talentsprint = mongodb.MongoClient;
// let bcrypt = require('bcryptjs');

// let register = require("express").Router().post("/", (req, res) => {
//   bcrypt.hash(req.body.password, 8, (err, hashedPassword) => {
//     if (err) throw err;
//     else {
//       talentsprint.connect("mongodb://localhost:27017/batch54", (err, db) => {
//         if (err) throw err;
//         else {
//           db.collection("Employee").findOne({id: parseInt(req.body.id)}, (err, user) => {
//             if (user) {
//               res.send({ message: "User already exists" });
//               db.close();
//             } else {
//               db.collection("Employee").insertOne(
//                 {"id":parseInt(req.body.id), "name": req.body.name, "password":hashedPassword, "confirmpassword":hashedPassword,"batch": req.body.batch ,"salary":parseInt(req.body.salary)},
//                 (err, result) => {
//                   if (err) throw err;
//                   res.send({ message: "1 document inserted" });
//                   db.close();
//                 }
//               );
//             }
//           });
//         }
//       });
//     }
//   });
// });

// module.exports = register;




// const mongodb = require("mongodb");
// const express = require("express");
// const registerDoctor = express.Router();
// const MongoClient = mongodb.MongoClient;

// registerDoctor.post("/", (req, res) => {
//   MongoClient.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//     if (err) {
//       res.status(500).send({ message: "Database connection error" });
//       return;
//     }

//     const doctorusername = req.body.doctorusername;
//     const doctorname = req.body.doctorname;
//     const specialization = req.body.specialization;
//     const password = req.body.password;
//     const confirmpassword = req.body.confirmpassword;

//     // Add frontend validation checks
//     if (password !== confirmpassword) {
//       res.status(400).send({ message: "Passwords do not match" });
//       db.close();
//       return;
//     }

//     // Check if the doctor ID or email already exist in the database
//     db.collection("ApolloDoctor").findOne(
//       { $or: [{ "doctorid": doctorid }] },
//       (err, doctor) => {
//         if (err) {
//           res.status(500).send({ message: "Database error" });
//           db.close();
//           return;
//         }

//         if (doctor) {
//           res.status(400).send({ message: "Doctor ID already exists" });
//           db.close();
//           return;
//         }

//         // If all checks pass, insert the new doctor
//         db.collection("ApolloDoctor").insertOne(
//           {
//             "doctorusername": doctorusername,
//             "doctorname": doctorname,
//             "specialization": specialization,
//             "password": password,
//             "confirmpassword": confirmpassword,
//           },
//           (err, result) => {
//             if (err) {
//               res.status(500).send({ message: "Database error" });
//             } else {
//               res.status(200).send({ message: "Doctor registration successful" });
//             }
//             db.close();
//           }
//         );
//       }
//     );
//   });
// });

// module.exports = registerDoctor;
const express = require("express");
const mongodb = require("mongodb");
const talentsprint = mongodb.MongoClient;
let registerDoctor = express.Router();

registerDoctor.post("/", (req, res) => {
  talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
    if (err) {
      res.status(500).send({ message: "Database connection error" });
      return;
    }

    const username = req.body.username;
    const name = req.body.name;
    const email = req.body.email;
    const specialization = req.body.specialization;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    
    const doctorid = req.body.doctorid; // Define doctorid here

    // Add frontend validation checks
    if (password !== confirmpassword) {
      res.status(400).send({ message: "Passwords do not match" });
      db.close();
      return;
    }

    // Check if the doctor ID or email already exist in the database
    db.collection("ApolloDoctor").findOne(
      { $or: [{ "doctorid": doctorid }] },
      (err, doctor) => {
        if (err) {
          res.status(500).send({ message: "Database error" });
          db.close();
          return;
        }

        if (doctor) {
          res.status(400).send({ message: "Doctor ID already exists" });
          db.close();
          return;
        }

        // If all checks pass, insert the new doctor
        db.collection("ApolloDoctor").insertOne(
          {
            "username": username,
            "name": name,
            "email": email,
            "specialization": specialization,
            "password": password,
            "confirmpassword": confirmpassword,
            "doctorid": doctorid, // Add doctorid here
          },
          (err, result) => {
            if (err) {
              res.status(500).send({ message: "Database error" });
            } else {
              res.status(200).send({ message: "Doctor registration successful" });
            }
            db.close();
          }
        );
      }
    );
  });
});

module.exports = registerDoctor;

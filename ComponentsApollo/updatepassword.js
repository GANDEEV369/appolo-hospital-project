// let mongodb = require("mongodb");
// let talentsprint = mongodb.MongoClient;

// let update = require("express").Router().put("/", (req, res) => {
//     talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//       if (err) throw err;
//       else {
//         var newvalues = {
//           $set: {  "name": (req.body.name), "batch": parseInt(req.body.batch),"salary":parseInt(req.body.salary) },
//         };
//         db.collection("Apollo").updateOne(
//           { mail:req.body.mail, password:req.body.password },
//           newvalues,
//           (err, result) => {
//             if (err) throw err;
//             else res.send({ message: "1 document updated" });
//             db.close();
//           }
//         );
//       }
//     });
//   });

// module.exports = update;
let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let updatepassword = require("express").Router().put("/", (req, res) => {
    talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
      if (err) throw err;
      else {
        var newvalues = {
          $set: {  "name": (req.body.name), "batch": parseInt(req.body.batch),"salary":parseInt(req.body.salary), "password":(req.body.newpassword) },
        };
        db.collection("ApolloUser").updateOne(
          { mail:req.body.mail, password:req.body.password },
          newvalues,
          (err, result) => {
            if (err) throw err;
            else res.send({ message: "1 document updated" });
            db.close();
          }
        );
      }
    });
});

module.exports = updatepassword;

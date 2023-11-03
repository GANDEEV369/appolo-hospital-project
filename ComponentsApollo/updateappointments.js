let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let updateappointments = require("express").Router().put("/", (req, res) => {
    talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
      if (err) throw err;
      else {
        var newvalues = {
          $set: {  "name": (req.body.name), "phonenumber": parseInt(req.body.phonenumber),"email":req.body.email,"city":req.body.city,"age":parseInt(req.body.age)},
        };
        db.collection("ApolloAppointment").updateOne(
          { email:req.body.email },
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

module.exports = updateappointments;
let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let deleteappointment = require("express")
  .Router()
  .delete("/:username", (req, res) => {
    talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
      if (err) throw err;
      else {
        db.collection("ApolloAppointment").deleteOne(
          // { id: parseInt(req.params.id )},
          { email: (req.params.email )},
          (err, result) => {
            if (err) {
            throw err;}
            else{
            res.send({ message: "1 document deleted" });}
            db.close();
          }
        );
      }
    });
  });

module.exports = deleteappointment;

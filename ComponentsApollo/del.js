let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let del = require("express")
  .Router()
  .delete("/:username", (req, res) => {
    talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
      if (err) throw err;
      else {
        db.collection("ApolloUser").deleteOne(
          // { id: parseInt(req.params.id )},
          { username: (req.params.username ),password:(req.params.password)},
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

module.exports = del;

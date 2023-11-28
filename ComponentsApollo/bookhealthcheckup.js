let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;
// const name = req.body.name;
// const phonenumber = parseInt(req.body.phonenumber);
// const email = req.body.email;
// const city = req.body.city;
// const age = parseInt(req.body.age);
// const formData=req.body;
let bookhealthcheckup = require("express").Router().post("/", (req, res) => {
  const formData=req.body;
    talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
      if (err) throw err;
      else {
        
        db.collection("ApolloCheckUp").insertOne(
          {
            // "name": name,
            // "phonenumber": phonenumber,
            // "email": email,
            // "city": city,
            // "age": age,
            formData
             
          },
          (err, result) => {
            if (err) throw err;
            // res.send({ message: "1 document inserted" });
            res.send({result});
            db.close();
          }
        );
      }
    });

 
  });
module.exports= bookhealthcheckup;
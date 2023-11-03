// let mongodb = require("mongodb");
// let talentsprint = mongodb.MongoClient;
// // let login = require("express").Router().get("/:id", (req, res) => {
// let login = require("express").Router().get("/:username/:password", (req, res) => {
//     talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//       if (err) {
//         throw err;
//       } else {
//         // db.collection("Employee").findOne({ "id":parseInt(req.params.id),"name":( req.params.name),"batch":parseInt(req.params.batch),"salary":parseInt(req.params.salary)},(err, result) => {
//           db.collection("ApolloUser").findOne({ "username":req.params.username,"password":(req.params.password)},(err, result) => {
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
// const express = require("express");
// const mongodb = require("mongodb");
// const talentsprint = mongodb.MongoClient;
// // const app = express();
// let login=require("express").Router.get("/:username/:password", (req, res) => {
//   talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//     if (err) {
//       throw err;
//     } else {
//       const username = req.params.username;
//       const password = req.params.password;
//       // First, check if it's a user
//       db.collection("ApolloUser").findOne({ "username": username, "password": password }, (err, user) => {
//         if (err) {
//           throw err;
//         }

//         if (user) {
//           res.send({ userType: "user", user });
//         } else {
//           // If it's not a user, check if it's a doctor
//           db.collection("ApolloDoctor").findOne({ "doctorid": username, "password": password }, (err, doctor) => {
//             if (err) {
//               throw err;
//             }

//             if (doctor) {
//               res.send({ userType: "doctor", doctor });
//             } else {
//               // Neither user nor doctor found
//               res.send({ userType: "none" });
//             }
//           });
//         }
//       });
//     }
//   });
// });
// module.exports= login;
// const express = require("express");
// const mongodb = require("mongodb");
// const talentsprint = mongodb.MongoClient;
// let login = express.Router();

// login.get("/:username/:password", (req, res) => {
//   talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//     if (err) {
//       throw err;
//     } else {
//       const username = req.params.username;
//       const password = req.params.password;
//       // First, check if it's a user
//       db.collection("ApolloUser").findOne({ "username": username, "password": password }, (err, user) => {
//         if (err) {
//           throw err;
//         }

//         if (user) {
//           // Check if the user is an admin
//           if (username === "admin") {
//             res.send({ userType: "admin", user });
//           } else {
//             res.send({ userType: "user", user });
//           }
//         } else {
//           // If it's not a user, check if it's a doctor
//           db.collection("ApolloDoctor").findOne({ "doctorid": username, "password": password }, (err, doctor) => {
//             if (err) {
//               throw err;
//             }

//             if (doctor) {
//               res.send({ userType: "doctor", doctor });
//             } else {
//               // Neither user nor doctor found
//               res.send({ userType: "none" });
//             }
//           });
//         }
//       });
//     }
//   });
// });

// module.exports = login;

// const express = require("express");
// const mongodb = require("mongodb");
// const talentsprint = mongodb.MongoClient;
// let login = express.Router();

// login.get("/:username/:password", (req, res) => {
//   talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//     if (err) {
//       throw err;
//     } else {
//       const username = req.params.username;
//       const password = req.params.password;
//       // First, check if it's a user
//       db.collection("ApolloUser").findOne({ "username": username, "password": password }, (err, user) => {
//         if (err) {
//           throw err;
//         }

//         if (user) {
//           // Check if the user is an admin
//           if (username === "admin") {
//             res.send({ userType: "admin", user });
//           } else {
//             res.send({ userType: "user", user });
//           }
//         } else {
//           // If it's not a user, check if it's a doctor
//           db.collection("ApolloDoctor").findOne({ "doctorid": username, "password": password }, (err, doctor) => {
//             if (err) {
//               throw err;
//             }

//             if (doctor) {
//               res.send({ userType: "doctor", doctor });
//             } else {
//               // Neither user nor doctor found
//               res.send({ userType: "none" });
//             }
//           });
//         }
//       });
//     }
//   });
// });

// module.exports = login;
// const express = require("express");
// const mongodb = require("mongodb");
// const talentsprint = mongodb.MongoClient;
// const login = express.Router();

// login.get("/:username/:password", (req, res) => {
//   talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//     if (err) {
//       console.error("Error connecting to the database:", err);
//       res.status(500).send("Database connection error");
//       return;
//     }

//     const username = req.params.username;
//     const password = req.params.password;

//     db.collection("ApolloUser").findOne({ "username": username, "password": password }, (err, user) => {
//       if (err) {
//         console.error("Error querying the database:", err);
//         res.status(500).send("Database query error");
//         return;
//       }

//       if (user) {
//         const userType = username === "admin" ? "admin" : username === "doctor" ? "doctor" : "user";
//         res.send({ userType, user });
//       } else {
//         res.send({ userType: "none" });
//       }
//     });
//   });
// });
// module.exports= login;
// const express = require("express");
// const mongodb = require("mongodb");
// const talentsprint = mongodb.MongoClient;
// const login = express.Router();

// login.get("/:username/:password", (req, res) => {
//   talentsprint.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//     if (err) {
//       console.error("Error connecting to the database:", err);
//       res.status(500).send("Database connection error");
//       return;
//     }

//     const username = req.params.username;
//     const password = req.params.password;

//     db.collection("ApolloUser").findOne({ "username": username, "password": password }, (err, user) => {
//       if (err) {
//         console.error("Error querying the database:", err);
//         res.status(500).send("Database query error");
//         return;
//       }

//       if (user) {
//         const userType = username === "admin" ? "admin" : username === "doctor" ? "doctor" : "user";
//         res.send({ userType, user });
//       } else {
//         res.send({ userType: "none" });
//       }
//     });
//   });
// });

// module.exports = login;
// const express = require("express");
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// let login = express.Router();

// login.get("/:username/:password", (req, res) => {
//   MongoClient.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//     if (err) {
//       console.error("Error connecting to the database:", err);
//       res.status(500).send("Database connection error");
//       return;
//     }

//     const username = req.params.username;
//     const password = req.params.password;

//     db.collection("ApolloUser").findOne({ "username": username, "password": password }, (err, user) => {
//       if (err) {
//         console.error("Error querying the database:", err);
//         res.status(500).send("Database query error");
//         return;
//       }

//       if (user) {
//         const userType = username === "admin" ? "admin" : "user";
//         res.send({ userType, user });
//       } else {
//         // If it's not a user or admin, check if it's a doctor
//         db.collection("ApolloDoctor").findOne({ "username": username, "password": password }, (err, doctor) => {
//           if (err) {
//             console.error("Error querying the database:", err);
//             res.status(500).send("Database query error");
//             return;
//           }

//           if (doctor) {
//             res.send({ userType: "doctor", user });
//           } else {
//             // Neither user, admin nor doctor found
//             res.send({ userType: "none" });
//           }
//         });
//       }
//     });
//   });
// });

// module.exports = login;
// const express = require("express");
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// let login = express.Router();

// login.get("/:username/:password", (req, res) => {
//   MongoClient.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//     if (err) {
//       console.error("Error connecting to the database:", err);
//       res.status(500).send("Database connection error");
//       return;
//     }

//     const username = req.params.username;
//     const password = req.params.password;

//     db.collection("ApolloUser").findOne({ "username": username, "password": password }, (err, user) => {
//       if (err) {
//         console.error("Error querying the database:", err);
//         res.status(500).send("Database query error");
//         return;
//       }

//       if (user) {
//         const userType = username === "admin" ? "admin" : "user";
//         res.send({ userType, [userType]: user });
//       } else {
//         // If it's not a user or admin, check if it's a doctor
//         db.collection("ApolloDoctor").findOne({ "username": username, "password": password }, (err, doctor) => {
//           if (err) {
//             console.error("Error querying the database:", err);
//             res.status(500).send("Database query error");
//             return;
//           }

//           if (doctor) {
//             res.send({ userType: "doctor", doctor });
//           } else {
//             // Neither user, admin nor doctor found
//             res.send({ userType: "none" });
//           }
//         });
//       }
//     });
//   });
// });

// module.exports = login;
const express = require("express");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let login = express.Router();

login.get("/:username/:password", (req, res) => {
  MongoClient.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      res.status(500).send("Database connection error");
      return;
    }

    const username = req.params.username;
    const password = req.params.password;

    db.collection("ApolloUser").findOne({ "username": username, "password": password }, (err, user) => {
      if (err) {
        console.error("Error querying the database:", err);
        res.status(500).send("Database query error");
        return;
      }

      if (user) {
        const userType = username === "admin" ? "admin" : "user";
        res.send({ userType, [userType]: user });
      } else {
        // If it's not a user or admin, check if it's a doctor
        db.collection("ApolloDoctor").findOne({ "username": username, "password": password }, (err, doctor) => {
          if (err) {
            console.error("Error querying the database:", err);
            res.status(500).send("Database query error");
            return;
          }

          if (doctor) {
            res.send({ userType: "doctor", doctor });
          } else {
            // Neither user, admin nor doctor found
            res.status(401).send("Login failed");
          }
        });
      }
    });
  });
});

module.exports = login;

// const express = require("express");
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// let login = express.Router();

// login.get("/:username/:password", (req, res) => {
//   MongoClient.connect("mongodb://localhost:27017/ApolloDB", (err, db) => {
//     if (err) {
//       console.error("Error connecting to the database:", err);
//       res.status(500).send("Database connection error");
//       return;
//     }

//     const username = req.params.username;
//     const password = req.params.password;

//     db.collection("ApolloUser").findOne({ "username": username, "password": password }, (err, user) => {
//       if (err) {
//         console.error("Error querying the database:", err);
//         res.status(500).send("Database query error");
//         return;
//       }

//       if (user) {
//         const userType = username === "admin" ? "admin" : "user";
//         res.send({ userType, user });
//       } else {
//         // If it's not a user or admin, check if it's a doctor
//         db.collection("ApolloDoctor").findOne({ "doctorid": username, "password": password }, (err, doctor) => {
//           if (err) {
//             console.error("Error querying the database:", err);
//             res.status(500).send("Database query error");
//             return;
//           }

//           if (doctor) {
//             // Send doctor details in 'user' property
//             res.send({ userType: "doctor", user: doctor });
//           } else {
//             // Neither user, admin nor doctor found
//             res.send({ userType: "none" });
//           }
//         });
//       }
//     });
//   });
// });

// module.exports = login;

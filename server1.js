// let express = require('express');
// let app = express();
// let cors = require('cors');
// app.use(cors());
// let data= require('./FRONT END/data.json')
// let bodyparser=require('body-parser');
// app.use(bodyparser.urlencoded({extended: false}))
// // (bodapp).useyparser.urlencoded({extended: false})
// app.use(bodyparser.json())
// app.get('/Ram',(req,res)=>{
//     res.send('Welcome to Express')
// });
// app.get('/',(req,res)=>{
//     res.send(data);
// });
// app.use('/fetch', require('./components/fetch'));
// app.use('/register', require('./ComponentsApollo/register'));
// app.use('/register/check', require('./ComponentsApollo/register'));
// app.use('/updatepassword', require('./ComponentsApollo/updatepassword'));
// app.use('/login', require('./ComponentsApollo/login'));
// app.use('/del', require('./ComponentsApollo/del'));
// app.use('/checkusername', require('./ComponentsApollo/checkusername'));
// app.use('/checkemail', require('./ComponentsApollo/checkemail'));
// app.use('/registerDoctor', require('./ComponentsApollo/registerDoctor'));

// app.listen(3005 ,(req,res)=>{
//     console.log('Server running')
// });
const express = require('express');
const mongodb = require('mongodb');
const talentsprint = mongodb.MongoClient;
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Sample data from data.json
const data = require('./FRONT END/data.json');

app.get('/Ram', (req, res) => {
  res.send('Welcome to Express');
});

app.get('/', (req, res) => {
  res.send(data);
});

// Routes for different components
app.use('/fetch', require('./ComponentsApollo/fetch'));
app.use('/fetchdoctor', require('./ComponentsApollo/fetchdoctor'));
app.use('/fetchappointments',require('./ComponentsApollo/fetchappointments'));
app.use('/register', require('./ComponentsApollo/register'));
app.use('/bookappointment', require('./ComponentsApollo/bookappointment'));
app.use('/bookhealthcheckup', require('./ComponentsApollo/bookhealthcheckup'));
app.use('/register/check', require('./ComponentsApollo/register'));
app.use('/updateappointments', require('./ComponentsApollo/updateappointments'));
app.use('/login', require('./ComponentsApollo/login'));
app.use('/del', require('./ComponentsApollo/del'));
app.use('/checkusername', require('./ComponentsApollo/checkusername'));
app.use('/checkemail', require('./ComponentsApollo/checkemail'));
app.use('/registerDoctor', require('./ComponentsApollo/registerDoctor'));

app.listen(3005, () => {
  console.log('Server is running on port 3005');
});

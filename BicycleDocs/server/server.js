




const express = require("express");

const cors= require ("cors");

const app = express()

var dbconnection= require('./db');

var schoolsRoute= require('./routes/schoolsRoute');

var usersRoute= require('./routes/usersRoute')

var pricesRoute= require('./routes/pricesRoute')

var addressRoute= require('./routes/addressesRoute')

var subscriptionRoute= require('./routes/subscriptionRoute')

var seasonsRoute= require('./routes/seasonsRoute')

var parentsRoute= require('./routes/parentsRoute')

var childrenRoute= require('./routes/childrenRoute')

var imagesRoute= require('./routes/imagesRoute')

const {application} = require("express");  



app.use(express.urlencoded({
    extended: true
  }));

  app.use(express.json());

  //app.use('/images', express.static('images'));


  app.use(cors({
    origin: 'http://localhost:3000'
  }))

  app.use('/api/schools/', schoolsRoute)

  app.use('/api/users/', usersRoute)

  app.use('/api/prices/', pricesRoute)

  app.use('/api/subscriptions/', subscriptionRoute)

  app.use('/api/addresses', addressRoute)

  app.use('/api/seasons', seasonsRoute)

  app.use('/api/parents/', parentsRoute)

  app.use('/api/children', childrenRoute)

  app.use('/api/images', express.static('images'), imagesRoute)





app.get("/",(req, res)=>{
    res.send("This is from backend")
}
);



const port=5000;

app.listen(port, ()=> console.log(`Node JS Server Started`));
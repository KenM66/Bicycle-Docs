

const mongoose= require("mongoose");
require('dotenv').config();

var mongoDBURL= process.env.DATABASE

console.log(process.env.DATABASE);
console.log(process.env.EMAIL);
console.log(process.env.PASS);

mongoose.connect(mongoDBURL, {useUnifiedTopology:true, useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error', ()=>{
    console.log('Mongo DB Connection Failed');
})

dbconnect.on('connected', ()=>{
    console.log('Mongo DB Connection Successful')

})


module.exports= mongoose
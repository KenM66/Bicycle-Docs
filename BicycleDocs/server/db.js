

const mongoose= require("mongoose");

var mongoDBURL= 'mongodb+srv://kenm66:rookie12@cluster0.tcg29.mongodb.net/Bicycle-Docs'

mongoose.connect(mongoDBURL, {useUnifiedTopology:true, useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error', ()=>{
    console.log('Mongo DB Connection Failed');
})

dbconnect.on('connected', ()=>{
    console.log('Mongo DB Connection Successful')

})


module.exports= mongoose
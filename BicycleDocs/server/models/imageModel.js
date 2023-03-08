const mongoose= require('mongoose');

const imageSchema= new mongoose.Schema({

    name:{
        type: String, 
        require: true
    }

})

const Image= mongoose.model('images', imageSchema)

module.exports= Image
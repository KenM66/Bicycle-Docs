const mongoose= require("mongoose");

const childSchema= new mongoose.Schema({
    firstName:{
        type: String, 
        require: true
    },
    lastName:{
        type: String, 
        require: true
    }, 

    dateOfBirth:{
        type: Date, 
        require: true
    },

    image:{
        type: mongoose.Schema.Types.ObjectId, ref: 'images'
    },
   

    parent:{
        type: mongoose.Schema.Types.ObjectId, ref: "parents"
    },

    seasons: [
        {type: mongoose.Schema.Types.ObjectId, ref: "seasons"}
    ]


});

const Child= mongoose.model('children', childSchema);

module.exports= Child;
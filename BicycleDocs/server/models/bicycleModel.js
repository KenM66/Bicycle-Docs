const mongoose= require("mongoose");

const {Schema} = mongoose;

const bicycleSchema= new Schema({

    brand: {
        type: String, 
        require: true
    },

    color: {
        type: String,
        require: true

    },
    
    serialNumber:{
        type: String,
        require: true
    },

    child:{
        type: mongoose.Schema.Types.ObjectId, ref: "children"
    }

    

})


const Bicycle= mongoose.model('bicycles', bicycleSchema)

module.exports= Bicycle;


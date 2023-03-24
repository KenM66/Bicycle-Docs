const mongoose= require("mongoose");

const {Schema} = mongoose;

const bicycleSchema= new Schema({

    brand: {
        type: String, 
        require: true
    },
    model:{
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
    image:{
        type: mongoose.Schema.Types.ObjectId, ref: 'images'
    },
   

    child:{
        type: mongoose.Schema.Types.ObjectId, ref: "children"
    }

    

})


const Bicycle= mongoose.model('bicycles', bicycleSchema)

module.exports= Bicycle;


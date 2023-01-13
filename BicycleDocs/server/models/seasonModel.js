
const mongoose = require ('mongoose');

const seasonSchema= mongoose.Schema({
    name:{
        type: String, 
        require: true
    },
    start: {
        type: Date, 
        require: true

    },

    end: {
        type: Date, 
        require: true
    }, 

    price: {
        type: Number, 
        require: true
    }, 
    school: {
        type: mongoose.Schema.Types.ObjectId, ref: 'schools'
    }, 
    isOpen: {
        type: Boolean, 
        require: true
    },
    maximum: {
        type: Number, 
        require: true
    }

    

})

const Season= mongoose.model('seasons', seasonSchema);

module.exports= Season;




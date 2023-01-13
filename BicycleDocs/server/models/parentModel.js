
const mongoose= require("mongoose");

const parentSchema= new mongoose.Schema({
    firstName:{
        type: String, 
        require: true
    },
    lastName:{
        type: String, 
        require: true
    },
    homeAddress:{
        type: mongoose.Schema.Types.ObjectId, ref: 'addresses'
    }, 
    user:{
        type: mongoose.Schema.Types.ObjectId, ref: "users"
    }
})

const Parent= mongoose.model('parents', parentSchema);

module.exports= Parent;
const mongoose= require("mongoose");

const {Schema} = mongoose;


const userSchema= new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    
    password:{
        type: String,
        require: true
    },
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
   
    userType: {
        type: String,
        require: true
    },
    phone: {
        type: String, 
        require: true
    },

    confirmed:{
        type: Boolean, 
        require: true
    },

    stripe_customer_id: String, 
    subscriptions:[],
    

})



const User = mongoose.model('users', userSchema);




module.exports= User;
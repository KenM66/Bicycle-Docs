

const mongoose = require ("mongoose");

const autoIncrement= require('mongoose-sequence')(mongoose);




const schoolSchema= mongoose.Schema({

    name:{
        type: String, 
        required: true
    },

    billingAddress: {
    type: mongoose.Schema.Types.ObjectId, ref: 'addresses'},

    contactFirstName:{
        type: String, 
        required: true
    },

    contactLastName: {
        type: String, 
        required: true
    },



    phone: {
        type: String, 
        required: true
    },

    users: [
        {type: mongoose.Schema.Types.ObjectId, ref: "users"}
    ]
    





})


schoolSchema.plugin(autoIncrement, {inc_field: 'id'});
const School= mongoose.model('schools', schoolSchema);

module.exports= School;
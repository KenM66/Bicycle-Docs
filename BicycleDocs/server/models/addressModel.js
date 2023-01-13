const mongoose= require("mongoose");

const addressSchema=  mongoose.Schema({
    addressLine: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    postalCode: { type: String, required: true},
    country: {type: String, required: [true, "United States"]}
  
});

const Address= mongoose.model('addresses', addressSchema);

module.exports= Address;



const mongoose= require("mongoose");

const registrationSchema= new mongoose.Schema(
    {
        purchaseDate:{
            type: Date, 
            require: true
        }, 
        orderStatus:{
            type: String, 
            require: true
        },
        stickerNumber:{
            type: String, 
            require: true
        }, 
        student:{
            type: mongoose.Schema.Types.ObjectId, ref: "students"
        }, 
        child: {
            type: mongoose.Schema.Types.ObjectId, ref: "children"
        },
        parent:{
            type: mongoose.Schema.Types.ObjectId, ref: "parents"
        },
        bicycle: {
            type: mongoose.Schema.Types.ObjectId, ref: "bicycles"
        }, 
        season: {
            type: mongoose.Schema.Types.ObjectId, ref: "seasons"
        },
        school: {
            type: mongoose.Schema.Types.ObjectId, ref: "schools"
        }, 
        transactionId: {
            type: String, 
            require: true
        }
    }
);

const Registration= mongoose.model("registrations", registrationSchema);
module.exports= Registration;

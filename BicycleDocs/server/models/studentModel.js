const mongoose= require("mongoose");

const studentSchema= new mongoose.Schema({
    firstName:{
        type: String,
        require: true
    },
    lastName: {
        type: String, 
        require: true
    },
    studentId: {
        type: String,
        require: true
    },
    dateOfBirth: {
        type: Date, 
        require: true
    }

});

const Student= mongoose.model('students', studentSchema);
mongoose.exports= Student;
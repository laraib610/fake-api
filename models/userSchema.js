const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({

    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email: {
        type: String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    created: {
        type: Date,
        default: new Date()
    },
    modified: {
        type: Date,
        default: new Date()
    },
    datetime: {
        type: String,
        default: new Date()
    }

})

module.exports = mongoose.model("User", UserSchema)
const mongoose = require("mongoose");


const BlogSchema = mongoose.Schema({

    title:{
        type:String
    },
    userId:{
        type:String
    },
    content:{
        type:String
    },
    author: {
        type: String,
    },
    isPublished:{
        type:Boolean
    },
    imageUrl:{
        type:String
    },
    tags:{
        type:String
    },
    publishedDate:{
        type: Date,
        default: new Date()
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

module.exports = mongoose.model("Blog", BlogSchema)
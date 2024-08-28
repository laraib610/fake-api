const Blogs = require("../models/blogsSchema");
const { options } = require("../routes/blog.routes");

exports.CreateBlog = async (req, res) => {
    console.log("req.body: ", req.body);
    const data = req.body
    const response= new Blogs({
        title:data.title,
        userId:data.userId,
        author:data.author,
        tags:data.tags,
        content:data.content,
        isPublished:data.isPublished,
        imageUrl:data.imageUrl,
        publishedDate:new Date()

    })
   const respo=await response.save();
    if(respo){
        res.status(200).send({
            message: 'Blog created successfully'
        })
    }
 
    
}
exports.getBlogs = async (req, res) => {

    const response =await Blogs.find().populate([])
    if(response){
        res.status(200).send({
            data:response
        })
    }else{
        res.status(404).send({
            message: 'Blogs not found'
        })
    }
        
    
}
exports.deleteBlog = async (req, res) => {
    const {id}=req.params
        const response =await Blogs.deleteOne({
        _id:id
    })
    if(response){
        res.status(200).send({
           message:"Blog deleted successfully"
        })
    }else{
        res.status(404).send({
            message: 'Blogs not found'
        })
    }
}
exports.UpdateBlog = async (req, res) => {
    const {id}=req.params
    const data=req.body
        const response =await Blogs.findOneAndUpdate({_id:id}, data)
    if(response){
        res.status(200).send({
           message:"Blog Updated",
           data:response
        })
    }else{
        res.status(404).send({
            message: 'Blogs not found'
        })
    }
}
exports.getBlogsByUserId = async (req, res) => {
    const{userId}= req.params

    const response =await Blogs.find({
        userId:userId
    }).populate([])
    if(response){
        res.status(200).send({
            data:response
        })
    }else{
        res.status(404).send({
            message: 'Blogs not found'
        })
    }
        
    
}
exports.publishBlog = async (req, res) => {
    const {id}= req.params
    const {isPublished}=req.body

    const response =await Blogs.findOneAndUpdate({_id:id},
        {isPublished:isPublished,publishedDate:new Date()}).populate([])
    if(response){
        res.status(200).send({
            data:response
        })
    }else{
        res.status(404).send({
            message: 'Blogs not found'
        })
    }
        
    
}
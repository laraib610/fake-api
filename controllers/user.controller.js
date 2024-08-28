const UserSchema= require("../models/userSchema");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const userSchema = require("../models/userSchema");

exports.signin = async (req, res) => {
    console.log("req.body: ", req.body);
    const { email, password } = req.body
    let user=await UserSchema.findOne({
        email: email,
        password: password
    })
    if (user) {
        res.status(200).send({
            id:user._id,
            email: email,
            token:  await getJwtToken(user)
        })
    } else {
        res.status(404).send({
            message: 'Email not found'
        })
    }
}
exports.signUp = async (req, res)=>{
    // console.log("req.body: ", req);
    const data = req.body
    console.log(data)
    let user=await UserSchema.findOne({
        email: data.email,
    })
    console.log(user)
    if(!user){
        const response= new UserSchema({
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            password:data.password
        })
       const respo=await response.save();
        if(respo){
            res.status(200).send({
                message: 'User created successfully'
            })
        }

    }else {
        res.status(409).send({
            message: 'Email already exist'
        })
    }
    

}
async function getJwtToken(user) {
    let jwtSecretKey = "secret";
    let jwtExpiresIn = '24';
    let data = {
      time: moment().add(jwtExpiresIn, "hours").format("YYYY-MM-DD HH:mm:ss"),
      email: user.email,
      firstName: user?.firstName || null,
      lastName: user?.lastName || null,
      id: user.id || null
    };
  
    const token = jwt.sign(data, jwtSecretKey);
    return token;
}

exports.createUser = async (req, res)=>{
    const data = req.body
    console.log(data)
    let user=await UserSchema.findOne({
        email: data.email,
    })
    console.log(user)
    if(!user){
        const response= new UserSchema({
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            password:data.password
        })
       const respo=await response.save();
        if(respo){
            res.status(200).send({
                message: 'User created successfully'
            })
        }

    }else {
        res.status(409).send({
            message: 'Email already exist'
        })
    }
    

}
exports.getUsers = async (req, res) => {

    const response =await UserSchema.find().populate([])
    if(response){
        res.status(200).send({
            data:response
        })
    }else{
        res.status(404).send({
            message: 'Users not found'
        })
    }
        
    
}
exports.deleteUser = async (req, res) => {
    const {id}=req.params
        const response =await userSchema.deleteOne({
        _id:id
    })
    if(response){
        res.status(200).send({
           message:"User deleted successfully"
        })
    }else{
        res.status(404).send({
            message: 'User not found'
        })
    }
}
exports.UpdateUser = async (req, res) => {
    const {id}=req.params
    const data=req.body
        const response =await userSchema.findOneAndUpdate({_id:id}, data)
    if(response){
        res.status(200).send({
           message:"User Updated",
           data:response
        })
    }else{
        res.status(404).send({
            message: 'User not found'
        })
    }
}
exports.getUserById = async (req, res) => {
    const{id}= req.params

    const response =await userSchema.find({
        _id:id
    }).populate([])
    if(response){
        res.status(200).send({
            data:response
        })
    }else{
        res.status(404).send({
            message: 'User not found'
        })
    }
        
    
}
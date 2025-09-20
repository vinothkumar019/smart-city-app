const mongoose = require('momgoose');

const userSchema = new mongoose.Schema({
    name:{type:String,required:true,},
    email:{type:email,required:true,unique:true},
    password:{type:password,required:true},
},{timestamps:ture});

module.exports  = mongoose.model('User',userSchema);
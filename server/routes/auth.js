const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/regiser',async(req,res)=>{
    const {name,email,password} = req.body;

try{
    const AlreadyUser = await User.findOne({email});
    if(AlreadyUser) return res.status(400).json({message:'User Already Exist'});
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User({name,email,password:hashedPassword});
    newUser.save(); 
    res.status(200).json({message:'User Register Succesfully !'});
    }

    catch(err) {
        console.log('Error in Registering !');
        res.status(500).json({message:'Server Error !'});
    }

});

module.exports = router;
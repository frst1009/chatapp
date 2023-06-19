const express = require('express');
const userRoutes = express.Router();
const User=require('../models/User');

userRoutes.post('/signup', async(req,res)=>{
    try{
        const{name, password}=req.body;
        console.log(req.body);
        const user = await User.create({name,password})
    res.status(201).json(user);
    }
    catch(e)
    {
        let msg;
        if(e.code==11000){
            msg="Try another username"
        }
        else{
            msg=e.message;
        }
        console.log(e);
        res.status(400).json(msg)
    }
})

userRoutes.post('/login', async(req,res)=>{
    try {
        const{name, password}=req.body;
        const user=await User.findByCredentials(name, password);
        user.status='online';
        await user.save();
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json(e.message)
    }
})

module.exports=userRoutes
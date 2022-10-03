const express = require('express');
const PostModels=require('../models/postModels')

const route=express.Router();

route.get('/',(req,rep)=>{
    PostModels.find((err,docs)=>{
        if(!err)
            console.log(docs)
        else
            console.log(err);
    })
})
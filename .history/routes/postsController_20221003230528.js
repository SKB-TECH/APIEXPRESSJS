const express = require('express');
const PostModels=require('../models/postModels')

const route=express.Router();

route.get('/',(req,rep)=>{
    PostModels.find
})
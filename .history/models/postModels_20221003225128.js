const mongoose = require('mongoose');
import { type } from '../node_modules/mongoose/types/query.d';

const PostModels=mongoose.model(
    "node-api",
    {
        author:{
            type:String,
            require
        }
    }
)
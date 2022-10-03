const mongoose = require('mongoose');
import { type } from '../node_modules/mongoose/types/query.d';

const PostModels = mongoose.model(
    "node-api",
    {
        author: {
            type: String,
            require: true
        },
        message: {
            type: String,
            require: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    "posts"
)

module.exports={PostModels}
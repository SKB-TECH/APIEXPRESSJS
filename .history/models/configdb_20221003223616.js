const mongoose = require('mongoose');

//connection a la base des donnes

mongoose.connect("mongodb://localhost:27017/node-api",
    {userNewUrlParser:true,userUnifiedTopology:true}
)
const express = require('express')
require('./models/configdb')
const app = express()

app.listen(3002, () => {
    console.log('Server pret pour les requettes')
})
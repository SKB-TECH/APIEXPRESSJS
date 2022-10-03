const express = require('express')
require('./models/configdb')
const app = express()

app.listen(5500, () => {
    console.log('Server pret pour les requettes')
})
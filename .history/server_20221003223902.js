const express = require('express')
require('/.')
const app = express()

app.listen(3002, () => {
    console.log('Server pret pour les requettes')
})
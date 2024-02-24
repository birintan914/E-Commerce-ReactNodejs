const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("<h1>app.js is working...</h1>")
})

app.listen(5000)
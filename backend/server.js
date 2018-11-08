const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000

const app = express()

app.use(express.static(__dirname + '/public'))


app.get('*', (req,res) =>{
res.redirect('https://findthatmovie.tv');
})
app.listen(port)

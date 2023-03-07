const express = require('express')

const app = express()

app.listen('3000')


// GET
// app.route('/').get( (req, res) => res.send('hello') )
// app.route('/sobre').get( (req, res) => res.send('hello, sobre!') )

//POST
//middleware
//app.use(express.json())
//app.route('/').post( (req, res) => console.log(req.body))
//app.route('/').post( (req, res) => res.send(req.body))


//PUT
//middleware
app.use(express.json())

let author = 'Camila'

app.route('/').get( (req, res) => res.send(author))

app.route('/').put( (req, res) => {
    author = req.body
    res.send(author)
})



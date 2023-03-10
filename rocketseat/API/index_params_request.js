// - parâmetros na requisição
// passar para dentro do código informações que não estavam lá.


const express = require('express')

const app = express()

app.listen('3000')

//middleware
app.use(express.json())

//3 forma:

// informar no brownser: http://localhost:3000/?name=Camila
app.route('/').get( (req, res) => res.send(req.query.name))

app.route('/').post( (req, res) => res.send(req.body))

app.route('/:parametro').get( (req, res) => res.send(req.params.parametro))

// - body params: enviar informações através do body

const express = require('express')

const app = express() 

app.listen('3000')

//middleware: utilizar sempre que tiver falando em json com body

app.use(express.json())

app.route('/').post( (req, res) => {
    res.send(req.body)
})
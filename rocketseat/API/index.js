//criação de server

const express = require('express')

const app = express()

app.listen('3000')


//criação de rotas/requisições:

// 1. GET
// app.route('/').get( (req, res) => res.send('hello') )
// app.route('/sobre').get( (req, res) => res.send('hello, rota sobre!') )

//2. POST
//middleware
// app.use(express.json())
// app.route('/').post( (req, res) => console.log(req.body))
// app.route('/').post( (req, res) => res.send(req.body))


//3. PUT
// //middleware
// app.use(express.json())

// let author = 'Camila'

// app.route('/').get( (req, res) => res.send(author))

// app.route('/').put( (req, res) => {
//     author = req.body.author
//     res.send(author)
// })

//4. DELETE

app.route('/:identificador').delete( (req, res) => {
    res.send(req.params.identificador)
})

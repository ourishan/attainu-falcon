var express = require('express')
var app = express()

app.use(express.json())

app.post('/add', function (req, res) {
    let num1 = parseInt(req.body.num1)
    let num2 = parseInt(req.body.num2)
    let result = num1 + num2
    res.send({num1, num2, result})
})
app.post('/sub', function (req, res) {
    let num1 = parseInt(req.body.num1)
    let num2 = parseInt(req.body.num2)
    let result = num1 - num2
    res.send({num1, num2, result})
})
app.post('/mul', function (req, res) {
    let num1 = parseInt(req.body.num1)
    let num2 = parseInt(req.body.num2)
    let result = num1 * num2
    res.send({num1, num2, result})
})
app.post('/div', function (req, res) {
    let num1 = parseInt(req.body.num1)
    let num2 = parseInt(req.body.num2)
    let result = num1 / num2
    res.send({num1, num2, result})
})
app.listen(3000, ()=> console.log(`listening on port 3000!`))

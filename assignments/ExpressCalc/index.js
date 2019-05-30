var express = require('express')
var app = express()
app.get('/add/:n1/:n2', function (req, res) {
    let n1 = parseInt(req.params.n1)
    let n2 = parseInt(req.params.n2)
    let sum = n1 + n2
    res.send({sum})
})
app.get('/sub/:n1/:n2', function (req, res) {
    let n1 = parseInt(req.params.n1)
    let n2 = parseInt(req.params.n2)
    let difference = n1 - n2
    res.send({difference})
})
app.get('/mul/:n1/:n2', function (req, res) {
    let n1 = parseInt(req.params.n1)
    let n2 = parseInt(req.params.n2)
    let product = n1 * n2
    res.send({product})
})
app.get('/div/:n1/:n2', function (req, res) {
    let n1 = parseInt(req.params.n1)
    let n2 = parseInt(req.params.n2)
    let quotient = n1 / n2
    res.send({quotient})
})
app.listen(3000, ()=> console.log(`listening on port 3000!`))

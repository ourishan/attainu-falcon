const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
const dbName = 'mydb'
const client = new MongoClient(url);

let tweets = [
    {
        name: "digitizer",
        tweet: "This is a cool piece of information."
    },
    {
        name: "M0SH",
        tweet: "@digitizer I agree."
    }
]

app.use('/', express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    let options = {
        root: __dirname + '/pages'
    }
    res.sendFile('timeline.html', options);
});

app.post('/', (req, res) => {
    client.connect(err => {    
        const db = client.db(dbName);
        db.collection('tweets').insertOne(req.body, (err, result) => {        
            res.redirect('/')
        })
    })
});

app.get('/tweets', (req, res) => {
    res.json(tweets);
});

app.listen(80, () => {
    console.log('listening on localhost!');
});
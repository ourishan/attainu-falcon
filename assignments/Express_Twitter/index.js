const express = require('express');
const app = express();

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

app.use('/', express.urlencoded());

app.get('/', (req, res) => {
    let options = {
        root: __dirname + '/pages'
    }
    res.sendFile('timeline.html', options);
});

app.post('/', (req, res) => {
    tweets.push({name: req.body.name, tweet: req.body.tweet})
    res.redirect('/')
});

app.get('/tweets', (req, res) => {
    res.json(tweets);
});

app.listen(5500, () => {
    console.log('listening on port 5500!');
});
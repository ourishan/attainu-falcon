const express = require('express');
const db = require('./db/students.json');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
app.listen(80, () => {
    console.log('Server started on 80');
});
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded());
app.use(session({
    secret: "A session secret."
}));
app.get('/', (req, res) => {
    let options = {
        root: __dirname + '/pages'
    }
    res.sendFile(req.session.loggedIn ? 'mail.html' : 'login.html', options);
});
app.post('/auth', (req, res) => {
    for (student of db) {
        if (req.body.username == student.username && req.body.inputPassword == student.password) {
            req.session.loggedIn = true;
        }
    }
    if (req.session.loggedIn) {
        res.redirect('/');
    } else
        res.send(`<script>alert('wrong credentials!');window.location='/'</script>`);
});
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});
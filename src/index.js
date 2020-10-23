const express = require('express');
const bodyParser = require('body-parser');

const api = express();
api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json({ limit: '50mb'}));

api.listen(3000, () => {
    console.log("API up and running!");
});

let a;

api.post('/', (req, res) => {
    a = req.body;
});

api.get('/', (req, res) => {
    res.send(a)
})
const express = require('express');
const https = require('https');
const path = require('path');
var fs = require('fs');
var privateKey  = fs.readFileSync('certificado/gruposima.ar.key', 'utf8');
var certificate = fs.readFileSync('certificado/gruposima.ar.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
const app = express();

const port = process.env.PORT || 443;

app.use(express.static(__dirname + '/dist'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

app.get('*', function(req, res) {
    res.redirect('/');
});

const server = https.createServer(credentials,app);

server.listen(port, () => console.log(`App running on: https://localhost:${port}`));
const express = require('express');
const https = require('https');
const http = require('http');
const path = require('path');
var fs = require('fs');
var privateKey  = fs.readFileSync('certificado/gruposima.ar.key', 'utf8');
var certificate = fs.readFileSync('certificado/gruposima.ar.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
const app = express();

const porthttps = process.env.PORT || 443;
const porthttp = process.env.PORTHTTP || 80;

app.use(express.static(__dirname + '/dist'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

app.get('*', function(req, res) {
    res.redirect('/');
});

const serverhttps = https.createServer(credentials,app);

const serverhttp = http.createServer(app);

serverhttps.listen(porthttps, () => console.log(`App running on: https://localhost:${porthttps}`));
serverhttp.listen(porthttp, () => console.log(`App running on: http://localhost:${porthttp}`));
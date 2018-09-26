const MessagingResponse = require('twilio').twiml.MessagingResponse;
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
var MongoClient = require('mongodb').MongoClient;

const app = express();

const url = "mongodb://localhost:27017/latham";

var dbo;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', (req, res) => {

    //Respond
    const twiml = new MessagingResponse();

    console.log(req.body.Body);

    if (req.body.Body.toLowerCase().includes('start')) {
        twiml.message(`Please respond with your first and last name AND the keyword 'ZZ9'. Example 'Jordan Maness ZZ9'`);
    } else if (req.body.Body.toLowerCase().includes('zz9')) {
        twiml.message(`Please respond with your school major AND the keyword 'YY8'. Example 'Computer Science YY8'`);
    } else if (req.body.Body.toLowerCase().includes('yy8')) {
        twiml.message(`Please respond with programs you want to see AND the keyword 'VV7'. Example 'Personal branding, finances, game night VV7'`);
    } else if (req.body.Body.toLowerCase().includes('vv7')) {
        twiml.message(`Thanks! Your responses have been recorded.`);
    } else {
        twiml.message(`Text 'start' to begin.`);
    }

    dbo.collection("survey").insertOne(req.body, function (err, mongoResponse) {
        if (err) console.log('[mongodb err]', err);
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiml.toString());
    });
});

MongoClient.connect(url, function (err, db) {
    if (err) console.log('[mongodb error]',err);
    dbo = db.db("latham");
    http.createServer(app).listen(8083, () => {
        console.log('Express server listening on port 8083');
    });
});

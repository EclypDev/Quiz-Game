// WEB SOCKET Y EXPRESS Y HTTP FOR CONNECTIONS AND PUBLIC/INDEX.HTML TO /
const express = require('express');
const http = require('http');
const ws = require('ws');
const app = express();
const server = http.createServer(app);
const wss = new ws.Server({ server });

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); 
});

app.get('/questions.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(__dirname + '/questions.json');
  });
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', (message) => {
        console.log(message);
    });
    ws.on('close', () => {
        console.log('Client disconnected'); //CLIENT DISCONECTED
    });
    ws.on('error', (error) => {
        console.log(error);
    });
    ws.on('open', () => {
        console.log('Client connected'); //CLIENT CONECTED
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000'); //RUNING IN PORT 3000
});


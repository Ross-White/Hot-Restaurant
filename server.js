const express = require('express');
// const fs = require('fs');
const path = require('path');
// const http = require('http');

const server = express();
const PORT = 3005;

// Routes
server.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

server.get('/table', (req, res) => res.sendFile(path.join(__dirname, 'table.html')));

server.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

// const server = http.createServer((req, res) => {
//     fs.readFile(`${__dirname}/index.html`, (err, data) => {
//       if (err) throw err;
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(data);
//     });
//   });



server.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
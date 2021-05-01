const express = require('express');
// const fs = require('fs');
const path = require('path');
// const http = require('http');

const server = express();
const PORT = 3005;

const tables = [
  {
    name: 'Ross',
    time: '6pm',
    groupSize: '4'
  },
];
const waitlist = [
  {
    name: 'Wael',
    time: '6pm',
    groupSize: '4'
  }
];

// Routes
server.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
server.get('/table', (req, res) => res.sendFile(path.join(__dirname, 'table.html')));
server.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

// API routes
server.get('/api/table', (req, res) => res.json(tables));
server.get('/api/waitlist', (req, res) => res.json(waitlist));



server.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
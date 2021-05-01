const express = require('express');
const fs = require('fs');
const http = require('http');
// const server = express();
const PORT = 3001;

const server = http.createServer((req, res) => {
    // Here we use the fs package to read our index.html file
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
      if (err) throw err;
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  });



server.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
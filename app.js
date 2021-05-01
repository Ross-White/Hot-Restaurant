const express = require('express');
const app = express();
const PORT = 3000;
const http = require('http');

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
'use strict';
const express = require('express');

const PORT = 80;
const HOST = '13.125.244.127';

const app = express();
app.get('/', (req, res) => {
	  res.send('Hello world!\n');
});

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');

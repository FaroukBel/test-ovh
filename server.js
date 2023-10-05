const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

// 👇️ you need this line to serve static files
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`React app listening on port ${port}`);
});
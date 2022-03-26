const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/home', (req, res) => {
  res.status(200).json({
    message: 'hello everybody',
    image: './images/main.jpg',
  });
});

const PORT = 4000;

app.listen(PORT, () => console.log('Post has started at ' + PORT));

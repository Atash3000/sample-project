const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
var corsOptions = {
  origin: 'https://atarik.vercel.app/',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/v1/home', (req, res) => {
  res.status(200).json({
    message: 'hello everybody',
    image: './images/main.jpg',
  });
});

const PORT = 4000;

app.listen(PORT, () => console.log('Post has started at ' + PORT));

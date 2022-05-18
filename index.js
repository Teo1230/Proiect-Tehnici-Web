const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'Proiect.html'));
  console.log(path.join(__dirname, 'Proiect.html'));
});

  app.get('/info', function (req, res) {
    res.sendFile(path.join(__dirname, 'info.html'));
  });

  app.get('/articole', function (req, res) {
    res.sendFile(path.join(__dirname, 'articole.html'));  
  });

  app.get('/cariera', function (req, res) {
    res.sendFile(path.join(__dirname, 'cariera.html'));
  });

 

app.post('/', function (req, res) {
    const { nume, prenume, email } = req.body;
    res.send(`Salut, ${nume} ${prenume}! Multumim pentru observatie!`);
  });
  
  app.use((req, res) => {
    res.status(404).sendFile('./404.html', { root: __dirname });
  });
app.listen(3000);
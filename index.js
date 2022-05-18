const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   console.log(req.url);

   res.setHeader('Content-Type', 'text/html');

  

   let path = '';
  switch(req.url) {
    case '/':
      path += 'Proiect.html';
      res.statusCode = 200;
      break;
    case '/info':
      path += 'info.html';
      res.statusCode = 200;
      break;
      case '/articole':
        path += 'articole.html';
        res.statusCode = 200;
        break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/Proiect');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

   fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
     res.end(data);
  });


});

const express = require('express');

 const app = express();

 app.listen(3000);
 //app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
   res.sendFile('./Proiect.html', { root: __dirname });
});

app.get('/cariera', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('.cariera.html', { root: __dirname });
});

// redirects
app.get('info', (req, res) => {
  res.redirect('/info');
});

 app.use((req, res) => {
  res.status(404).sendFile('./404.html', { root: __dirname });
});

 server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
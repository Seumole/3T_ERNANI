const express = require('express');
const app = express();const path  

const PORT = 3000

app.get('/', function(req, res){
  res.send('Hello Express app!');
}) ;

app.get('/sobre', function(req, res){
  res.send('<h1>Sobre</h1>');
  
}

);

app.listen(PORT, function() {
  console.log(`App running on port` + PORT);
})
  
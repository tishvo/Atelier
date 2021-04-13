const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
  res.end();
})


app.listen(8080, () => {
  console.log('listening on port 4400');
});
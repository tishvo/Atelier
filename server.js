const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
  res.end();
})


let port = 8080

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
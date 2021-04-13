const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(express.static(__dirname + '../public'));





app.listen(4400, () => {
  console.log('listening on port 4400');
});
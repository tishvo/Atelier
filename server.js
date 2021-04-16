const express = require('express');
const bodyparser = require('body-parser');
<<<<<<< HEAD
=======
const axios = require('axios');
>>>>>>> a8182380d15cc2e2eaac73e75418c46e01ccdd50
require('dotenv').config();

const app = express();

console.log(process.env.GITHUB_API_KEY);

app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));

<<<<<<< HEAD
// initial load of the page
app.get('/', function(req, res) {
  res.end();
=======
//const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';


app.get('/products',  function(req, res) {
  let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products';
    axios.get(url, {
      headers: {
        'Authorization': process.env.GITHUB_API_KEY
      }
    })
      .then((response) => {
        console.log('got our data! In our then statement. response: ', response.data)
        //console.log('first item', response.data[0].description)

        res.status(202).send(response.data);

      })
      .catch((error) => {
        console.log('error in Overview axios get request, error:', error)
      })
>>>>>>> a8182380d15cc2e2eaac73e75418c46e01ccdd50
})


let port = 8080

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
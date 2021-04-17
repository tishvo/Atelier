const express = require('express');
const bodyparser = require('body-parser');

const axios = require('axios');
require('dotenv').config();

const app = express();

console.log(process.env.GITHUB_API_KEY);

app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));

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
        res.status(202).send(response.data);
      })
      .catch((error) => {
        console.log('error in initial /products get request, error:')
      })
})

app.get('/products/:productId/styles',  function(req, res) {
    let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.productId}/styles`

    axios.get(url, {
      headers: {
        'Authorization': process.env.GITHUB_API_KEY
      }
    })
      .then((response) => {
        res.status(202).send(response.data);
      })
      .catch((error) => {
        console.log('error in /products/:productId/styles axios get request, error:')
      })
})


let port = 8080

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
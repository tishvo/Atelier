const express = require('express');
const bodyparser = require('body-parser');

const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));

//const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';


app.get('/products', function (req, res) {
  let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products';
  axios.get(url, {
    headers: {
      'Authorization': process.env.GITHUB_API_KEY
    }
  })
    .then((response) => {
      res.status(202).send(response.data);
    })
    .catch((error) => {
      console.log('error in initial /products get request, error:')


    })

})

app.get('/products/:productId/styles', function (req, res) {
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

app.get('/reviews/:productId', function (req, res) {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${req.params.productId}`

  axios.get(url, {
    headers: {
      'Authorization': process.env.GITHUB_API_KEY
    }
  })
    .then((response) => {
      console.log('got our reviews data from API!')
      res.status(202).send(response.data);
    })
    .catch((error) => {
      console.log('error in /products/:productId/revoews axios get request, error:', error)
    })
})

// RR GET request for related item id's
app.get('/products/:productId/related', function(req, res) {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.productId}/related`;

  axios.get(url, {
    headers: {
      'Authorization': process.env.GITHUB_API_KEY
    }
  })
  .then(response => {
    console.log('got data in server /related request: ', response.data)
    res.status(202).send(response.data);
  })
  .catch(err => {
    console.log('/RELATED GET ERROR: ', err)
  })

})

app.get('/questions/:productId', function(req, res) {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${req.params.productId}`;

  axios.get(url, {
    headers: {
      'Authorization': process.env.GITHUB_API_KEY
    }
  })
  .then(response => {
    console.log('got data in server /qa/questions request: ', response.data)
    res.status(202).send(response.data);
  })
  .catch(err => {
    console.log('/RELATED GET ERROR: ', err)
  })

})

// RR GET request for item id product info
app.get('/products/:productId', function(req, res) {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.productId}`;

  axios.get(url, {
    headers: {
      'Authorization': process.env.GITHUB_API_KEY
    }
  })
  .then((response) => {
    res.status(202).send(response.data);

  })
  .catch((error) => {
    console.log(error);
  })

})

app.get('/reviews/meta/:productId', function(req, res) {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=${req.params.productId}`;

  axios.get(url, {
    headers: {
      'Authorization': process.env.GITHUB_API_KEY
    }
  })
  .then(response => {
    // console.log('getting data for RP Card: ', res.data)
    res.status(202).send(response.data);
  })
  .catch(err => {
    console.log('RP CARD DATA GET ERROR: ', err)
  })
})


app.get('/reviews/:productId',  function(req, res) {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${req.params.productId}`
  axios.get(url, {
    headers: {
      'Authorization': process.env.GITHUB_API_KEY
    }
  })
    .then((response) => {
      res.status(202).send(response.data);

    })
    .catch((error) => {
      console.log(error);
    })
})


let port = 8080

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
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
        //console.log('got our data! In our then statement. response: ', response.data)
        //console.log('first item', response.data[0].description)
        res.status(202).send(response.data);
      })
      .catch((error) => {
        console.log('error in Overview axios get request, error:', error)
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
        //console.log('got data in /styles ', response.data)
        //console.log('first item', response.data[0].description)

        res.status(202).send(response.data);

      })
      .catch((error) => {
        console.log('error in Overview axios get request, error:', error)
      })
})

// app.get('/reviews/?product_id=:productId', function(req, res) {
//   let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${req.params.productId}`;

//   axios.get(url, {
//     headers: {
//       'Authorization': process.env.GITHUB_API_KEY
//     }
//   })
//   .then((response) => {
//     //console.log('return of the current productid review data: ', response);
//     res.status(202).send(response);
//   })
//   .catch((error) => {
//     console.log('error in Review axios get request, error: ', error);
//   })
// })

app.get('/reviews/meta/:productId', function(req, res) {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=${req.params.productId}`;
  console.log('inside meta request, server side');
  axios.get(url, {
    headers: {
      'Authorization': process.env.GITHUB_API_KEY
    }
  })
  .then((response) => {
    console.log('return of the current productid meta review data: ', response.data);
    res.status(202).send(response.data);
  })
  .catch((error) => {
    console.log('error in Meta Reveiw axios get request, error: ', error);
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
      console.log('got our reviews data from API!')
      res.status(202).send(response.data);
    })
    .catch((error) => {
      console.log('error in /products/:productId/revoews axios get request, error:', error)
    })
})


let port = 8080

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
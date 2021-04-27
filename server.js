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
      console.log('error in initial /products get request, error:', error)

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
      console.log('error in /products/:productId/styles axios get request, error:, ', error)
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

// AF GET request for cart
app.get('/cart', function (req, res) {
  let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart';

  axios.get(url, {
    headers: {
      'Authorization': process.env.GITHUB_API_KEY
    }
  })
    .then((response) => {
      console.log('got our cart data from API!')
      res.status(202).send(response.data);
    })
    .catch((error) => {
      console.log('error in /cart axios get request, error:', error)
    })
})

// AF POST request to cart
app.post('/cart', function (req, res) {
  console.log('cart POST req.params: ', req.body)

  let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart';

  let data = req.body;
  let config = {
    headers: {
      'Authorization': process.env.GITHUB_API_KEY
    }
  }

  axios.post(url, data, config)
  .then((response) => {
    console.log('successfully posted to cart')

  })
  .catch((error) => {
    console.log('error in our POST to cart')

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
    res.status(202).send(response.data);
  })
  .catch(err => {
    console.log('/RELATED GET ERROR: ', err)
  })

})

//TV GET request for products questions and answers
app.get('/questions/:productId', function(req, res) {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${req.params.productId}`;

  axios.get(url, {
    headers: {
      'Authorization': process.env.GITHUB_API_KEY
    }
  })
  .then(response => {
    res.status(202).send(response.data);
  })
  .catch(err => {
    console.log('/RELATED GET ERROR: ', err)
  })
})

//TV PUT request to update usefulness of a question
app.put('/questionshelpful/:questionId', function(req, res) {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${req.params.questionId}/helpful`;

  axios({ method: 'put', url: url, headers: { 'Authorization': process.env.GITHUB_API_KEY } })
  .then(response => {
    res.status(204).send('put req successful')
  })
  .catch(err => {
    console.log('/RELATED GET ERROR: ', err)
  })

})

//TV PUT request to update usefulness of an answer
app.put('/answerhelpful/:answerId', function(req, res) {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${req.params.answerId}/helpful`;

  axios({ method: 'put', url: url, headers: { 'Authorization': process.env.GITHUB_API_KEY } })
  .then(response => {
    res.status(204).send('put req (a) successful')
  })
  .catch(err => {
    console.log('/RELATED GET ERROR: ', err)
  })
})

//TV PUT request to report an answer
app.put('/answerreport/:answerId', function(req, res) {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${req.params.answerId}/report`;

  axios({ method: 'put', url: url, headers: { 'Authorization': process.env.GITHUB_API_KEY } })
  .then(response => {
    res.status(204).send('answer has been reported successfully')
  })
  .catch(err => {
    console.log('/RELATED GET ERROR: ', err)
  })
})

//TV POST request to ask a question
app.post('/qa/ask', function(req, res) {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`;
  let data = req.body;
  let config = {
    headers: {
      'Authorization': process.env.GITHUB_API_KEY
    }
  }

  axios.post(url, data, config)
  .then(response => {
    res.status(202).send('question has been created')
  })
  .catch(err => {
    console.log('/RELATED GET ERROR: ', err)
  })
})

//TV POST request to add an answer
app.post('/qa/answer/:question_id', function(req, res) {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${req.params.question_id}/answers`;
  let data = req.body;
  let config = {
    headers: {
      'Authorization': process.env.GITHUB_API_KEY
    }
  }

  axios.post(url, data, config)
  .then(response => {
    res.status(202).send('answer has been created')
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
    console.log('RR GET error /products/:productId');
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
      console.log('error on /reviews/:productId');
    })
})


let port = 8080

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
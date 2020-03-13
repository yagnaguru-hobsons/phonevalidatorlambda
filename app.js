var express = require('express');
const axios = require('axios')

var app = express();
//AWS Lambda URL
const url = `https://ltvhkgn1mj.execute-api.us-east-1.amazonaws.com/Prod/validate-phone?`

app.use(express.json());
app.use(express.static('./views'));
app.use("/js", express.static('./js/'));

/**
 * Entry Point of Application
 */
app.get("/", function(req, res){
  res.render("index.html")
})

/**
 * Exposing /validate as REST Api
 * This will invoke AWS Lambda to validate phone number 
 */
app.post('/validate', function (req, res) {
  const phoneNumber = `IsoCountryCode=${req.body.countryCode}&PhoneNumber=${req.body.phoneNumber}`
  axios.get(url+phoneNumber)
  .then(function (response) {
    res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
});

/**
 * Port on which application is hosted locally
 */
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
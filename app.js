var express = require('express');
const axios = require('axios')

var app = express();
<<<<<<< HEAD
=======
//AWS Lambda URL
const url = `https://ltvhkgn1mj.execute-api.us-east-1.amazonaws.com/Prod/validate-phone?`

>>>>>>> da82df1099ac1041f0a28fb4be958cf831419a82
app.use(express.json());
app.use(express.static('./views'));
app.use("/js", express.static('./js/'));

<<<<<<< HEAD
const url = `https://ltvhkgn1mj.execute-api.us-east-1.amazonaws.com/Prod/validate-phone?`

/**
 * 
=======
/**
 * Entry Point of Application
>>>>>>> da82df1099ac1041f0a28fb4be958cf831419a82
 */
app.get("/", function(req, res){
  res.render("index.html")
})

/**
<<<<<<< HEAD
 * 
=======
 * Exposing /validate as REST Api
 * This will invoke AWS Lambda to validate phone number 
>>>>>>> da82df1099ac1041f0a28fb4be958cf831419a82
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
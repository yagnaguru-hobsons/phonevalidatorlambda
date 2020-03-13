
async function validate() {
  let response = await fetch('http://localhost:3000/validate', {
      method: 'POST',
      body: JSON.stringify({
        "phoneNumber":document.getElementById("phonenumber").value,
        "countryCode":document.getElementById("countrycode").value
      }), // string or object
      headers: {
        'Content-Type': 'application/json'
      }
  });

    if (response.ok) { 
      let json = await response.json();
      console.log(json)
      if( json.NumberValidateResponse.PhoneType !== 'INVALID'){
        document.getElementById("result").innerHTML= `Phone number is a ${json.NumberValidateResponse.PhoneType} of 
        ${json.NumberValidateResponse.Carrier} from ${json.NumberValidateResponse.Country}`
      }else{
        document.getElementById("result").innerHTML= `Phone number is invalid`;
      }
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }




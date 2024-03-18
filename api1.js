const axios = require('axios');
let data = JSON.stringify({
  "name": "Bishal Chakraborty",
  "email": "bishal2431.be21@chitkara.edu.in",
  "rollNumber": 2110992431,
  "phone": 6376258324
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

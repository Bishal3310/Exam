const axios = require('axios');
let data = JSON.stringify({
  "company": "Bajaj Finserv Ltd",
  "currentPrice": 1578.65,
  "accountNumber": "BFHL0018654",
  "githubRepoLink": " https://github.com/Bishal3310/Exam"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks',
  headers: { 
    'content-type': 'application/json', 
    'bfhl-auth': '2110992431'
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

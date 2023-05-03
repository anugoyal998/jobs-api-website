export const nodejs = `const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://nice-fish-wear.cyclic.app/api/summary?apiKey={YOUR_API_KEY}&query={STOCK_SYMBOL}'
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`

export const python = `import requests

url = 'https://nice-fish-wear.cyclic.app/api/summary?apiKey={YOUR_API_KEY}&query={STOCK_SYMBOL}'

response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`

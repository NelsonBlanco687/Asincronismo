const fetch = require('node-fetch');

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) =>{
        return response.json();
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })

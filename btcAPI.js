const fetch = require('node-fetch');
const fs = require('fs');

    async function getPricesbtc(){
        try {
            const response= await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
            const data =await response.json();
            let btcprice = "";
            Array.from(data).forEach(precios=> {
                btcprice+= `${precios['time']}, ${precios['chartName']},${precios['code']},${precios['rate']},${precios['description']}`;
                
            });
            fs.writeFile('precios.txt', btcprice, (error) =>{
                if(error){
                    console.log(error);
                    return;
                }
                console.log('se ha creado el archivo');
            } )


        }catch(error){
            console.log(error)
        }
    }

    getPricesbtc();

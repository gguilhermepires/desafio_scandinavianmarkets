const axios = require('axios');
const querystring = require('querystring');
const crypto = require('crypto');


const apiUrl = process.env.API_URL;
const apiKey = process.env.APY_KEY;
const apiSecret = process.env.SECRET_KEY;


async function publicCall(path,data, method = 'GET'){
    try {
        const qs = data ? `${querystring.stringify(data)}` : '';
        let result;
        if(method == 'POST'){
            result = await axios({
                method,
                url: `${apiUrl}${path}${qs}`,
                data: JSON.stringify(data)
            });
        }else{
            result = await axios({
                method,
                url: `${apiUrl}${path}${qs}`
            });
        }
      
        return result.data
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function privateCall(path, data={}, method='GET') {
    const timestamp = Date.now();
    const signature = crypto.createHmac('sha256', apiSecret).
    update(`${querystring.stringify({...data, timestamp})}`)
    .digest('hex');
    const newData = {...data, timestamp, signature};
    const qs = `?${querystring.stringify(newData)}`;

    try {
       const result = await axios({
            method,
            url: `${apiUrl}${path}${qs}`,
            headers: { 'X-MBX-APIKEY': apiKey}
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

async function accountInfo() {
    return privateCall('/v3/account');
}

async function time(){
    return publicCall('/v3/time')
}

async function depth(symbol= 'BTCBRL', limit = 5){
    return publicCall('/v3/depth?', { symbol , limit})
}

async function depth(symbol= 'BTCBRL', limit = 5){
    return publicCall('/v3/depth?', { symbol , limit})
}

async function exchangeInfo(){
    return publicCall('/v3/exchangeInfo')
}

async function newOrder(symbol= 'BTCBRL',quantity=0, price=null, side='BUY',
 type= 'MARKET'){
     let data = { symbol, side,type, quantity };
     if(price) data = { symbol, side,type, quantity , price};
     if(type === 'LIMIT') data.timeInForce = 'GTC';
    return privateCall('/v3/order', data, 'POST');
}



module.exports = { time, depth, newOrder , exchangeInfo, accountInfo};
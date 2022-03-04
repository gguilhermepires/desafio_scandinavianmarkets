const api = require('../infrastructure/apiBinance');

module.exports = class BinanceService {
    
    constructor() {}
  
    static async newOrder (coin=''){
        const info = await api.newOrder(coin, 1000);
            return info;
    }

    static async sellOrder (coin=''){
        const profitability = parseFloat(process.env.PROFITABILITY).toFixed(8);
        console.log('profitability');
        console.log(profitability);

        const price = 0.01453000*2;
        console.log('price');
        console.log(price);

        const info = await api.newOrder(coin, 999.0,  price , 'SELL', 'LIMIT');
            return info;
    }

    static async getAccountInfo (coin=''){
        const info = await api.accountInfo();
        if(coin == '')
            return info;
        const coins = info.balances.filter( b => coin.indexOf(b.asset) !== -1)
        return coins;
    }

    static async getPrice(coin) {
        const _time =  await api.time();
        const result = await api.depth(coin);
        let bid=0, ask=0;
        if(result == null)
            return {
                time:0,
                buy: 0,
                ask: 0,
            };

        if(result.bids && result.bids.length)
            bid = parseFloat(result.bids[0][0]);
        if(result.asks && result.asks.length)
            ask = parseFloat(result.asks[0][0]);
        try{
            return {
                time:_time,
                bid,
                ask,
            };
        }catch(e){
            return {
                time:0,
                bid: 0,
                ask: 0,
            };
        }
     
    }
}


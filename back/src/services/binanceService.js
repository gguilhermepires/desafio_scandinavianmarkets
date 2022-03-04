const api = require('../infrastructure/apiBinance');

module.exports = class BinanceService {
 
    static async getPrice(coin) {
        const _time = await api.time();
        const result = await api.depth(coin);
        let bid = 0, ask = 0, spread=0;
        if (result == null)
            return {
                time: 0,
                buy: 0,
                ask: 0,
                spread:0
            };

        if (result.bids && result.bids.length)
            bid = parseFloat(result.bids[0][0]);
        if (result.asks && result.asks.length)
            ask = parseFloat(result.asks[0][0]);
        
        spread = bid - ask;
        try {
            return {
                time: _time,
                bid,
                ask,
                spread
            };
        } catch (e) {
            return {
                time: 0,
                bid: 0,
                ask: 0,
                spread:0
            };
        }

    }
}


const ResponseServer = require('../infrastructure/responseServer');
const CryptoMarketService = require('../services/cryptoMarketService');
module.exports = class CryptoMarketDomain {

  static async processMessage(message) {

    let command = CryptoMarketService.extractCommandFromMessage(message);

    switch (command) {
      case 'MARKETVALUE':
        let table = [];
        const coins = CryptoMarketService.getMarketCoins();

        for (let i = 0; i < coins.length; i++)
          table.push(await CryptoMarketService.getCotation(coins[i], i));

        return ResponseServer.create(200, 'Loaded with success', table);
      default:
        return ResponseServer.create(400, 'Message command invalid');
    }
  }

}
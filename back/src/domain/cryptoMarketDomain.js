const ResponseServer = require('../infrastructure/responseServer');
const JsonConverter = require('../infrastructure/jsonConverter');
const BinanceService = require('../services/binanceService');
const Quotation = require('../models/quotation');

module.exports =  class CryptoMarketDomain {

 static _convertCommandToString(command){
    switch(command){
      case 1:
        return 'MARKETVALUE';
      default:
        return '';
    }
  }

  static _getCoinsMarket(){
    return [
      'BTCBRL',
      'ADABRL',
      'BNBBRL',
      'SHIBBRL',
      'ETHBRL',
    ]
  }

  static async processMessage(stringMessage){

    let message = JsonConverter.stringToJson(stringMessage.utf8Data);
    if(message == null)
      return ResponseServer.create(400, 'Json message invalid');

    switch(this._convertCommandToString(message.command)){
      case 'MARKETVALUE':
        const coins = this._getCoinsMarket();
        let table = [];

      for (let i = 0; i < coins.length; i++) {
        table.push(
          Quotation.createFromBinancePrice(
            i,
            coins[i],
            await BinanceService.getPrice(coins[i])
        ));
      }
        return ResponseServer.create(200, 'Carregado com sucesso',table);
      default:
        return ResponseServer.create(400, 'Message command invalid');
    }
  }

}
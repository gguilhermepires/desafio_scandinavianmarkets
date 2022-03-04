const JsonConverter = require('../infrastructure/jsonConverter');
const BinanceService = require('../services/binanceService');
const Quotation = require('../models/quotation');

module.exports = class CryptoMarketService {

    static _convertCommandToString(commandId) {
        switch (commandId) {
            case 1:
                return 'MARKETVALUE';
            default:
                return '';
        }
    }

    static extractCommandFromMessage(message) {
        let commandMessage = JsonConverter.stringToJson(message.utf8Data);

        if (commandMessage == null)
            throw Error('Json message invalid');

        return this._convertCommandToString(commandMessage.command)
    }

    static getMarketCoins() {
        return [
            'BTCBRL',
            'ADABRL',
            'BNBBRL',
            'SHIBBRL',
            'ETHBRL',
        ];
    }

    static async getCotation(coin, i) {
        return Quotation.createFromBinancePrice(
            i,
            coin,
            await BinanceService.getPrice(coin)
        );
    }
}


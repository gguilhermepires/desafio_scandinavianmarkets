module.exports = class Quotation {
    
    constructor() {
        this.id = 0;
        this.coin = 0;
        this.ask = 0;
        this.bid = 0;
        this.spread = 0;
    }

    static createFromBinancePrice(id, coin, binacePrice){
        let obj = new Quotation();
        obj.id = id;
        obj.coin = coin;
        obj.ask = binacePrice.ask;
        obj.bid = binacePrice.bid;
        obj.spread = 0;
        return obj;
    }
    toString(){
        return 'Pity the Foo';
      }
}
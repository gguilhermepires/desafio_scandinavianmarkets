const CryptoMarketDomain = require('../domain/cryptoMarketDomain');

describe('MarketValue', ()=>{
  
  beforeAll(async () => {
    console.log('before');
  });

  afterAll(async ()=> {
    console.log('after');

  });

  it('Command valid',async () => {
    let message =   { type: 'utf8', utf8Data: '{"command":1}' };
    let response = await CryptoMarketDomain.processMessage(message);
    expect(response.code).toBe(200);
    expect(response.data.length > 0 ).toBe(true);
  });

  it('Command invalid',async () => {
    let message =   { type: 'utf8', utf8Data: '{"command":3}' };
    let response = await CryptoMarketDomain.processMessage(message);
    expect(response.code).toBe(400);
    expect(response.message).toBe('Message command invalid');
  });
}
);

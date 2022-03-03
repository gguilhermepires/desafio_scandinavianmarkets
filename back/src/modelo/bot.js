//const api = require('../../infrastructure/apiBinance');
//const BinanceService = require('../../services/binanceService');
const Estrategia01 = require('../dominio/estrategias/estrategia01ValorVenda');

class Bot {
    
    constructor() {
        this.id = 0;
        this.usuarioId=0;
        this.nome = '';

        this.status = {
            id:0,
            nome: ''
        };
   
        this.configuracao = {
            id:0,
            botId:0,
            client:null,
            MODO_DEBUG:true,
            MOEDA_COMPRA:'',
            MOEDA_QUANTIDADE_COMPRA:0,
            MOEDA_QUANTIDADE_VENDA:0,
            estrategia: null,
            API_URL:'https://api.binance.com/api',
            APY_KEY:'',
            SECRET_KEY:'',
            PROFITABILITY:2,
            
            
            MOEDA_PRECO_VENDA:0,
            crawlerInterval:6000,
            topicoConfiguracaoBot: 'bot/config',
            topicoConfiguracaoServidor: 'servidor/bot/config',
            TOPICO_LOG: 'bot/log',
            TOPICO_COMPRA: '',
            TOPICO_VENDA: '',
            TOPICO_COMPRA_ERRO: ''
        };
    }
    static criaApartirBanco (botBanco){
        console.log('linha 32');
        console.log(botBanco);
        console.log('linha 34');
        console.log(botBanco.configuracao);
        let obj = new Bot();
        obj.id = botBanco.id;
        obj.nome = botBanco.nome;
        obj.status.id = botBanco.status.id;
        obj.usuarioId = botBanco.usuario_id;
       
        obj.configuracao.MOEDA_COMPRA = botBanco.configuracao.moeda;
        obj.configuracao.APY_KEY =  botBanco.configuracao.api_key;
        obj.configuracao.SECRET_KEY =  botBanco.configuracao.api_secret;
        
        obj.configuracao.PROFITABILITY = botBanco.configuracao.margem_lucro;
        obj.configuracao.MODO_DEBUG = botBanco.configuracao.modo_debug;
        obj.configuracao.MOEDA_QUANTIDADE_COMPRA = botBanco.configuracao.quantidade_compra;
        obj.configuracao.MOEDA_QUANTIDADE_VENDA = botBanco.configuracao.quantidade_venda;
        
        if(botBanco.configuracao.estrategia.id == 1){
            obj.configuracao.estrategia = new Estrategia01(obj.configuracao);
        }
       
        return obj;
    }
    // logTopico(objeto){
    //     this.configuracao.client.publish(
    //         this.configuracao.TOPICO_LOG,
    //         JSON.stringify({ botId:this.configuracao.id, dado:objeto})
    //     );
    //     console.log(`log: ${JSON.stringify({ botId:this.configuracao.id, dado:objeto})}`);
    // }

    // trocaMoeda(moeda){
    //     this.configuracao.MOEDA_COMPRA = moeda;
    // }

    // getMoeda(){
    //     return this.configuracao.MOEDA_COMPRA ;
    // }

    // configura(comando){
    //     this.configuracao.APY_KEY = comando.config.APY_KEY;
    //     this.configuracao.SECRET_KEY = comando.config.SECRET_KEY;
    //     this.configuracao.MOEDA_COMPRA = comando.config.MOEDA_COMPRA;
    //     this.configuracao.PROFITABILITY = comando.config.PROFITABILITY;
        
    //     if(comando.config.ESTRATEGIA == "ESTRATEGIA1"){
    //         this.estrategia = new Estrategia01(this.configuracao);
    //     } 
    //     this.status = 2;
    // }
    
    // configuracaoApartirEnv(){
    //     this.configuracao.id = process.env.BOT_ID;
    //     this.configuracao.APY_KEY =  process.env.APY_KEY;
    //     this.configuracao.SECRET_KEY = process.env.SECRET_KEY;
    //     this.configuracao.PROFITABILITY = process.env.PROFITABILITY;
    //     this.configuracao.crawlerInterval = process.env.CRAWLER_INTERVAL;
        
    //     this.configuracao.MOEDA_COMPRA = process.env.MOEDA_COMPRA;
    //     this.configuracao.MOEDA_QUANTIDADE_COMPRA = process.env.MOEDA_QUANTIDADE_COMPRA;
    //     this.configuracao.MOEDA_QUANTIDADE_VENDA = process.env.MOEDA_QUANTIDADE_VENDA;
    //     this.configuracao.MOEDA_PRECO_VENDA = process.env.MOEDA_PRECO_VENDA;
 
    //     this.configuracao.TOPICO_LOG = process.env.TOPICO_LOG;
    //     this.configuracao.TOPICO_COMPRA = process.env.TOPICO_COMPRA;
    //     this.configuracao.TOPICO_VENDA = process.env.TOPICO_VENDA;
    //     this.configuracao.TOPICO_COMPRA_ERRO = process.env.TOPICO_COMPRA_ERRO;


    //     if(process.env.ESTRATEGIA == "ESTRATEGIA1"){
    //         this.estrategia = new Estrategia01(this.configuracao);
    //         console.log('setou estrategia 1')
    //     } 
    //     this.status = 2;
    // }

    // getConfiguracao(){
    //     return this.configuracao;
    // }

    // inicia(){
    //     this.status = 1;
    // }   

    // async listarMoedas(){
    //     return await BinanceService.listaMoedas();
    // }
    // async precoMercado(){
    //     return await BinanceService.getPrice(this.configuracao.MOEDA_COMPRA);
    // }

    // async getAccountInfo(moeda=''){
    //     return await BinanceService.getAccountInfo(moeda);
    // }
    // async getValorMoeda(moeda=''){
    //     if(moeda == '')
    //     return {msg: 'Informe uma moeda'};
    //     return await BinanceService.getPrice(moeda);
    // }
    // async mudarPorcentagemCorte(porcentagem){
    //     this.estrategia.configuracao.PROFITABILITY = 1 + (porcentagem/100)
    //     return {msg:'PROFITABILITY alterado'}
    // }

    // async compra(modoDebug=false, moeda='', quantidade=0){
    //     if(moeda == '' && quantidade==0)
    //         return await this.estrategia.comprar(
    //             modoDebug,
    //             this.configura.MOEDA_COMPRA,
    //             this.configura.MOEDA_QUANTIDADE_COMPRA);
    //     if(moeda == '' && quantidade>0)
    //         return await this.estrategia.comprar(
    //             modoDebug,
    //             this.configura.MOEDA_COMPRA,
    //             quantidade);
    //     if(moeda != '' && quantidade>0)
    //         return await this.estrategia.comprar(
    //             modoDebug,
    //             moeda,
    //             quantidade);
    //     if(moeda != '' && quantidade ==0)
    //         return await this.estrategia.comprar(
    //             modoDebug,
    //             moeda,
    //             this.configura.MOEDA_QUANTIDADE_COMPRA);

    //     return null;
    // }

    // async teste(){
    //     //return await BinanceService.teste();
    //     return await this.estrategia.teste();
    // }

    // async venda(modoDebug=false, moeda='', quantidade=0, preco=0){
    //     if(moeda == '' && quantidade==0 && preco==0)
    //     return await this.estrategia.vender(
    //         modoDebug,
    //         this.configura.MOEDA_COMPRA,
    //         this.configura.MOEDA_QUANTIDADE_COMPRA,
    //         this.configura.MOEDA_PRECO_VENDA
    //         );
    //     if(moeda == '' && quantidade>0 && preco>0)
    //         return await this.estrategia.vender(
    //             modoDebug,
    //             this.configura.MOEDA_COMPRA,
    //             quantidade,
    //             preco);
    //     if(moeda != '' && quantidade>0 && (preco>0 || preco == 0))
    //         return await this.estrategia.vender(
    //             modoDebug,
    //             moeda,
    //             quantidade,
    //             preco);
    //     if(moeda != '' && quantidade ==0 && preco>0)
    //         return await this.estrategia.vender(
    //             modoDebug,
    //             moeda,
    //             this.configura.MOEDA_QUANTIDADE_VENDA,
    //             preco
    //             );
    //     return null;
    // }

    // async run(){
    //     switch (this.status) {
    //         case 0:// recem iniciado, falta configurar
    //             this.logTopico({msg:`status: 0 , 'Bot sem configuração`})
    //             if(this.configuracao.client != null)
    //                 this.configuracao.client.publish(
    //                     this.configuracao.topicoConfiguracaoServidor,
    //                     JSON.stringify({comando: 1, msg:'solicita configuracao', id: this.configuracao.id})
    //                 );
    //             break; 
    //         case 1://executa
    //            this.logTopico(await this.executa());
    //             break;
    //         case 2:// configurado, esperado comando para iniciar
    //             this.logTopico({msg:`status: 2 , Bot configurado, esperado comando para iniciar`})
    //         break; 
    //         default:
    //             this.logTopico({msg:'status:default, Bot sem configuração'});
    //         break;
    //     }
    // }
    
    // async pararExecucao(){
    //     this.status = 2;
    // }
    // async continuarExecucao(){
    //     this.status = 1;
    // }

    // async alteraTempoExecucaoCrawlerInterval (payload){
    //     this.configuracao.crawlerInterval = payload.crawlerInterval;        
    // }

    // async executa() {
    //     if(this.estrategia != null)
    //         return this.estrategia.executa();
    //     else
    //         return  'Estratégia vazia'
    // }
}

module.exports = Bot;


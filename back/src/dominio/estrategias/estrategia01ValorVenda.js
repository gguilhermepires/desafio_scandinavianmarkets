//const api = require('../../infrastructure/apiBinance');

//const BinanceService = require('../../services/binanceService');

class Estrategia01 {
    
    constructor(config) {
        this.status =0;
        this.configuracao = config;
        this.compra = 0;
        this.venda = 0;
        this.lucro = 0;
        this.maiorLucro = 0;
        this.menorLucro = 0;
        this.historicoCompra = [];
        this.historicoVenda = [];
        this.historicoLucro = [];
        this.historicoMargem = [];
    }
    

    // async logTopico(objeto){
    //     this.configuracao.client.publish(
    //         this.configuracao.TOPICO_LOG,
    //         JSON.stringify({
    //             botId:this.configuracao.botId,
    //             dado:objeto
    //         })
    //     );
    // }

    // async vender(modoDebug=false,moeda='', quantidade=0,valorVenda=0){
        
    //     if(modoDebug == true){
    //         return valorVenda;
    //     }
    //     console.log(`${moeda}, ${quantidade}, ${valorVenda}`);
    //     if(moeda == '' && quantidade == 0 && valorVenda >0)
    //         return await BinanceService.sellOrder(
    //             this.configuracao.MOEDA_COMPRA,
    //             this.configuracao.MOEDA_QUANTIDADE_VENDA, valorVenda);
    //     if(moeda == '' && quantidade > 0 && valorVenda >0)
    //         return await BinanceService.sellOrder(
    //             this.configuracao.MOEDA_COMPRA,
    //             quantidade, valorVenda);
    //     if(moeda != '' && quantidade > 0 )
    //         return await BinanceService.sellOrder(
    //             moeda,
    //             quantidade, valorVenda);

    //     console.log('VALOR DE VENDA Não pode ser vazio, erro ao vender');
    //     return null;
    // }

    // async comprar(modoDebug=false, moeda='', quantidade=0){
    //     let retorno;
    //     try{
    //         if(modoDebug == false){
    //             if(moeda == '' && quantidade==0){
    //                 console.log('linha 47');
    //                 retorno = await BinanceService.newOrder(
    //                     this.configuracao.MOEDA_COMPRA,
    //                     this.configuracao.MOEDA_QUANTIDADE_COMPRA);
    //                     console.log('linha 51');
                    
    //             } else if(moeda == '' && quantidade>0){
    //                 console.log('linha 55');
    //                 retorno = await BinanceService.newOrder(
    //                     this.configuracao.MOEDA_COMPRA,
    //                     quantidade
    //                 );
    //                 console.log('linha 58');
    
    //                 }else {
    //                 console.log('linha 61');
    
    //                 retorno = await BinanceService.newOrder(
    //                     moeda,
    //                     quantidade
    //                 );
    //                 console.log('linha 67');
    
    //             }
    //         }else{
    //             console.log('linha 71');
                
    //             let preco = await BinanceService.getPrice();
    //             retorno = {
    //                 response:{
    //                     status:200
    //                 }
    //             }
    //         }
    //     }catch(e){
    //         console.log(`Erro compra:${e}`);
    //     }
    //     return retorno;
    // }
    
    // async teste(){
    //     this.logTopico({msg:`Comprou a `});
    // }

    // _buscaDataAgora(){
    //     let date_ob = new Date();
    //     let date = ("0" + date_ob.getDate()).slice(-2);
    //     let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    //     let year = date_ob.getFullYear();
    //     let hours = date_ob.getHours();
    //     let minutes = date_ob.getMinutes();
    //     let seconds = date_ob.getSeconds();
    //     return (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
    // }

    // async executa() {
    //     console.log(' ');
    //     console.log('_______________ Estratégia 1__________________');

    //     let retorno = {
    //         data:this._buscaDataAgora(),
    //         moedaCompra:this.configuracao.MOEDA_COMPRA,
    //         valorMercado:{
    //             compra:0,
    //             venda:0
    //         },
    //         compra:this.compra,
    //         vendaAlvo:0,
    //         lucro:0,
    //         lucroMaximo:0,
    //         lucroMinimo:0,
    //         lucroIntervalo:0,
    //         quantidadeVenda:0
    //     };


    //     var price = await BinanceService.getPrice(this.configuracao.MOEDA_COMPRA);
    //     retorno.valorMercado.compra = price.buy;
    //     retorno.valorMercado.venda = price.sell;

    //     if(this.compra == 0){
    //         let retornoCompra = this.comprar(this.configuracao.MODO_DEBUG);

    //         if(retornoCompra != null){ 
    //              console.log(`\nEFETIOU UMA COMPRA ${price.buy}`);
    //              this.configuracao.client.publish(
    //                 this.configuracao.TOPICO_COMPRA,
    //                 JSON.stringify({
    //                     botId:this.configuracao.botId,
    //                     retornoCompra:retornoCompra
    //                 })
    //             );
    //             this.compra = price.buy;
    //             retorno.compra = price.buy;

    //             this.logTopico({msg:`Comprou a ${price.buy}`});
    //         }else{
    //             this.configuracao.client.publish(
    //                 this.configuracao.TOPICO_COMPRA_ERRO,
    //                 JSON.stringify({
    //                     botId:this.configuracao.botId,
    //                     retornoCompra:retornoCompra
    //                 })
    //             );
    //             return { msg: 'ERRO AO TENTAR COMPRAR'};
    //         }
    //     }

    //     // verifica calcula lucro
    //     var valorVendaAlvo = (this.compra * parseFloat(this.configuracao.PROFITABILITY));
    //     retorno.vendaAlvo = valorVendaAlvo;

    //     var lucro = this.compra - price.sell;
        
    //     if(lucro > this.maiorLucro)
    //         this.maiorLucro = lucro;
    //     if(lucro < this.menorLucro)
    //         this.menorLucro = lucro;

    //     retorno.lucro = lucro;
    //     retorno.lucroMaximo = this.maiorLucro;
    //     retorno.lucroMinimo = this.menorLucro;
    //     retorno.lucroIntervalo = this.maiorLucro - this.menorLucro;


    //     if(this.compra == valorVendaAlvo){
    //         let retornoVenda = await this.vender(this.configuracao.MODO_DEBUG,
    //             this.configuracao.MOEDA_QUANTIDADE_COMPRA,
    //             retorno.valorMercado.venda 
    //             );
    //         this.configuracao.client.publish(
    //             this.configuracao.TOPICO_VENDA,
    //             JSON.stringify({
    //                 botId:this.configuracao.botId,
    //                 retornoVenda:retornoVenda
    //             })
    //         );
    //         console.log('VENDI');
    //         this.historicoVenda.push(price);
    //         retorno.quantidadeVenda = this.historicoVenda.length; 
    //     }

    //     console.log(`\nDATA: ${retorno.data}`);
    //     console.log(`\nModeda:${retorno.moedaCompra}, compra:${retorno.valorMercado.compra} venda:${retorno.valorMercado.venda}`);
    //     console.log(`\ncompra: ${retorno.compra}`);
    //     console.log(`\nvalor venda Alvo: ${valorVendaAlvo}`);
    //     console.log(`\nlucro: ${retorno.lucro}`);
    //     console.log(`\nMaior lucro(histórico): ${retorno.lucroMaximo}`);
    //     console.log(`\nMenor lucro(histórico): ${retorno.lucroMinimo}`);
    //     console.log(`\nIntervalor lucro(histórico): ${retorno.lucroIntervalo}`);
    //     console.log(`Historico de venda length: ${retorno.quantidadeVenda}`)
    //     return retorno;
    // }
}

module.exports = Estrategia01;


module.exports = class RespostaServidor {
    constructor(){
        this.codigo=0;
        this.mensagem = '';
        this.dado = null;
    }
    static cria(codigo, mensagem, dado){
        const obj = new RespostaServidor();
        obj.codigo = codigo;
        obj.mensagem = mensagem;
        obj.dado = dado;
        return obj;
    }
} 
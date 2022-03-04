const JsonConverter = require('../infrastructure/jsonConverter');
module.exports = class ResponseServer {
    
    constructor() {
        this.code = 0;
        this.message = '';
        this.data = null;
    }

    static create(code, message, data) {
        const obj = new ResponseServer();
        obj.code = code;
        obj.message = message;
        obj.data = data;
        return obj;
    }
    
    toJson() {
        return JsonConverter.objectToString({
            code: this.code,
            message: this.message,
            data: this.data
        });
    }
}
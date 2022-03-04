module.exports = class JsonConverter {
 
    static stringToJson(stringText){
        try{
            return JSON.parse(stringText);
        }catch(e){
            return null;
        }
    }

    static objectToString(element){
        try{
           return JSON.stringify(element);
        }catch(e){
            return '';
        }
    }
} 
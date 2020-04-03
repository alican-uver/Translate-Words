export class Request {
    
    constructor() {
        this.apikey = "trnsl.1.1.20200130T123814Z.fedc09f74bbdfbc9.ecf2fae2c44ef9d06ec895253b8360bc98a6e64b"
        this.endPoint = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=";
    }

    async translateWord(word,language) {
        const response = await fetch(`${this.endPoint}${this.apikey}&text=${word}&lang=${language}`);
        const transWord = await response.json()
        return transWord;
    }

};


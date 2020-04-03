export class Request {

    constructor(word, language) {
        this.apikey = "trnsl.1.1.20200130T123814Z.fedc09f74bbdfbc9.ecf2fae2c44ef9d06ec895253b8360bc98a6e64b"
        this.word = null;
        this.language = null;
        this.endPoint = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=";
    }

    async translateWord() {
        const response = await fetch(`${this.endPoint}${this.apikey}&text=${this.word}&lang=${this.language}`);
        const word = await response.json()
        return word;
    }

    translateNewWord(word, translateTo) {
        this.word = word;
        this.language = translateTo;
    }

};


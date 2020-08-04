export class Request {

    constructor() {
        this.apikey = process.env.YANDEX_TRANSLATE_API_KEY;
        this.endPoint = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=";
    }

    async translateWord(word, language) {
        try {
            const response = await fetch(`${this.endPoint}${this.apikey}&text=${word}&lang=${language}`);
            const transWord = await response.json()
            return transWord;
        } catch (error) {
            console.log(error);
        }
    }

};


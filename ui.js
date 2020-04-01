class UI {
    constructor() {
        this.outputTranslate = document.getElementById("translate-out");
        this.clearIcon = document.getElementById("clear-word");
        this.inputTranslate = document.getElementById("translate-in");   
        this.flagImg = document.getElementById("flag-img");
        this.languageList = document.getElementById("languages");  
    };

    focusInArea() {
        this.clearIcon.classList.remove("d-none");
    };       

    focusOutArea() {
        let value = this.inputTranslate.value;
        value == "" ? this.clearIcon.classList.add("d-none") : "";
    };

    showResult(word) {
        this.outputTranslate.value = word;
    };

    clearArea() {
        this.inputTranslate.value = "";
        this.outputTranslate.value = "";
    };

    changeImg() {
        this.flagImg.src = `/img/${this.languageList.value}.png`;
    };

   
}
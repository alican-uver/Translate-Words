export class UI {
    constructor() {
        this.outputTranslate = document.getElementById("translate-out");
        this.clearIcon = document.getElementById("clear-word");
        this.inputTranslate = document.getElementById("translate-in");
        this.flagImg = document.getElementById("flag-img");
        this.languageList = document.querySelector(".select-languages");
        this.languageName = document.getElementById("language-name");
        this.lastTranslateWord = document.getElementById("last-translate-word");
        this.lastTranslateWordArea = document.querySelector(".last-translate-word-area");
        this.showListIcon = document.querySelector(".change-language-icon");
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

    showLanguageList() {
        this.languageList.classList.toggle("d-none");
        this.showListIcon.classList.toggle("rotate-animation");
    };

    showLangImgAndName(lang) {
        const srcLang = lang.dataset.lang;
        this.flagImg.src = `./src/img/${srcLang}.png`;
        this.languageName.textContent = lang.textContent;
        this.showLanguageList();
    };

    showLastTranslateWord() {
        let words = JSON.parse(localStorage.getItem("lastSearchWord"));

        words === null ? this.lastTranslateWordArea.classList.add("d-none")
            : this.lastTranslateWord.value = words[0];
    };

    clearLastSearchArea() {
        localStorage.removeItem("lastSearchWord");
        this.lastTranslateWordArea.classList.add("d-none");
    };

}


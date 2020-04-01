class UI {
    constructor() {
        this.outputTranslate = document.getElementById("translate-out");
        this.clearIcon = document.getElementById("clear-word");
        this.inputTranslate = document.getElementById("translate-in");   
        this.flagImg = document.getElementById("flag-img");
        this.languageList = document.querySelector(".select-languages");   
        this.languageName = document.getElementById("language-name");
        this.lastTranslateWord = document.getElementById("last-translate-word"); 
        this.lastTranslateWordArea = document.querySelector(".last-translate-word-area");
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
    }

    showLangImgAndName(lang) {
        const srcLang = lang.dataset.lang;
        this.flagImg.src = `/img/${srcLang}.png`;
        this.languageName.textContent = lang.textContent;      
        this.showLanguageList();                  
    }

    showLastTranslateWord() {
        let words = JSON.parse(localStorage.getItem("lastSearchWord"));
        if (words == "" ) {
            this.lastTranslateWordArea.classList.add("d-none");
        } 
        else {
            this.lastTranslateWord.value = words[0];
        }               
    }
}
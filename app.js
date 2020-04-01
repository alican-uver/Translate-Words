const translateInArea = document.getElementById("translate-in");
// const languageListTo = document.querySelector(".languages");
// const languageList = document.querySelector("#languages");
const clearIcon = document.getElementById("clear-word");
const languages = [...document.querySelectorAll(".language")];
const showLanguageIcon = document.querySelector(".change-language-icon");        

let selectedLang = "";

const translate = new Request();
const ui = new UI();

allEventListeners();
function allEventListeners() {
    translateInArea.addEventListener("keyup", translateWord);

    translateInArea.addEventListener("focusin", () => {
        ui.focusInArea();
    })

    translateInArea.addEventListener("focusout", () => {
        ui.focusOutArea();
    })

    clearIcon.addEventListener("click", () => {
        ui.clearArea();
    })

    showLanguageIcon.addEventListener("click", () => {
        ui.showLanguageList();
    })

    languages.forEach(lang => {
        lang.addEventListener("click", () => {
            selectedLang = lang.dataset.lang;
            ui.showLangImgAndName(lang);
        })
    });

    document.addEventListener("DOMContentLoaded", () => {
        ui.showLastTranslateWord();
    })
};

function translateWord(e) {
        let word = e.target.value.trim();
        Storage.addToStorage(word); 
        
        if (word !== "" && selectedLang !== "") {
            translate.translateNewWord(word, selectedLang);
        }
        if (word !== "" && selectedLang == "") {
            selectedLang = "en";
            translate.translateNewWord(word, selectedLang);
        }
        translate.translateWord()
            .then((result) => {
                ui.showResult(result.text[0])
            }).catch((err) => {
                console.log(err)
            });
};

















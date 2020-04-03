// Import modules and Select Elements
import './scss/style.scss';
import { Request } from './request';
import { UI } from './ui';
import { Storage } from './storage';

const translateInArea = document.getElementById("translate-in");
const clearIcon = document.getElementById("clear-word");
const languages = [...document.querySelectorAll(".language")];
const showLanguageIcon = document.querySelector(".change-language-icon");
const clearLastSearchIcon = document.querySelector(".clear-last-search");

let selectedLang = ""; //  whichever language is chosen, it keeps the language information selected

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
    })

    document.addEventListener("DOMContentLoaded", () => {
        ui.showLastTranslateWord();
    })

    clearLastSearchIcon.addEventListener("click", () => {
        ui.clearLastSearchArea();
    })

    // !!! If desired, all click events can be managed in the ui.js class, under just one function in this way, with event capturing.
    // !!but i didn't do that.
    // form.addEventListener("click", e => {  
    //     ui.manageClickEvents(e);
    // }) 
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
















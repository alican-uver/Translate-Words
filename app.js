const translateInArea = document.getElementById("translate-in");
const languageListTo = document.querySelector(".languages");
const languageList = document.querySelector("#languages");
const clearIcon = document.getElementById("clear-word");

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

    languageList.onchange = () => {
        ui.changeImg();
    }

};

function translateWord(e) {
    let word = e.target.value.trim();
    let selectLang = languages.value;

    if (word !== "" && selectLang !== "") {
        translate.translateNewWord(word, selectLang);
        translate.translateWord()
            .then((result) => {
                ui.showResult(result.text[0])
            }).catch((err) => {
                console.log(err)
            });
    }
};

















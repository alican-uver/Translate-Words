class Storage {
    static addToStorage(word) {
        let lastSearchedWord; 
        
        if (localStorage.getItem("lastSearchedWord") === null) {
            lastSearchedWord = [];
        }

        else {
            lastSearchedWord = JSON.parse(localStorage.getItem("lastSearchWord"))
        }

        lastSearchedWord.push(word);
        localStorage.setItem("lastSearchWord", JSON.stringify(lastSearchedWord))

    }
}
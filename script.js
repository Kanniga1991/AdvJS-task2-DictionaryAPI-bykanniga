async function getData(val) {
    try {
        const user = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en_US/${val}`,
            {
                method: "GET"
            });
        const data = await user.json();

        console.log(data[0]);

        content.innerHTML = 
        `
        <div>Word</div>
        <div>${data[0].word}</div>
        <div>Phonetics</div>
        <div>${data[0].phonetics[0].text}</div>        
        <div>Part of Speech</div>
        <div>${data[0].meanings[0].partOfSpeech}</div>
        <div>Definition</div>
        <div>${data[0].meanings[0].definitions[0].definition}</div>
        <div>Example</div>
        <div>${data[0].meanings[0].definitions[0].example}</div>
        <div>Audio</div>
        <audio src="${data[0].phonetics[0].audio}" controls></audio>
        `;

    } catch (err) {
        console.log(err);

        contain.innerText = err;
    }
}

let content = document.getElementById('meaning');

function search() {
    let info = document.getElementById('searching_word').value;
    getData(info);
    contain.innerHTML = "";
}
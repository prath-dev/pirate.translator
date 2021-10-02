let translateBtn = document.querySelector('#translate');
let input = document.querySelector('#input-txt');
let outputtext = document.querySelector('#output');
function error() {
    outputtext.innerText = "some error happen try again plzz !!!";
}

function Translate() {

    if (input.value) {
        let url = `https://api.funtranslations.com/translate/minion.json?text=${inputText.value}`;
        console.log(url);
        fetch(url)
            .then(data => data.json())
            .then((data) => {
                console.log(data.contents.translated)
                outputtext.innerHTML = data.contents.translated
            }).catch(error)

    } else {
        alert('Please Enter some text')
    }

}

translateBtn.addEventListener('click', Translate)
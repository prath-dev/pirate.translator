let translate = document.querySelector('#translate');
let input = document.querySelector('#input');
let outputtext = document.querySelector('#output');

function error() {
    outputtext.innerText = "some error happen try again plzz !!!";
}

function Translate() {

    if (input.value) {
        let url = `https://api.funtranslations.com/translate/pirate.json?text=${input.value}` ;
        console.log(url);
        fetch(url)
            .then(data => data.json())
            .then((data) => {
                console.log(data.contents.translated)
                outputtext.innerText = data.contents.translated
            }).catch(error)

    } else {
        alert('Please Enter some text')
    }

}

translate.addEventListener('click', Translate)
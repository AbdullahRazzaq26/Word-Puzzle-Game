let container = document.getElementById("container");
let content = document.getElementById("content");
let fruits = ["apple", "banana", "mango", "grapes", "orange", "pineapple", "kiwi", "strawberry", "watermelon", "peach"];
let currentWord = '';
let h1 =  document.createElement ("h1")
let popup = document.getElementById("popup");

foo()

function foo() {
    let random = Math.floor(Math.random() * fruits.length)
    let word = fruits[random].split('')
    currentWord = word.slice()

    console.log(fruits[random], random);
    console.log(word);

    renderBtns(word)
}

function renderBtns(word) {
    for (let i = word.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * word.length);
        let temp = word[i];
        word[i] = word[j];
        word[j] = temp;
    }

    container.innerHTML = ''

    word.forEach(letter => {
        var btn = document.createElement("button");
        btn.id = letter;
        btn.innerHTML = letter;

        btn.addEventListener("click", function () {
            console.log(btn.innerText);
            content.innerHTML += btn.innerText + " ";
            btn.remove()
        })

        container.appendChild(btn);
    });
}
function submit() {
    let userValue = content.innerText.replaceAll(" ", "");
    let originalWord = currentWord.join('');
    let popupContent = "";

    if (userValue === originalWord) {
        popupContent = `
            <h1>✅ Correct!</h1>
            <p>You unscrambled it perfectly.</p>
            <button onclick="closePopup()">Awesome!</button>
        `;
    } else {
        popupContent = `
            <h1>❌ Oops!</h1>
            <p>The correct word was: <strong>${originalWord}</strong></p>
            <button onclick="closePopup()">Try Again</button>
        `;
    }

    popup.innerHTML = popupContent;
    popup.classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closePopup() {
    popup.classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}


function reset() {
    container.innerHTML = '';
    content.innerHTML = '';
    closePopup();
    renderBtns(currentWord);
}

function newWord() {
    container.innerHTML = '';
    content.innerHTML = '';
    closePopup();
    foo();
}
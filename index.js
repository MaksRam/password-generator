const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", 
"V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
"u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", 
"*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const firstPassword = document.getElementById('rec95txt');
const secondPassword = document.getElementById('rec96txt');

function generate() {
    const pass = [];
    while (pass.length < 13) {
    let randomNum = Math.floor(Math.random() * 90);
    pass.push(characters[randomNum])
    }
    return pass.join('')
    }

    function getPass() {
        if(firstPassword.innerHTML == 0) {
        firstPassword.innerHTML = generate();
        } else if (secondPassword.innerHTML == 0) {
        secondPassword.innerHTML = generate()};
    }

    function resetPass() {
        firstPassword.innerHTML = '';
        secondPassword.innerHTML = '';
    }    
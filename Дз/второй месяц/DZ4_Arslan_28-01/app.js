//Часть 1
let fullName = prompt()

function masking(text) {
    let words = text.split(" ")
    answer = []
    for (let i of words) {
        let chars = i.split("")

        answer.push([chars[0], ...chars.slice(1, -1).fill("_"), chars.pop()].join(""));

    }
    console.log(answer.join(" "))
}
masking(fullName)

//Часть 2
let card_num = prompt("card_num")
let card_symbol = prompt("card_symbol")

function card_musking(info, symbol) {
    let num=info.split("")
    console.log([...num.slice(0,6) , ...num.slice(6,12).fill(symbol), ...num.slice(12,-1), num.pop()].join(""));
}
card_musking(card_num , card_symbol) 



//Часть 3
let firstName = prompt("Введите имя")
function palindrome(text){
    text = text.toLowerCase();
    return text === text.split("").reverse().join("");
}
console.log(palindrome(firstName));


//Часть 4
const result = prompt("На пишите ключевое слово");
function CheckDangerWords(text){
    const checkDangerWords = ["убийство", "террористам", "спасибо"];
    const toLowerText = text.toLowerCase();
    for (const word of checkDangerWords){
        if(toLowerText.includes(word)){
            return false
        }
    }
    return true
}
console.log(CheckDangerWords(result));
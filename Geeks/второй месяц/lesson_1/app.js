let userCardBalance = 500;
let choice = prompt("Пополнить/Снять")
if (choice ){
    let amount = Number(prompt("На сколько хотите пополнить"))
}else{
    let amount = Number(prompt("На сколько хотите снять"))
}




userCardBalance = userCardBalance + amount

console.log("Ваш баланс:" + userCardBalance );
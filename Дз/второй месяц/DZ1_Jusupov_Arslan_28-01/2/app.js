var firstName = prompt("Введите ваше имя");
var lastName = prompt("Введите вашу фамилию");
var age = prompt("Введите ваш возраст");
if ( age < 18){
    console.log("Привет," + " " + firstName + "!");
} else{
    console.log("Здравствуйте," + " " + firstName + " " + lastName + "!");
}
var collor = prompt('Выберите цвет')
if(collor == 'зелёный'){
    console.log('иди');
}else if(collor == 'жёлтый'){
    console.log('жди');
}else if(collor == 'красный'){
    console.log('стой)');
}else{
    console.error("не буду работать");
}

var temprature = Number(prompt(' выберите темпратуру'))
if(temprature < -10){
    console.log('морозно');
}else if (temprature >= -10 && temprature <= 0){
    console.log('очень холодно');
}else if (temprature >= 0 && temprature <= 10){
    console.log(' холодно');
}else if (temprature >= 11 && temprature <= 20){
    console.log('прохладно');
}else if (temprature >= 21 && temprature <= 25){
    console.log('облачно');
}else if (temprature >= 26 && temprature <= 32){
    console.log('тепло');
}else if (temprature >= 33){
    console.log('жара жара');
}else{
    console.error("не буду работать");
}

var num1 = Number(prompt('первое число'))
var num2 = Number(prompt('второе число'))
if (num1 > num2){
    console.log( num1);
} else if (num2 > num1){
    console.log(num2);
}else if ( num1 == num2){
    console.log("оба числа равны");
}else{
    console.error("не буду работать");
}

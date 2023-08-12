
const first_convert = document.querySelector(".container_one")
const input1 = document.querySelector(".exchange_input-one")
const btn = document.querySelector(".button_center")
const input2 = document.querySelector(".exchange_input-two")

let counter = 0
input1.oninput = () => {
    input2.value = (input1.value * 87.78).toFixed(2)

}
input2.oninput = () => {
    input1.value = (input2.value / 87).toFixed(2)
}

btn.onclick = () => {
    if (counter == 0) {
        first_convert.style.flexDirection = "row-reverse"
        counter++
    } else {
        first_convert.style.flexDirection = "row"
        counter--
    }

}
const first_convert_two = document.querySelector(".container_two")
const input_one = document.querySelector(".exchange_input_from")
const btn_two = document.querySelector(".exchange_button")
const input_two = document.querySelector(".exchange_input_to")

let counter_two = 0
input_one.oninput = () => {
    input_two.value = (input_one.value / 0.95).toFixed(2)
}
input_two.oninput = () => {
    input_one.value = (input_two.value * 0.95).toFixed(2)
}


btn_two.onclick = () => {
    if (counter_two == 0) {
        first_convert_two.style.flexDirection = "row-reverse"
        counter_two++
    } else {
        first_convert_two.style.flexDirection = "row"
        counter_two--
    }
}


const first_convert_three = document.querySelector(".container_three")
const ex_one = document.querySelector(".ex-input-one")
const btn3 = document.querySelector(".btn-center")
const ex_two = document.querySelector(".ex-input-two")
let counter_three = 0
ex_one.oninput = () => {
    ex_two.value = (ex_one.value * 12.22).toFixed(2)
}
ex_two.oninput = () => {
    ex_one.value = (ex_two.value / 12.22).toFixed(2)

}




btn3.onclick = () => {
    if (counter_three == 0) {
        first_convert_three.style.flexDirection = "row-reverse"
        counter_three++
    } else {
        first_convert_three.style.flexDirection = "row"
        counter_three--
    }
}











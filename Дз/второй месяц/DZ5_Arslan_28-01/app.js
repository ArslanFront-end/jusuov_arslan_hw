const minus = document.querySelector(".minus")
const schet = document.querySelector(".schet")
const plus = document.querySelector(".plus")

let counter = 0


console.log(minus);
console.log(plus);

minus.onclick = () =>{
    counter-=1
    if(counter>=-9 && counter<=0 || counter<=9 && counter>= 0){
        schet.innerHTML="0"+counter 
    }
    else{
        schet.innerHTML=counter
    }

} 

plus.onclick = () =>{
    counter+=1
    if(counter<=9 && counter>= 0 || counter>=-9 ){
        schet.innerHTML="0"+counter
    }else{
        schet.innerHTML=counter
    }
}
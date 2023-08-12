const container = document.querySelector(".container");
function createSquare(){
    const div = document.createElement('div');
    div.classList.add("square");
    return div
}
for( let i=0; i < 100; i++){
    const squareElement = createSquareElement();
    container.append(squareElement);
}
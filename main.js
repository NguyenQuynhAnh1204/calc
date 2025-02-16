const buttInt = Array.from(document.getElementsByClassName('butt-int'))

const expression = document.getElementById("expression")

console.log("", buttInt)
console.log("", expression)

buttInt.forEach(function (butt, index) {
    butt.onclick = () => { 
        if (index < 3) {
            console.log(index + 7);
        } 
        else if (index < 6) {
            console.log(index + 1);
        } 
        else if (index < 9) {
            console.log(index - 5);
        } 
        else if (index < 10) {
            console.log(index - 9);
        }
     }
}
)


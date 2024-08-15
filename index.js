//calculator
const display = document.getElementById("appendDisplay")
function expressDisplay(input) {
    display.value += input;
}
function clrDisplay() {
    display.value = ""
}
function calculateNo() {
    try{  
    display.value = eval(display.value)
    Math.round(display)
    }   
    catch(error) {
        display.value = "";
    }
}
function clrBefore() {
    display.value = display.value.toString().slice(0, -1)
}
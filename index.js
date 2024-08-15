//calculator
const display = document.getElementById("appendDisplay")
function expressDisplay(input) {
    display.value += input;
}
function clrDisplay() {
    display.value = ""
}
function calculateNo() {
    try {
    display.value = eval(display.value)
    }
    catch(error) {
        display.value = "Error"
    }
}  
function clrBefore() {
    display.value = display.value.toString().slice(0, -1)
}
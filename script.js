var op;
var number1;
var number2;
var txt = document.getElementById('txtResult');
var setp = false;

function btnNumber(e) {
    var txt = document.getElementById('txtResult')
    txt.value +=e.innerText;
}
function opertion(e) {
    op = e.innerText;
    var txt = document.getElementById('txtResult')
    number1=parseInt(txt.value)
    txt.value = '';
    
}
function calc() {
    var txt = document.getElementById('txtResult');
    var result
    number2=parseInt(txt.value);

    switch (op) {
        case '+':  result = number1 + number2; break;
        case '-':  result = number1 - number2; break;
        case '*':  result = number1 * number2; break;
        case '/':  result = number1 / number2; break;
        default:   result = 'Error'
        
    }
    txt.value = result

}

function clr(){
    txt.value = ""
    setp=false;
}
function pn(){
    txt.value = txt.value *-1;
}
function p(){
    if(setp== false){
    txt.value += "."
    setp=true;
    }
}
function percent(){
    txt.value = txt.value/100
}




function calculateTotal(event) {
  event.preventDefault();

}

var operation;

function plusPressed(e){
  event.preventDefault();
  operation = '+';
}

function minusPressed(event){
  event.preventDefault();
  operation = '-';
}

function multiplyPressed(event){
  event.preventDefault();
  operation = '*';
}

function dividePressed(event){
  event.preventDefault();
  operation = '/';
}

function equalsPressed(event){
  event.preventDefault();
  operation = '=';
}


function numberPressed(number){
  var displayedNumber = Number(document.getElementById('displaynumber').textContent);
  var x = number;

  if(operation == '+') {
    displayedNumber = displayedNumber + number;
  }
    else if(operation == '-') {
    displayedNumber = displayedNumber - number;
  }
    else if(operation == '*') {
    displayedNumber = displayedNumber * number;
  }
    else if(operation == '/') {
    displayedNumber = displayedNumber / number;
  }
  else if(operation == '=') {
    displayedNumber = x;
  }
    else {
    displayedNumber = number;
  }


document.getElementById('displaynumber').textContent = displayedNumber;
}

function onePressed(event) {
  event.preventDefault();
  numberPressed(Number(1));
}

function twoPressed(event) {
  event.preventDefault();
  numberPressed(Number(2));
}

function threePressed(event) {
  event.preventDefault();
  numberPressed(Number(3));
}

function fourPressed(event) {
  event.preventDefault();
  numberPressed(Number(4));
}

function fivePressed(event) {
  event.preventDefault();
  numberPressed(Number(5));
}

function sixPressed(event) {
  event.preventDefault();
  numberPressed(Number(6));
}

function sevenPressed(event) {
  event.preventDefault();
  numberPressed(Number(7));
}

function eightPressed(event) {
  event.preventDefault();
  numberPressed(Number(8));
}

function ninePressed(event) {
  event.preventDefault();
  numberPressed(Number(9));
}

function zeroPressed(event) {
  event.preventDefault();
  numberPressed(Number(0));
}




document.getElementById('1').addEventListener('click', onePressed);
document.getElementById('2').addEventListener('click', twoPressed);
document.getElementById('3').addEventListener('click', threePressed);
document.getElementById('4').addEventListener('click', fourPressed);
document.getElementById('5').addEventListener('click', fivePressed);
document.getElementById('6').addEventListener('click', sixPressed);
document.getElementById('7').addEventListener('click', sevenPressed);
document.getElementById('8').addEventListener('click', eightPressed);
document.getElementById('9').addEventListener('click', ninePressed);
document.getElementById('0').addEventListener('click', zeroPressed);
document.getElementById('*').addEventListener('click', multiplyPressed);
document.getElementById('/').addEventListener('click', dividePressed);
document.getElementById('+').addEventListener('click', plusPressed);
document.getElementById('-').addEventListener('click', minusPressed);
document.getElementById('=').addEventListener('click', equalsPressed);

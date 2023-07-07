'USE STRICT'

var number1 = parseInt(prompt("Enter one number",0))
var number2 = parseInt(prompt("Enter other one number",0))

document.write("<h1>THE EVEN NUMBERS BETWEEN "+number1+" AND "+number2+" ARE THIS: </h1>");

for (var i = number1 + 1; i <= number2 - 1; i++) {
    if (i % 2 == 0){
    document.write(i+"</br>");
}}
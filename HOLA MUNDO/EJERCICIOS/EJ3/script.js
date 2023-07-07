var number1 = parseInt(prompt("Enter one number",0))
var number2 = parseInt(prompt("Enter other one number",0))

document.write("<h1>Between "+number1+" and "+number2+" are the following numbers: <h1/>")
if(number1 + 1 == number2 || number1 == number2){
    document.write("<p>It exist Zero numbers Between this numbers</p>");
}else{
for (var i = number1 + 1; i <= number2 - 1; i++) {
    document.write(i+"</br>");
}}

var sum = 0;
var count = 0;
var num = parseInt(prompt("Give me a positive integer number"));

while (num >= 0) {
    sum += num;
    count++;
    num = parseInt(prompt("Give me a positive integer number"));
}

var avg = count > 0 ? sum / count : 0;

alert("The sum of the numbers is: " + sum);
alert("The average of the numbers is: " + avg);

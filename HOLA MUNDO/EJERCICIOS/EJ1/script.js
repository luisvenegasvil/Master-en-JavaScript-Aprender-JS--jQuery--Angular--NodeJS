var N1 = parseInt(prompt("GIVE ME ONE NUMBER"));
var N2 = parseInt(prompt("GIVE ME OTHER NUMBER, PLEASE"));


if (N1 == N2 ){
    alert ("LOS DOS NUMEROS SON IGUALES");3
} else if ((N1 != N2) && N1 > N2 ){
    alert ("THE FIRST NUMBER IS GREATER THAN THE SECOND ONE: " + N1);
} else if ((N1 != N2) && N1 < N2 ){
    alert ("THE SECOND NUMBER IS GREATER THAN THE FIRST ONE: " + N2);
} else {
    alert ("YOU HAVE A TROUBLE, MAYBE YOU WILL CAPTURE NON-NUMBER CHARACTERS");
}

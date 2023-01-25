//EJERCICIO OPERADORES&SWITCH

var num1 = parseInt(prompt('Escribe primer numero'));
var num2= parseInt(prompt('Escribe el segundo numero'));
var operador= prompt('Elige operador!: + - * /')

var resultadosuma = num1+num2;
var resultadoresta= num1-num2;
var resultadomultiplica= num1*num2;
var resultadodivide= num1/num2;


switch (operador){

case '+':
console.log(resultadosuma);
break;

case '-':
  console.log(resultadoresta);
break;

case '*':
  console.log(resultadomultiplica);
break;

case '/':
  console.log(resultadodivide);
break;



}


var num1= parseInt(prompt('Ingresa un numero entre 1 y 50!'));
var num2= parseInt(prompt('Ingresa un numero entre 1 y 50!'));
var suma= num1+num2;
var L=[];

if(((num1>=1) && (num1<=50)) && (num1>=1) && (num1<=50)){
   alert('La suma del numero: '+num1+' y el numero: '+num2+' es '+suma);
   L.push(num1,num2);
} 
else {
  alert('Los numeros introducidos deben ser de 1 al 50');
  

}
// encontrar si los numeros son primos
const esPrimo = numero => {
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) 
    return false;
	} 
	return true;
}

// Mostrar si tots dos números introduïts són primers, si no ho són mostrar a l'usuari que no són primers tots dos o un.
// Asi me funciona el codigo pero, no he sabido automatizarlo para no poner tantos if.....ya me direis como hacerlo

if (esPrimo(num1)==true && (esPrimo(num2)==true)){
alert('Ambos numeros '+L.join(' y ')+' son primos!');
} 
else if(esPrimo(num1)==false && (esPrimo(num2)==true)){                      
  alert('El primer numero no es primo: '+num1+' El segundo es primo: '+ num2);
}
else if(esPrimo(num1)==true && (esPrimo(num2)==false)){                      
  alert('El primer numero es primo: '+num1+' El segundo no es primo: '+ num2);
}
else{
  alert('Ningun numero es primo');
}

//Mostrar si tots dos números introduïts són parells, si no ho són, mostrar a l'usuari que no són parells tots dos o un.
var pares = [];
var nop=[];
var rango=[];

function par(numero){
pares.push(numero);
return numero%2===0;
}
par()

if (!L.filter(par).length) { 
alert("No hay numeros pares!"); 
}else{
  alert(pares+' es par!');
}

function nopar(a){
  nop.push(a);
  return a%2===1; 
}
nopar()

if (!L.filter(nopar).length){ 
alert("No hay numeros impares!"); 
}else{
  alert(nop +' es impar!');}

// Si el número 1 és menor que el número 2, imprimiu només els nombres parells en el rang entre num1 i num2 en forma ascendent.


if(num1<num2){
  for(let x=num1; x<=num2;x+=2){
    if(par(x)){
    rango.push(x);
    
  }
 }alert('El rango es: '+rango);
}


//Si el número 1 és més gran que el número 2, imprimiu només els nombres imparells en el rang entre num1 i num2 en forma descendent.
if(num1>num2){
  for(let x=num1; x>=num2;x-=2){
    if(nopar(x)){
    rango.push(x);
    
  }
 }alert('El rango es: '+ rango);
}


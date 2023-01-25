console.log('hola');

//var test = document.getElementById('titulo');
//BUCLES


  let x= 10;
  let y=10;

  do {

    //x= prompt('Entra un numero que sea mayor que 10!')
    x++;
    console.log('do while '+x);
  } while (x<10);


while ( y < 10 ) {
  //y = prompt('Entra un numero que sea mayor que 10!');
  y++;
  console.log('while '+y);
}

for (let i=1; i<=10; i++){
console.log('for: '+i);
}

const frutas=['pera','manzana','fresa','kiwi','platano'];
console.log(frutas.length);

for(let i=0;i<frutas.length;i++){
console.log('for:'+i+':'+frutas[i]);
//if (frutas[i]== "fresa") break;

}

frutas.forEach(function(fruta){
  console.log(fruta);
  //no se puede utilizar el break con el forEach
}) 

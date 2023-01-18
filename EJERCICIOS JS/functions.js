function mostrar_texto(){

console.log('Mi primera funcion');

}

mostrar_texto();


function mostrar_texto_param( texto ){

  console.log('El texto recibido es: '+texto);
  
  }
  mostrar_texto_param('loremipsum');




  const mostrar= mostrar_texto_param('lorem2');

  function mult(op1,op2){
    let result=op1*op2;
    return result;

  }

  let producto= mult(5,3);
  //console.log('el resultado es: '+ producto);

  let div= function(div1,div2){
    let division = div1/div2;
    return division;

  }

  console.log(div(12,3));

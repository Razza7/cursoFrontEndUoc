var a= '2';
var b= 5;

var c;

c= a+b;

console.log('c=' + c);

if (a==b){
  console.log('iguales en valor y tipo');
}

else{
  console.log('diferentes');
}

c= (a==b)? 'iguales':'diferente';
console.log(c); // else if

if ((a==b) && (a=='2')){
  console.log('es complicado todo!');
}

if ((a==b) || (a=='2')){
  console.log('es complicado todo!');
}

if (!(a==b)){
  console.log('no es lo mismo a==b');
}


let mood='crazy';
switch (mood){

case 'happy':
console.log('😀')
break;

case 'sad':
console.log('😭')
break;

case 'crazy':
console.log('l🤪')
break;

default:
  console.log('😐')

}
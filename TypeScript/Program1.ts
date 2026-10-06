var message:String="Hello";
let msg="World";  // This also convert into var in ajavascript
console.log(message);
for(let i=0;i<4;i++)
{ const pi=3.14;
  //  pi=34;
    console.log("Bye");
  console.log(i+' '+pi);
}
//console.log(pi+' ');  // Even error it will 
console.log('Thank You');
console.log("Bye");

//Give compilation error because scopt of
// let variable is not outside the loop. SO better
// to declare var whose scope is any where.


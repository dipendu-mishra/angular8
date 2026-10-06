//Add more names in a specific row given by user

var array :string[][]=[["Zafar","Manoj","Rocky"],
["Hussain","Acharya","Gowda"],
["Abba","Tejas","Rakesh"]]; 

console.log("Input array of names  : " );
for(let i=0;i<3;i++)
{
    console.log("team "+ ":" + array[i] )
 }

 array.splice(1,0,["Kali","Rey","Bolu"])
 
 console.log("Array of names after adding : " );
for(let i=0;i<4;i++)
{
    console.log("team "+ ":" + array[i] )
 }
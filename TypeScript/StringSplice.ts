var array :string[][]=[["Amit","Priya","Jhon"],
                        ["Znna","Zoe","Jack"],
                        ["Mary","Denver","Tesla"]]; 

console.log("Input array of names  : " );
for(let i=0;i<3;i++)
{
    console.log("team "+ ":" + array[i] )
 }

 array.splice(1,0,["Jane","Rio","veronica"])
 
 console.log("Array of names after adding : " );
for(let i=0;i<4;i++)
{
    console.log("team "+ ":" + array[i] )
 }
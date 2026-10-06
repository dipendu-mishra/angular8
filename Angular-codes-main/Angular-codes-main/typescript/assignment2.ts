// In two diemsnional string array sort each row data. Each row represent the team members.

var array :string[][]=[["Zafar","Manoj","Rocky"],
                        ["Hussain","Acharya","Gowda"],
                        ["Abba","Tejas","Rakesh"]]; 

console.log("Input array of names  : " );
for(let i=0;i<3;i++)
{
    console.log("team "+ ":" + array[i] )
    array[i].sort();
    
}

console.log("--------------------------------------- " );
console.log("Sorted array of names  : " );
for(let i=0;i<3;i++)
{
    console.log("team :"+array[i])
}


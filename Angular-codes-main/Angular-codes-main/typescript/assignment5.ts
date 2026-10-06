///Deleteing particular name for the 2-D array

var array :string[][]=[["Amit","Priya","Jhon"],
                        ["Znna","Zoe","Jack"],
                        ["Mary","Denver","Tesla"]]; //Input array

 var n=3;// number of rows
 var m=3;//number of columns                       

console.log("Input array of names  : " );

var ele="Tesla" //Element to deleted
for(let i=0;i<n;i++)
{
    console.log("team "+ ":" + array[i] )
    for(let j=0;j<m;j++)
    {
        if(array[i][j]==ele)
        { 
        var index= array[i].indexOf(ele);
        var first= array[i].slice(0,index)
        var last = array[i].slice(index+1,3)
        array[i]=first.concat(last)
        m--;
        }
        
    }

}
console.log("Array of names after deleting : " );
for(let i=0;i<n;i++)
{
    console.log("team "+ ":" + array[i] )
 }

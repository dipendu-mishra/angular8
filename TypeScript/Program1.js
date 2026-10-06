var message = "Hello";
var msg = "World"; // This also convert into var in ajavascript
console.log(message);
for (var i = 0; i < 4; i++) {
    var pi = 3.14;
    //  pi=34;
    console.log("Bye");
    console.log(i + ' ' + pi);
}
//console.log(pi+' ');  // Even error it will 
console.log('Thank You');
console.log("Bye");
//Give compilation error because scopt of
// let variable is not outside the loop. SO better
// to declare var whose scope is any where.
/*
PS D:\angular_pr> tsc --target es6 Properties4.ts
error TS6046: Argument for '--target' option must be: 'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'esnext'.
PS D:\angular_pr>


*/
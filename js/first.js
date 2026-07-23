var a=100;
function called(){
    var a=300;
    console.log(a)
    document.write(a)
}
called();

a=500;
console.log(a)
a=60;
console.log(a)
let b=10;
function gooo(){
    let b=20;
    console.log("function b",b)


}
gooo()
console.log("global b",b)
const d=80;
{
    console.log("const val in a block",d)
    {
       console.log("const val in a nested block",d) 
    }
    {
        const d=50;
        console.log("const vat type changed in a block",d)
        {
            // d=79;
            console.log(d)
        }
    }
}
var a=30;
console.log("a =",a)
document.write("<br>"+a)


var dic={
    nam:"john",
    age:35,
}
console.log(dic)
console.log(typeof dic)
// console.log([age])
console.log(Number(prompt("enter the value")));
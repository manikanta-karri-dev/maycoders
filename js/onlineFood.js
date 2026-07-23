let customerName=prompt("enter customer name")
let foodItem=prompt("enter food item")
let quantity=prompt("enter quantity")
var price=0
switch(foodItem){
    case 'pizza':
        price=299
    case 'burger':
        price=149
    case 'pasta':
        price=249
    case 'shawarma':
        price=199
    case 'fried rice':
        price=179
    default:
        console.log("enter items")
}
let element=document.getElementById("customer").innerText=customerName
document.getElementById("item").innerText=foodItem
document.getElementById("quantity").innerText=quantity
let subTotal=document.getElementById("subtotal").innerText=price*quantity
let gst=document.getElementById("gst").innerText=(price*quantity)*0.05
let packing=document.getElementById("packing").innerText="30"
if(subTotal>1000){
    var delivery =0
    
}
else{
    var delivery=60
    
}
document.getElementById("delivery").innerText=delivery
document.getElementById("total").innerText=subTotal+gst+packing+delivery
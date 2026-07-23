let cName=prompt("enter name");
let pPrice=Number(prompt("enter product price: "));
let quantity=Number(prompt("enter quantity: "));
let coupon=prompt("enter coupon");
let memberShip=prompt("is a member?: ")
let fPrice=pPrice*(quantity)
var dPercentage=0
let delivery=10
if(fPrice<=500){
    if(memberShip=="yes" && coupon =="first"){
        dPercentage=0.12
    }
    else if(memberShip=="yes" && coupon ==""){
        dpercentage=0.11
    }
    else{
        dpercentage=0.1
    }
    
}
else if(fPrice>=500 && fPrice<=1000){
    if(memberShip=="yes" && coupon =="first"){
        dPercentage=0.18
    }
    else if(memberShip=="yes" && coupon ==""){
        dpercentage=0.17
    }
    else{
        dpercentage=0.15
    }
}
else{
    dPercentage=0.2
}
let name=document.getElementById("name").innerText=cName
document.getElementById("price").innerText=fPrice
document.getElementById("discounts").innerText=fPrice * dPercentage
document.getElementById("dCharge").innerText=delivery
document.getElementById("totalAmount").innerText=fPrice - fPrice*dPercentage + delivery

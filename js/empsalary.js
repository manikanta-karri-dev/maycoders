
let empName = prompt("enter Name")
let empSalary = Number(prompt("enter salary: "))
let experience = Number(prompt("enter experience: "))
let percentage=0;
let tax=0;
if(experience<=5){
    percentage=0.1;
    
}
else if(experience>5 && experience<=10){
    percentage=0.2
}
else if(experience>10 && experience<=20){
    percentage=0.3
}
else if(experience>20){
    percentage=0.5
}
else{
    let element=document.getElementById("employee").innerHTML=`${empName} not an employee`;
}
if(empSalary>=40000){
    tax=0.08
}
else if(empSalary>=30000){
    tax=0.05
}
else{
    tax=0.03
}
if(percentage >0 ){
    let newSalary=empSalary*percentage;
    let taxAmount=empSalary*tax;
    let finalSalary=empSalary + newSalary - taxAmount;
    document.getElementById("employee").innerHTML=`<h1>${empName}</h1>`;
    document.getElementById("basic").innerHTML=`<h1>${empSalary}</h1>`;
    document.getElementById("years").innerHTML=`<h1>${newSalary}</h1>`;
    document.getElementById("tax").innerHTML=taxAmount; 
    document.getElementById("salary").innerHTML=finalSalary;
}

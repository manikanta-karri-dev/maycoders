const employees = [
    {
        id: 101,
        name: "Vinod",
        department: "HR",
        salary: 40000
    },
    {
        id: 102,
        name: "Rahul",
        department: "IT",
        salary: 55000
    },
    {
        id: 103,
        name: "Priya",
        department: "Finance",
        salary: 48000
    },
    {
        id: 104,
        name: "Kiran",
        department: "Marketing",
        salary: 46000
    },
    {
        id: 105,
        name: "Sneha",
        department: "HR",
        salary: 42000
    },
    {
        id: 106,
        name: "Arjun",
        department: "IT",
        salary: 62000
    },
    {
        id: 107,
        name: "Pooja",
        department: "Sales",
        salary: 45000
    },
    {
        id: 108,
        name: "Ravi",
        department: "Finance",
        salary: 51000
    },
    {
        id: 109,
        name: "Anjali",
        department: "HR",
        salary: 39000
    },
    {
        id: 110,
        name: "Suresh",
        department: "IT",
        salary: 70000
    },
    {
        id: 111,
        name: "Divya",
        department: "Marketing",
        salary: 47000
    },
    {
        id: 112,
        name: "Manoj",
        department: "Sales",
        salary: 44000
    },
    {
        id: 113,
        name: "Keerthi",
        department: "Finance",
        salary: 53000
    },
    {
        id: 114,
        name: "Ajay",
        department: "IT",
        salary: 68000
    },
    {
        id: 115,
        name: "Nikhil",
        department: "HR",
        salary: 41000
    },
    {
        id: 116,
        name: "Swathi",
        department: "Marketing",
        salary: 49500
    },
    {
        id: 117,
        name: "Teja",
        department: "Sales",
        salary: 46500
    },
    {
        id: 118,
        name: "Harsha",
        department: "IT",
        salary: 75000
    },
    {
        id: 119,
        name: "Lakshmi",
        department: "Finance",
        salary: 56000
    },
    {
        id: 120,
        name: "Ramesh",
        department: "HR",
        salary: 43000
    }
];
var bonus=0;
var output="";
for(i=0;i<employees.length;i++){
    
    if(employees[i].salary>50000){
        bonus=employees[i].salary*0.1
    }
    else{
        bonus=employees[i].salary*0.05
    }
    let netSalary=employees[i].salary + bonus
    output+=`       
    <tr>
    <td>${employees[i].id}</td>
    <td>${employees[i].name}</td>
    <td>${employees[i].department}</td>
    <td>${employees[i].salary}</td>
    <td>${bonus}</td>
    <td>${netSalary}</td>
    </tr>
    `;
}
document.getElementById("dashboard").innerHTML+=output
const students=[
    {
    id:101,
    name:"Rahul",
    course:"MERN",
    marks:45
    },
    {
    id:102,
    name:"vinod",
    course:"full satck",
    marks:88
    },
    {
    id:103,
    name:"dinesh",
    course:"java",
    marks:65
    },
    {
    id:104,
    name:"josh",
    course:"MERN",
    marks:34
    },
    {
    id:105,
    name:"john",
    course:"ui/ux",
    marks:99
    },
    {
    id:prompt("enter id"),
    name:prompt("enter name"),
    course:prompt("enter course"),
    marks:Number(prompt("marks"))
    }
]

let output=""
for(let i=0;i<students.length;i++){

    let grade
    let result

    if(students[i].marks>90){
        grade="A+"
        result="pass"
    }
    else if(students[i].marks>80){
        grade="A"
        result="pass"
    }
    else if(students[i].marks>70){
        grade="B"
        result="pass"
    }
    else if(students[i].marks>60){
        grade="C"
        result="pass"
    }
    else {
        grade="0"
        result="fail"
    }
    output+=`
    <tr>
    <td>${students[i].id}</td>
    <td>${students[i].name}</td>
    <td>${students[i].course}</td>
    <td>${students[i].marks}</td>
    <td>${grade}</td>
    <td>${result}</td>
    </tr>
    `;
    
        

}

document.getElementById("students").innerHTML=output

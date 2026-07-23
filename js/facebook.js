for(let i=1;i<32;i++){
    document.getElementById("date").innerHTML+=`<option>${i}</option>`;
}
let arr=["january","feb","mar","aprial","may","june","july","aug","sep","oct","nov","dec"]
for(let j=0;j<arr.length;j++){
        document.getElementById("month").innerHTML+=`<option>${arr[j]}</option>`;

}
for(i=2026;i>1949;i--){
        document.getElementById("year").innerHTML+=`<option>${i}</option>`;

}

const products=[

{ 
id:1,
name:"iPhone 16",
price:90000,
image:"C:\\Users\\K.H.S.M.REDDY\\Downloads\\property-05.jpg"
},
{
id:2,
name:"iPhone 16",
price:90000,
image:"C:\Users\K.H.S.M.REDDY\OneDrive\Desktop\maycoders\js\iPhone 17 SOURCE Julian Chokkattu.webp",
},
{
id:3,
name:"iPhone 16",
price:90000,
image:"C:\Users\K.H.S.M.REDDY\OneDrive\Desktop\maycoders\js\iPhone 17 SOURCE Julian Chokkattu.webp",
},
{
id:4,
name:"iPhone 16",
price:90000,
image:"C:\Users\K.H.S.M.REDDY\OneDrive\Desktop\maycoders\js\iPhone 17 SOURCE Julian Chokkattu.webp",
},
{
id:5,
name:"iPhone 16",
price:90000,
image:"C:\Users\K.H.S.M.REDDY\OneDrive\Desktop\maycoders\js\iPhone 17 SOURCE Julian Chokkattu.webp",
},
{
id:6,
name:"iPhone 16",
price:90000,
image:"C:\Users\K.H.S.M.REDDY\OneDrive\Desktop\maycoders\js\iPhone 17 SOURCE Julian Chokkattu.webp",
},
{
id:7,
name:"iPhone 16",
price:90000,
image:"C:\Users\K.H.S.M.REDDY\OneDrive\Desktop\maycoders\js\iPhone 17 SOURCE Julian Chokkattu.webp",
},
{
id:8,
name:"iPhone 16",
price:90000,
image:"C:\Users\K.H.S.M.REDDY\OneDrive\Desktop\maycoders\js\iPhone 17 SOURCE Julian Chokkattu.webp",
},
{
id:9,
name:"iPhone 16",
price:90000,
image:"C:\Users\K.H.S.M.REDDY\OneDrive\Desktop\maycoders\js\iPhone 17 SOURCE Julian Chokkattu.webp",
},
{
id:10,
name:"iPhone 16",
price:90000,
image:"C:\Users\K.H.S.M.REDDY\OneDrive\Desktop\maycoders\js\iPhone 17 SOURCE Julian Chokkattu.webp",
},
{
id:11,
name:"iPhone 16",
price:90000,
image:"C:\Users\K.H.S.M.REDDY\OneDrive\Desktop\maycoders\js\iPhone 17 SOURCE Julian Chokkattu.webp",
},
{
id:12,
name:"iPhone 16",
price:90000,
image:"C:\Users\K.H.S.M.REDDY\OneDrive\Desktop\maycoders\js\iPhone 17 SOURCE Julian Chokkattu.webp",
},
{
id:13,
name:"iPhone 16",
price:90000,
image:"C:\Users\K.H.S.M.REDDY\OneDrive\Desktop\maycoders\js\iPhone 17 SOURCE Julian Chokkattu.webp",
},
{
id:14,
name:"iPhone 16",
price:90000,
image:"C:\Users\K.H.S.M.REDDY\OneDrive\Desktop\maycoders\js\iPhone 17 SOURCE Julian Chokkattu.webp",
},
{
id:15,
name:"iPhone 16",
price:90000,
image:"C:\\Users\\K.H.S.M.REDDY\\OneDrive\\Desktop\\maycoders\\js\\iPhone 17 SOURCE Julian Chokkattu.webp",
}
]
let output=""
for(let i=0;i<products.length;i++){
    output +=`
    <p> id:${products[i].id}</p>
    <p> name:${products[i].name}</p>
    <p> price:${products[i].price}</p>
    <img src=${products[i].image} width=220px;>
    <br>
    `;

}
document.getElementById("products").innerHTML=output

let vinam="dinesh"
console.log("name", vinam)
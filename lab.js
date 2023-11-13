
     fetch('https://fakestoreapi.com/products',{
      method:"get"
     })
    .then(res=>res.json())
.then(data=>{
console.log(data);
for(let i=0;i<data.length;i++){
let getdata=document.getElementById("getdata")
let cont=document.createElement('div')
cont.className="p"
cont.innerHTML=
    `
    <h4> ${data[i].title} </h4>
   <img src="${data[i].image}">
   <h4>${data[i].price}</h4>
    `
  getdata.appendChild(cont)
 }
     })
    .catch((err)=>console.log(`the err is ${err}`))
   








    
// // fetch('https://fakestoreapi.com/products')
// //             .then(res=>res.json())
// //             .then(json=>console.log(json))

// fetch('https://api.thecatapi.com/v1/images/search')
// .then(response => response.json())
// .then(data => console.log(data));

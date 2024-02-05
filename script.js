const Apiurl="https://api.quotable.io/random";


const Btn= document.getElementById("btn1");
const Author=document.querySelector(".author span");
const Quotes=document.querySelector(".quote");
const Tags=document.querySelector(".taggins")



Btn.addEventListener("click",async ()=>{
    Quotes.textContent="Loading....";
    Author.textContent="@...";
    Tags.innerHTML="....";
try{
 const data=await fetch(Apiurl);
 const response=await data.json();
//  console.log(response);
showdata(response);
}catch(error){
    console.log(error);
}

});

function showdata(info){
 const {content,author,tags}=info;
 Author.textContent=author;
 Quotes.textContent=content;
 const fulltags=tags.map((tagg)=>{
    return `<button class="eachtag">${tagg}</button>`
   
 })
 .join("");
 Tags.innerHTML=fulltags;
}
import { JsonData } from "./data.js"
const container  = document.querySelector(".card-container");
const previewContainer  = document.querySelector(".lang-preview");
const Data = JSON.parse(JsonData); 

function setPreview(name)
{
   const item = Data.find(e=> e.name == name)
   previewContainer.innerHTML =  `
   <div class="preview" >
      <img src="${item.icon}" alt="">
      <h3>${item.name}</h3>
   <p>${item.definition}</p>
      <div class="Date">${item.date}</div>
      <div class="buttons">
         <a href="${item.compiler}" class="try">try  now</a>
         <a href="${item.site}" class="cart">official Site</a>
      </div>
  </div>`
   console.log(item)

}

previewContainer.addEventListener("click", e=>
{
   if(e.target.classList.contains("lang-preview"))
   previewContainer.style.display = "none"
})

function CardClick(source)
{
      parent = source.target
      while(parent != undefined && !parent.classList.contains("card"))
         parent =parent.parentElement
      setPreview(parent.getAttribute("name"))
     previewContainer.style.display = "block";
   
}


function makeCard(name ,date, iconLink)
{
    return `<div class="card-container"> <div class="card" id="data" name="${name}">
    <div class="lang-div">
       <img id="lang-img"  width="120px" height="120px"  src="${iconLink}" alt="">
       <h3 id="langName"> ${name}</h3>
       <div class="Date">${date}</div>
    </div>
    </div>
    </div>`
}


 Data.forEach(e => {
   container.innerHTML += makeCard(e.name, e.date, e.icon);
 });

 const cards  = document.querySelectorAll(".card");

 cards.forEach(e=> {
   e.addEventListener("click", CardClick); })

previewContainer.style.display = "none"
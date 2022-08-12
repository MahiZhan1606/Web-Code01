var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");


var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="search";
button.setAttribute("placeholder","Search Books");
button.addEventListener("click",foo());
div.append(input,button);
document.body.append(div);


 async function foo(){
    const res = await fetch("https://www.anapioficeandfire.com/api/books")
     data = await res.json()
    console.log(data)


         for(var i=0;i<data.length;i++){
            var div= document.createElement("div");
            div.innerHTML=`<div class="card" style=width: 18rem;">
            <div class="card-body">
               <h5 class="card-text"> Book Name: ${data[i].name}</h5>
               <h5 class="card-text">isbn: ${data[i].isbn}</h5>
               <h5 class="card-text">Number of Pages: ${data[i].numberOfPages}</h5>
               <h5 class="card-text">Authors: ${data[i].authors}</h5>
               <h5 class="card-text">Publisher: ${data[i].publisher}</h5>
               <h5 class="card-text">Released: ${data[i].released.slice(0,10)}</h5>
               <h5 class="card-text">Characters: ${data[i].characters.slice(0,3)}</h5>
               
            </div>
            </div>`
            document.body.append(div);

        
        
             
         }
        }
        
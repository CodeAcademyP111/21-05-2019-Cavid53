var add = document.querySelector("#add");
var ul = document.querySelector("#ul");
var input = document.querySelector("#input");




add.addEventListener("click", function () {

  
  ul.innerText="";  
  
    for (var i = 1; i <= input.value; i++) {

  
        var li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerText = i;
        ul.appendChild(li);
       }
   
})


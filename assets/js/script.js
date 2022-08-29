// sidebar

// let showSidebar = document.querySelector(".show-sidebar");
// let hideSidebar = document.querySelector(".close-sidebar");
// let sidebar = document.querySelector(".sidebar");

// showSidebar.addEventListener("click", function () {
//   if (sidebar.classList.contains("d-none")) {
//     sidebar.classList.remove("d-none");
//   }
// });

// hideSidebar.addEventListener("click", function () {
//   if (!sidebar.classList.contains("d-none")) {
//     sidebar.classList.add("d-none");
//     return;
//   }
// });




let input = document.querySelector(".text-input");


input.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        for (let i = 1; i <= e.target.value; i++) {

            let li = document.createElement("li");

            li.className = "list-group-item";

            li.innerText= i;

            e.target.nextElementSibling.append(li);

            let icon = document.createElement("i");

            icon.classList.add("fa-solid");

            icon.classList.add("fa-circle-xmark");

            icon.style.float = "right";

            icon.style.color = "red";
            
            icon.style.cursor = "pointer"
          
            li.append(icon);

            icon.onclick = function(){
              li.remove();
            }
            
        }
        


        e.target.value = "";
    }
    


    
   
})



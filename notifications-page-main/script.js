const clear = document.getElementById("clear"); 
const notificationNumber = document.querySelector(".number")
const activeNottifications = document.querySelectorAll(".box");
const icons  = document.querySelectorAll(".icon");



clear.addEventListener("click", () => {
    notificationNumber.style.display = "none";

    
    activeNottifications.forEach((box)=> {
box.classList.add("box-white");
box.classList.remove("icon")
    }) 

    icons.forEach((icon) =>{
        icon.classList.remove("icon");
    })
})
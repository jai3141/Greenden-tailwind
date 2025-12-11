// Selecting menu-icon and Side-navbar

let menuicon = document.getElementById("menuicon")
let sidenav = document.getElementById("sidenav")
let closeicon = document.getElementById("closeicon")

menuicon.addEventListener("click", () => {
    sidenav.style.right = 0
})

closeicon.addEventListener("click", () => {
    sidenav.style.right = "-50%"
})

// product Search Functionality 

let product = document.getElementById("Product-container")
let Search = document.getElementById("Search")
let productlist = product.querySelectorAll("div")

Search.addEventListener("keyup", () => {
    let entervalue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {

        let productname = productlist[count].querySelector("h2").textContent


        if (productname.toUpperCase().indexOf(entervalue) < 0) {
            productlist[count].style.display = "none"


        }
        else {
            productlist[count].style.display = "block"


        }
    }
})



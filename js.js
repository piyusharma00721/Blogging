

// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

/////////////////////////
const menuButton = document.querySelector(".main-container nav .menu-button");
const closeButton = document.querySelector(".mobile-menu-items .close-button");
const mainContainer = document.querySelector(".main-container");

menuButton.addEventListener("click", () => {
  mainContainer.classList.add("active");
});

closeButton.addEventListener("click", () => {
  mainContainer.classList.remove("active");
});
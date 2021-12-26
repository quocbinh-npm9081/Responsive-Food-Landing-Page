//button back to top
const btnBackToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function() {

    if (window.scrollY > 200 || document.documentElement.scrollTop > 200) {

        btnBackToTop.style.display = "flex";
    } else {

        btnBackToTop.style.display = "none";
    }
})

//navigation menu

let menuItems = document.getElementsByClassName("menu-item");

Array.from(menuItems).forEach(item => {

    item.addEventListener("click", function() {

        Array.from(menuItems).forEach(item => {

            item.classList.remove("active");
        });
        item.classList.add("active");
    })
});

//category 
let btnCategory = document.getElementsByClassName("btn-category");
let foodItems = document.getElementsByClassName("food-item");

Array.from(btnCategory).forEach(btn => {
    btn.addEventListener("click", function() {

        let dataBtn = btn.dataset.item;

        Array.from(btnCategory).forEach(btn => {
            btn.classList.remove("active")
        });

        if (dataBtn == "all") {
            Array.from(foodItems).forEach(item => {

                item.classList.remove("hide")
            });
        } else {

            Array.from(foodItems).forEach(item => {

                if (item.dataset.item == dataBtn) item.classList.remove("hide")
                else item.classList.add("hide");
            });
        }
        btn.classList.add("active");
    })
})

// on  scroll animation
let scroll = window.requestAnimationFrame || function name(callback) {

    window.setTimeout(callback, 1000 / 60)

}

let elToShow = document.querySelectorAll('.play-on-scroll');

isElInViewPort = (el) => {

    let rect = el.getBoundingClientRect();

    // console.log(rect);

    return (

        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))

    )
    loop()
}

loop = () => {
    elToShow.forEach((item) => {

        //console.log(typeof(isElInViewPort(item)));

        if (isElInViewPort(item)) {

            item.classList.add("start")
        } else {

            item.classList.remove("start")

        }
    })
    scroll(loop);
}

loop();


//MOBLIE NAV

let bottomNavItems = document.querySelectorAll(".mb-nav-item");
let bottomMove = document.querySelector(".mb-move-item");
bottomNavItems.forEach((item, index) => {
    item.addEventListener("click", function(e) {
        let crrItem = document.querySelector(".mb-nav-item.active");
        crrItem.classList.remove("active");
        item.classList.add("active");
        bottomMove.style.left = index * 25 + "%";
    })
})
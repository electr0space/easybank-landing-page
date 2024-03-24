// Display / hide navbar on scroll 

let previousScrollPos = window.pageYOffset;

// Switch between blog posts in the blog section

const blogCards = document.querySelector(".blog__cards"); // carousel
const firstCard = blogCards.querySelectorAll(".blog__card")[0];
const arrows = document.querySelectorAll(".blog i");

// Get the actual margin value (might be different on different screens)
let marginRight = parseInt(getComputedStyle(firstCard).marginRight);

let cardWidth = firstCard.clientWidth;
let scrollDistance = cardWidth + marginRight;

// Navbar hide on scroll down, appear on scroll up

window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 0 && currentScrollPos < document.documentElement.scrollHeight - window.innerHeight && window.innerWidth > 880) {
        if (currentScrollPos > previousScrollPos) {
            document.querySelector(".navbar").style.top = "-80px";
        }
        else {
            document.querySelector(".navbar").style.top = "0px";
        }

        previousScrollPos = currentScrollPos;
    }
})

// Slider for blog posts 

arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
        blogCards.scrollLeft += arrow.id === "left" ? -scrollDistance : scrollDistance;
    })
})

const showArrows = () => {
    let scrollWidth = blogCards.scrollWidth - blogCards.offsetWidth;
    arrows[0].style.display = blogCards.scrollLeft === 0 ? "none" : "block";
    arrows[1].style.display = blogCards.scrollLeft === scrollWidth ? "none" : "block";
}
  
blogCards.addEventListener("scroll", showArrows);
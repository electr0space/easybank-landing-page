// Display / hide navbar on scroll 

let previousScrollPos = window.pageYOffset;

// Switch between blog posts in the blog section

const blogCards = document.querySelector(".blog__cards"); // carousel
const firstCard = blogCards.querySelectorAll(".blog__card")[0];
const arrows = document.querySelectorAll(".blog i");

// let firstCardWidth = firstCard.clientWidth + 18; // here in px, in css - rem

// Get the actual margin value (might be different on different screens)
let marginRight = parseInt(getComputedStyle(firstCard).marginRight);

// Calculate total spacing (gap + margin-right)
let totalSpacing = parseInt(getComputedStyle(blogCards).gap) + marginRight;

let cardWidth = firstCard.clientWidth;
let scrollDistance = cardWidth + totalSpacing;

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

const showArrows = () => {
    arrows[0].style.display = blogCards.scrollLeft === 0 ? "none" : "block";
    let scrollWidth = blogCards.scrollWidth - blogCards.offsetWidth;
    arrows[1].style.display = blogCards.scrollLeft === scrollWidth ? "none" : "block";
  }
  
blogCards.addEventListener("scroll", showArrows);

arrows.forEach((arrow) => {
arrow.addEventListener("click", () => {
    // let firstCardWidth = firstCard.offsetWidth;
    blogCards.scrollLeft += arrow.id === "left" ? -scrollDistance : scrollDistance;
})
})

// Scroll: seems like there is a thin line that is moving on button click. I might need to rewrite everything: set the starting point from the start at width of the first image



// What if box-shadow replace with padding-bottom for navbar to take reemaining height of the page and place there background linear-gradient?
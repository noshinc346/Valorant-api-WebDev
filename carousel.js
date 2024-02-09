// Selecting all needed elements
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

// I want 5 cards sliding each time

// visible width of Carousel
const carouselWidth = carousel.offsetWidth; 

// Margin Right of cards - string to number
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);  

// Number of cards 
const cardCount = carousel.querySelectorAll("[data-target='card']").length;

// Offset property to set boundaries of carousel  
let offset = 0; 
const maxX = -((cardCount / 5) * carouselWidth +
            (cardMarginRight * (cardCount/5)) - 
            carouselWidth - cardMarginRight);

// Click Events 
leftButton.addEventListener("click", function(){
    if(offset !== 0) {
        offset += carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    }
})

rightButton.addEventListener("click", function() {
    if(offset > maxX) {
        offset -= carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    }
})
const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0
const totalSlides = slides.length

document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide)
document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide)

function moveToNextSlide() {
	console.log("Next slide!")
}

function moveToPrevSlide() {
	console.log("Previous slide!")
}

function name(arg, ...) {
	statements
}
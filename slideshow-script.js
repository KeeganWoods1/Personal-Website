var slideIndex = 1;
var class_name = '';

showSlides(slideIndex, 'myGameSlides');
showSlides(slideIndex, 'myWebSlides');
showSlides(slideIndex, 'myMiscSlides');

// Next/previous controls
function plusSlides(n, class_name) {
    showSlides(slideIndex += n, class_name);
}

// Thumbnail image controls
function currentSlide(n, class_name) {
    showSlides(slideIndex = n, class_name);
}

function showSlides(n, class_name) {
    var i;
    var slides = document.getElementsByClassName(class_name);
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
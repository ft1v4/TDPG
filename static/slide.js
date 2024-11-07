let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 450;
    document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
    showSlides(slideIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlides(slideIndex - 1);
});

showSlides(slideIndex);



const sliderContent = document.getElementById('box');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const images = ['images/aa.jpg', 'images/books.jpg', 'images/a.jpg', 'images/blur.jpg', 'images/b.jpg', 'images/semiOpen.jpg', 'images/c.jpg', 'images/d.jpg'];

let i = 0;


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function nextSlide() {

    if (i < images.length) {
        i++;
    } else {
        i = 1;
    }
    sliderContent.innerHTML = "<img src=" + images[i - 1] + ">";


}


function prevSlide() {
    if (i < images.length + 1 && i > 1) {
        i--;
    } else {
        i = images.length;
    }
    sliderContent.innerHTML = "<img src=images/" + images[i - 1] + ">";
}



function changeImg() {

    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    let timeOut = setTimeout('changeImg()', 4000)
}

// changeImg.onclick = function() {
//     clearTimeout(timeOut);
// }


window.onload = changeImg;

//Side-menu burger Jscript
const burger = document.querySelector('.burger')
const nav = document.querySelector('.right');
const navSlide = () => {
    burger.addEventListener('click', () => {
        nav.classList.add('nav-active')
    });
}
navSlide();
console.log('App up and running..-');

const DOMstrings = {
    sliderFotos: document.querySelectorAll('.hidden img'),
    arrowLeft: document.querySelector('.arrow-left'),
    arrowRight: document.querySelector('.arrow-right'),
    landingPageHome: document.querySelector('.landing-page-home'),
    nav: document.querySelector('header .main-menu nav')
};
console.log(DOMstrings.sliderFotos);
var fotoArray = [];
DOMstrings.sliderFotos.forEach(foto => {
    fotoArray.push(`url(./${foto.attributes[0].nodeValue})`)
})
window.addEventListener('load', function () {

    DOMstrings.landingPageHome.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),${fotoArray}`;
})
console.log(fotoArray);
var fotoArraySorted = fotoArray;
DOMstrings.arrowLeft.addEventListener('click', function () {
    let spliced = fotoArraySorted.splice(0, 1);
    fotoArraySorted = fotoArraySorted.concat(spliced);
    DOMstrings.landingPageHome.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),${fotoArraySorted}`;
    console.log(fotoArraySorted);
})


DOMstrings.arrowRight.addEventListener('click', function () {

    let fotoArrayRight = fotoArraySorted.splice(fotoArraySorted.length - 1, 1);
    fotoArrayRight = fotoArrayRight.concat(fotoArraySorted);
    fotoArraySorted = fotoArrayRight;
    DOMstrings.landingPageHome.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),${fotoArraySorted}`;

    console.log(fotoArraySorted);
})

$('.fa-bars').click(function () {
    $('header .main-menu nav').slideToggle()
})
window.addEventListener('resize', function () {
    if (window.innerWidth > 600) {
        DOMstrings.nav.style.display = 'block';
        console.log('didesnis')

    }  else if (window.innerWidth <= 600) {
        DOMstrings.nav.style.display = 'none';
        console.log('mazasnis');
    }
});
console.log('App up and running..-');

const DOMstrings = {
    sliderFotos: document.querySelectorAll('.hidden img'),
    arrowLeft: document.querySelector('.arrow-left'),
    arrowRight: document.querySelector('.arrow-right'),
    landingPageHome: document.querySelector('.landing-page-home')
};
console.log(DOMstrings.sliderFotos);
fotoArray = [];
DOMstrings.sliderFotos.forEach(foto => {
    fotoArray.push(`url(./${foto.attributes[0].nodeValue})`);
});
window.addEventListener('load', function () {

    DOMstrings.landingPageHome.style.backgroundImage = fotoArray;
})
console.log(fotoArray);
var fotoArraySorted = fotoArray;
DOMstrings.arrowLeft.addEventListener('click', function () {
    let spliced = fotoArraySorted.splice(0, 1);
    fotoArraySorted = fotoArraySorted.concat(spliced);
    DOMstrings.landingPageHome.style.backgroundImage = fotoArraySorted;
    console.log(fotoArraySorted);
})

    
DOMstrings.arrowRight.addEventListener('click', function () {
    
   let fotoArrayRight = fotoArraySorted.splice(fotoArraySorted.length-1, 1);
    fotoArrayRight = fotoArrayRight.concat(fotoArraySorted);
    fotoArraySorted = fotoArrayRight;
    DOMstrings.landingPageHome.style.backgroundImage = fotoArraySorted;
   
console.log(fotoArraySorted);
        })

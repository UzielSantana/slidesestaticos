let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;


document.querySelector('.slider--width').style.width =
 `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height =
    `${document.querySelector('.slider').clientHeight}px`;



console.log(currentSlide)


function voltar() {
        currentSlide--;
        if(currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        updateMargin();
        console.log(currentSlide)

    }


function avancar() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }
    updateMargin();
    console.log(currentSlide)


}



function updateMargin(){
    let newMargin = (currentSlide * document.body.clientWidth);
    document.querySelector('.slider--width').style.marginLeft =
         `-${newMargin}px`;


}
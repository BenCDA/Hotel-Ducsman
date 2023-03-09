const slider = document.querySelector('#slider');
const first = document.querySelector('#firstSlider');
const second = document.querySelector('#secondSlider');
let currentPosition = 0;

first.addEventListener('click', () => {
    if (currentPosition < -100) {
        currentPosition -= 100;
        slider.style.transform = 'translateX(${currentPosition}%)';
    }
});

second.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += 100;
        slider.style.transform = 'translateX(${currentPosition}%)';
    }
});


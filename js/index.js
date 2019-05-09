
const logoHTML = document.querySelector('.logo').innerHTML;

window.addEventListener('load', shiftLogo);
window.addEventListener('resize', shiftLogo);


function shiftLogo () {
    if (window.innerWidth >950 ) {
        document.querySelector('.logoShift').innerHTML = logoHTML;
        document.querySelector('.logo').innerHTML = '';
    } else {
        document.querySelector('.logo').innerHTML = logoHTML;
        document.querySelector('.logoShift').innerHTML = '';
    }
}
let count = 0;

document.querySelector('.slogan').onmouseover = function () {
    count++;
    if (count==1) setTimeout( () => document.querySelector('.game-container').hidden = false, 5000);
};

const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', startButtonPressed);

function startButtonPressed(e) {
    e.preventDefault();
}

const endButton = document.querySelector('.endButton');
endButton.addEventListener('click', endButtonPressed);

function endButtonPressed(e) {
    e.preventDefault();
    document.querySelector('.game-container').hidden = true;
    count = 0;
    
}

const firstButton = document.querySelector('.firstButton');
firstButton.addEventListener('click', firstButtonPressed);

function firstButtonPressed(e) {
    e.preventDefault();
}

const secondButton = document.querySelector('.secondButton');
secondButton.addEventListener('click', secondButtonPressed);

function secondButtonPressed(e) {
    e.preventDefault();
}

const thirdButton = document.querySelector('.thirdButton');
thirdButton.addEventListener('click', thirdButtonPressed);

function thirdButtonPressed(e) {
    e.preventDefault();
}

const fourthButton = document.querySelector('.fourthButton');
fourthButton.addEventListener('click', fourthButtonPressed);

function fourthButtonPressed(e) {
    e.preventDefault();
}

const fifthButton = document.querySelector('.fifthButton');
fifthButton.addEventListener('click', fifthButtonPressed);

function fifthButtonPressed(e) {
    e.preventDefault();
}

const sixthButton = document.querySelector('.sixthButton');
sixthButton.addEventListener('click', sixthButtonPressed);

function sixthButtonPressed(e) {
    e.preventDefault();
}

const seventhButton = document.querySelector('.seventhButton');
seventhButton.addEventListener('click', seventhButtonPressed);

function seventhButtonPressed(e) {
    e.preventDefault();
}

const eighthButton = document.querySelector('.eighthButton');
eighthButton.addEventListener('click', eighthButtonPressed);

function eighthButtonPressed(e) {
    e.preventDefault();
}

const zeroButton = document.querySelector('.zeroButton');
zeroButton.addEventListener('click', zeroButtonPressed);

function zeroButtonPressed(e) {
    e.preventDefault();
}

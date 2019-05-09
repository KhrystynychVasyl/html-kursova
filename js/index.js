
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

//document.querySelector('.logoShift').onmouseover = function () {alert('hello')};
document.querySelector('.slogan').onmouseover = function () {document.querySelector('.game-container').hidden = false;};

function hideLogoShift () {
    setInterval( () => document.querySelector('.logoShift').hidden = !document.querySelector('.logoShift').hidden, 5000);
}
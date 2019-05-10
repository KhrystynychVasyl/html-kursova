const logoHTML = document.querySelector('.logo').innerHTML;

window.addEventListener('load', shiftLogo);
window.addEventListener('resize', shiftLogo);


function shiftLogo() {
    if (window.innerWidth > 950) {
        document.querySelector('.logoShift').innerHTML = logoHTML;
        document.querySelector('.logo').innerHTML = '';
    }
    else {
        document.querySelector('.logo').innerHTML = logoHTML;
        document.querySelector('.logoShift').innerHTML = '';
    }
}
let count = 0;

document.querySelector('.playgame').onmouseover = function() {
    count++;
    if (count == 1) setTimeout(() => document.querySelector('.game-container').hidden = false, 5000);
};

const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', startButtonPressed);

function startButtonPressed(e) {
    e.preventDefault();
    allClear();
}

const endButton = document.querySelector('.endButton');
endButton.addEventListener('click', endButtonPressed);

function endButtonPressed(e) {
    e.preventDefault();
    document.querySelector('.game-container').hidden = true;
    count = 0;
    allClear();

}

const zeroButton = document.querySelector('.zeroButton');
zeroButton.addEventListener('click', zeroButtonPressed);

function zeroButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(0)) ticTacToe(0);
}

const firstButton = document.querySelector('.firstButton');
firstButton.addEventListener('click', firstButtonPressed);

function firstButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(1)) ticTacToe(1);
}

const secondButton = document.querySelector('.secondButton');
secondButton.addEventListener('click', secondButtonPressed);

function secondButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(2)) ticTacToe(2);
}

const thirdButton = document.querySelector('.thirdButton');
thirdButton.addEventListener('click', thirdButtonPressed);

function thirdButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(3)) ticTacToe(3);
}

const fourthButton = document.querySelector('.fourthButton');
fourthButton.addEventListener('click', fourthButtonPressed);

function fourthButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(4)) ticTacToe(4);
}

const fifthButton = document.querySelector('.fifthButton');
fifthButton.addEventListener('click', fifthButtonPressed);

function fifthButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(5)) ticTacToe(5);
}

const sixthButton = document.querySelector('.sixthButton');
sixthButton.addEventListener('click', sixthButtonPressed);

function sixthButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(6)) ticTacToe(6);
}

const seventhButton = document.querySelector('.seventhButton');
seventhButton.addEventListener('click', seventhButtonPressed);

function seventhButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(7)) ticTacToe(7);
}

const dotButton = document.querySelector('.dotButton');
dotButton.addEventListener('click', dotButtonPressed);

function dotButtonPressed(e) {
    e.preventDefault();
}

let pushButtonArr = [];
let countButtonClick = 0;
let countGame = 0;
let firstMove;
let buttonArr;

function allClear() {
    countGame = 0;
    zeroButton.innerHTML = '`';
    firstButton.innerHTML = '`';
    secondButton.innerHTML = '`';
    thirdButton.innerHTML = '`';
    fourthButton.innerHTML = '`';
    fifthButton.innerHTML = '`';
    sixthButton.innerHTML = '`';
    seventhButton.innerHTML = '`';
    dotButton.innerHTML = 'X';
    pushButtonArr = [];
}

function ticTacToe(num) {

    pushButtonArr.push(num);

    countButtonClick = 1;
    setTimeout(() => countButtonClick = 0, 1000);


    if (countGame == 0) { firstMove = num }

    function buttonArrPosition(val) {
        for (let i = 0; i < buttonArr.length; i++) {
            if (buttonArr[i] == val) return i;
        }
    }
    let gameOver = false;


    if (countGame == 0) {
        buttonArr = [0, 1, 2, 3, 4, 5, 6, 7];

    }
    const setButton = {
        0: zeroButton,
        1: firstButton,
        2: secondButton,
        3: thirdButton,
        4: fourthButton,
        5: fifthButton,
        6: sixthButton,
        7: seventhButton
    };

    if (firstMove % 2 == 0) {

        if (!gameOver) switch (countGame) {
            case (0):
                let shiftButton = num;
                while (shiftButton > 0) {
                    buttonArr.push(buttonArr.shift());
                    shiftButton--;
                };
                countGame++;
                setButton[buttonArr[buttonArrPosition(num)]].innerHTML = 'O';
                setButton[buttonArr[7]].innerHTML = 'X';
                pushButtonArr.push(buttonArr[7]);
                break;
            case (1):
                countGame++;
                setButton[buttonArr[buttonArrPosition(num)]].innerHTML = 'O';
                if (setButton[buttonArr[3]].innerHTML !== 'O') {
                    setButton[buttonArr[3]].innerHTML = 'X';
                    pushButtonArr.push(buttonArr[3]);
                    gameOver = true;
                }
                else {
                    setButton[buttonArr[1]].innerHTML = 'X';
                    pushButtonArr.push(buttonArr[1]);
                }
                break;
            case (2):
                countGame++;
                setButton[buttonArr[buttonArrPosition(num)]].innerHTML = 'O';
                if (setButton[buttonArr[5]].innerHTML !== 'O') {
                    setButton[buttonArr[5]].innerHTML = 'X';
                    pushButtonArr.push(buttonArr[5]);
                    gameOver = true;
                }
                else {
                    setButton[buttonArr[4]].innerHTML = 'X';
                    pushButtonArr.push(buttonArr[4]);
                }
                break;
            case (3):
                countGame++;
                setButton[buttonArr[buttonArrPosition(num)]].innerHTML = 'O';
                if (setButton[buttonArr[6]].innerHTML !== 'O') {
                    setButton[buttonArr[6]].innerHTML = 'X';
                    pushButtonArr.push(buttonArr[6]);
                }
                else {
                    setButton[buttonArr[2]].innerHTML = 'X';
                    pushButtonArr.push(buttonArr[2]);
                }
                break;
        }
        if (gameOver) dotButton.innerHTML = 'You Have Lost';
        if (countGame == 4) dotButton.innerHTML = 'A Draw';

    }
    else {
        if (!gameOver) switch (countGame) {
            case (0):
                let shiftButton = num;
                while (shiftButton > 1) {
                    buttonArr.push(buttonArr.shift());
                    shiftButton--;
                };
                countGame++;
                setButton[buttonArr[buttonArrPosition(num)]].innerHTML = 'O';
                setButton[buttonArr[7]].innerHTML = 'X';
                pushButtonArr.push(buttonArr[7]);
                break;
            case (1):
                countGame++;
                setButton[buttonArr[buttonArrPosition(num)]].innerHTML = 'O';
                if (setButton[buttonArr[3]].innerHTML !== 'O') {
                    setButton[buttonArr[3]].innerHTML = 'X';
                    pushButtonArr.push(buttonArr[3]);
                    gameOver = true;
                }
                else {
                    setButton[buttonArr[6]].innerHTML = 'X';
                    pushButtonArr.push(buttonArr[6]);
                }

                break;
            case (2):
                countGame++;
                setButton[buttonArr[buttonArrPosition(num)]].innerHTML = 'O';
                if (setButton[buttonArr[2]].innerHTML !== 'O') {
                    setButton[buttonArr[2]].innerHTML = 'X';
                    pushButtonArr.push(buttonArr[2]);
                    gameOver = true;
                }
                else {
                    setButton[buttonArr[0]].innerHTML = 'X';
                    pushButtonArr.push(buttonArr[0]);
                }
                break;
        }
        if (gameOver) dotButton.innerHTML = 'You Have Lost';
        if (countGame == 3) dotButton.innerHTML = 'You Have Lost';
    }
}

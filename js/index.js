const clockContainer = document.querySelector('.clock');
setInterval(() => clockContainer.innerText = (new Date()).toLocaleTimeString(), 1000);

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
    if (count == 1) setTimeout(() => document.querySelector('.game-container').hidden = false, 50);
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
let gameOver = false;
let gameDraw = false;

function allClear() {
    gameOver = false;
    gameDraw = false;
    countGame = 0;
    countButtonClick = 0;
    const setButtonArr = [
        zeroButton,
        firstButton,
        secondButton,
        thirdButton,
        fourthButton,
        fifthButton,
        sixthButton,
        seventhButton
    ];
    setButtonArr.forEach(val => {
        val.innerHTML = '`';
        val.classList.remove('btn-warning');
        val.classList.remove('btn-info');
        val.classList.remove('btn-light');
        val.classList.add('btn-light')
    });
    dotButton.innerHTML = 'X';
    pushButtonArr = [];
}

function ticTacToe(num) {

    pushButtonArr.push(num);
    countButtonClick = 1;

    if (countGame == 0) { firstMove = num }

    function buttonArrPosition(val) {
        for (let i = 0; i < buttonArr.length; i++) {
            if (buttonArr[i] == val) return i;
        }
    }

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

    function buttonChangeClassPlayer(number) {
        setButton[buttonArr[buttonArrPosition(number)]].classList.remove('btn-light');
        setButton[buttonArr[buttonArrPosition(number)]].classList.add('btn-warning');
    }

    function buttonChangeClassComp(number) {
        setButton[buttonArr[buttonArrPosition(number)]].classList.remove('btn-light');
        setButton[buttonArr[buttonArrPosition(number)]].classList.add('btn-info');
    }

    if (firstMove % 2 == 0) {
        if (countGame == 0) {
            let shiftButton = num;
            while (shiftButton > 0) {
                buttonArr.push(buttonArr.shift());
                shiftButton--;
            }
        };
        if (!gameOver) {
            setButton[buttonArr[buttonArrPosition(num)]].innerHTML = 'O';
            buttonChangeClassPlayer(num);
            setTimeout(() => countButtonClick = 0, 1500)
        };
        setTimeout(() => {

            if (!gameOver) switch (countGame) {
                case (0):
                    countGame++;
                    setButton[buttonArr[7]].innerHTML = 'X';
                    buttonChangeClassComp(buttonArr[7]);
                    pushButtonArr.push(buttonArr[7]);
                    break;
                case (1):
                    countGame++;
                    if (setButton[buttonArr[3]].innerHTML !== 'O') {
                        setButton[buttonArr[3]].innerHTML = 'X';
                        buttonChangeClassComp(buttonArr[3]);
                        pushButtonArr.push(buttonArr[3]);
                        gameOver = true;
                    }
                    else {
                        setButton[buttonArr[1]].innerHTML = 'X';
                        buttonChangeClassComp(buttonArr[1]);
                        pushButtonArr.push(buttonArr[1]);
                    }
                    break;
                case (2):
                    countGame++;
                    if (setButton[buttonArr[5]].innerHTML !== 'O') {
                        setButton[buttonArr[5]].innerHTML = 'X';
                        buttonChangeClassComp(buttonArr[5]);
                        pushButtonArr.push(buttonArr[5]);
                        gameOver = true;
                    }
                    else {
                        setButton[buttonArr[6]].innerHTML = 'X';
                        buttonChangeClassComp(buttonArr[6]);
                        pushButtonArr.push(buttonArr[6]);
                    }
                    break;
                case (3):
                    countGame++;
                    if (setButton[buttonArr[2]].innerHTML !== 'O') {
                        setButton[buttonArr[2]].innerHTML = 'X';
                        buttonChangeClassComp(buttonArr[2]);
                        pushButtonArr.push(buttonArr[2]);
                        gameOver = true;
                    }
                    else {
                        setButton[buttonArr[4]].innerHTML = 'X';
                        buttonChangeClassComp(buttonArr[4]);
                        pushButtonArr.push(buttonArr[4]);
                        gameDraw = true;
                    }
                    break;
            }
            if (gameOver) dotButton.innerHTML = 'Lost';
            if (gameDraw) { gameOver = true;
                dotButton.innerHTML = 'Draw' };
        }, 1000);

    }
    else {
        if (countGame == 0) {
            let shiftButton = num;
            while (shiftButton > 1) {
                buttonArr.push(buttonArr.shift());
                shiftButton--;
            }
        };

        if (!gameOver) {
            setButton[buttonArr[buttonArrPosition(num)]].innerHTML = 'O';
            buttonChangeClassPlayer(num);
            setTimeout(() => countButtonClick = 0, 1500)
        };
        setTimeout(() => {

            if (!gameOver) switch (countGame) {
                case (0):
                    countGame++;
                    setButton[buttonArr[7]].innerHTML = 'X';
                    buttonChangeClassComp(buttonArr[7]);
                    pushButtonArr.push(buttonArr[7]);
                    break;
                case (1):
                    countGame++;
                    if (setButton[buttonArr[3]].innerHTML !== 'O') {
                        setButton[buttonArr[3]].innerHTML = 'X';
                        buttonChangeClassComp(buttonArr[3]);
                        pushButtonArr.push(buttonArr[3]);
                        gameOver = true;
                    }
                    else {
                        setButton[buttonArr[6]].innerHTML = 'X';
                        buttonChangeClassComp(buttonArr[6]);
                        pushButtonArr.push(buttonArr[6]);
                    }

                    break;
                case (2):
                    countGame++;
                    if (setButton[buttonArr[2]].innerHTML !== 'O') {
                        setButton[buttonArr[2]].innerHTML = 'X';
                        buttonChangeClassComp(buttonArr[2]);
                        pushButtonArr.push(buttonArr[2]);
                        gameOver = true;
                    }
                    else {
                        setButton[buttonArr[0]].innerHTML = 'X';
                        buttonChangeClassComp(buttonArr[0]);
                        pushButtonArr.push(buttonArr[0]);
                        gameOver = true;
                    }
                    break;
            }
            if (gameOver) dotButton.innerHTML = 'Lost';
        }, 1000);
    }

}

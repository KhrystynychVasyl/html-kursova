/*

  {
    "id": 1282027,
    "name": "Male",
    "country": "MV",
    "coord": {
      "lon": 73.508881,
      "lat": 4.1748
    }
  }
*/

const forecastAPI = 'https://api.openweathermap.org/data/2.5/weather?id=1282027';
const keyAPI = '&APPID=0746e9cef51e45cd40c66c3f06fcecb1';
fetch(forecastAPI + keyAPI)
    .then(response => response.json())
    .then(weatherdata => {
        const celsiusTemperature = (weatherdata.main.temp - 273.15).toFixed(2);
        document.getElementById('temp').innerHTML = `<p> ${(weatherdata.main.temp - 273.15).toFixed(2)} <sup>o</sup>C</p>`;
        document.getElementById('humidity').innerHTML = `<p> ${weatherdata.main.humidity} %</p>`;
        document.getElementById('pressure').innerHTML = `<p> ${weatherdata.main.pressure} мм рт.ст.</p>`;
        document.getElementById('clouds').innerHTML = `<p> ${weatherdata.clouds.all} % <img src="" id="wicon" src="" alt="Weather icon"></p>`;
        document.getElementById('wicon').src = "http://openweathermap.org/img/w/" + weatherdata.weather[0].icon + ".png";
        document.getElementById('wind').innerHTML = `<p> ${weatherdata.wind.speed} м/с</p>`;
    });

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

document.getElementById('gameStartButton').addEventListener('click', () => document.querySelector('.game-container').hidden = false);

document.querySelector('.playgame').onmouseover = function() {
    count++;
    if (count == 1) setTimeout(() => document.querySelector('.game-container').hidden = false, 500);
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

const eighthButton = document.querySelector('.eighthButton');
eighthButton.addEventListener('click', eighthButtonPressed);

function eighthButtonPressed(e) {
    e.preventDefault();

    if (countButtonClick == 0 && !pushButtonArr.includes(8)) ticTacToe(8);
}

let pushButtonArr = [8];
let countButtonClick = 0;
let countGame = 0;
let firstMove;
let buttonArr;
let gameOver = false;
let gameDraw = false;
let gameMode = 0;
let numberMove;
let vinPosZero = [[2,3,4],[4,5,6],[1,8,5],[2,8,6],[3,8,7]];

function getGameMode() {
    Math.random() * 2 > 1 ? gameMode = 1 : gameMode = 0;
}

function getArrayTemp(stepArray, vinPos) {

    function getArray(stepArray) {
        let check = 0;
        let arrVinTemp = [...stepArray];
        let index = 0;
        let move = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        stepArray.forEach(val => move = move.filter(el => el !== val));
        while (move.length > 0) {
            check = 0;
            while (check == 0) {
                index = Math.floor(Math.random() * (move.length));
                index == move.length ? check = 0 : check = 1;
            }
            arrVinTemp.push(move[index]);
            move.splice(index, 1);
        }
        return arrVinTemp;
    }
    let arrayNominate = getArray(stepArray);
    //console.log(arrayNominate);

    function getPlayerMoveArray(arrMove) {
        let playerMoveArray = [...arrMove];
        const computerMove = [7, 5, 3, 1];
        computerMove.forEach(move => playerMoveArray.splice(move, 1));
        return playerMoveArray;
    }

    let arrayNominatePlayerMove = getPlayerMoveArray(arrayNominate);
    //console.log(arrayNominatePlayerMove);

    function getArrayCheck(vinPos, testArray) {
        let testArrayTrue = true;
        for (let i = 0; i < vinPos.length; i++) {
            let testArrayTemp = testArray;
            vinPos[i].forEach(val => testArrayTemp = testArrayTemp.filter(el => el !== val));
            (testArray.length - testArrayTemp.length) == 3 ? testArrayTrue = false : '';
        }
        return testArrayTrue;
    }
    let playerMoveNotLose = getArrayCheck(vinPos, arrayNominatePlayerMove);
    //console.log(playerMoveNotLose);
    return [playerMoveNotLose, arrayNominate, arrayNominatePlayerMove];

}

function getNotluseArray(stepArray, vinPos) {

    let arrayNominate;

    do { arrayNominate = getArrayTemp(stepArray, vinPos) } while (!arrayNominate[0]);
    //console.log(arrayNominate);
    return arrayNominate[1];
}


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
        seventhButton,
        eighthButton
    ];
    setButtonArr.forEach(val => {
        val.innerHTML = '`';
        val.classList.remove('btn-warning');
        val.classList.remove('btn-info');
        val.classList.remove('btn-light');
        val.classList.add('btn-light')
    });

    pushButtonArr = [];

    getGameMode();

    if (gameMode == 0) {
        pushButtonArr = [8];
    }
    else {
        pushButtonArr = [];

    }

    if (gameMode == 0) {
        eighthButton.innerHTML = 'X';
        eighthButton.classList.remove('btn-light');
        eighthButton.classList.add('btn-info');
    }
    else {
        eighthButton.innerHTML = '`';
    }
}

function ticTacToe(num) {

    const setButton = {
        0: zeroButton,
        1: firstButton,
        2: secondButton,
        3: thirdButton,
        4: fourthButton,
        5: fifthButton,
        6: sixthButton,
        7: seventhButton,
        8: eighthButton
    };

    function buttonChangeClassPlayer(number) {
        setButton[buttonArr[buttonArrPosition(number)]].classList.remove('btn-light');
        setButton[buttonArr[buttonArrPosition(number)]].classList.add('btn-warning');
    }

    function buttonChangeClassComp(number) {
        setButton[buttonArr[buttonArrPosition(number)]].classList.remove('btn-light');
        setButton[buttonArr[buttonArrPosition(number)]].classList.add('btn-info');
    }

    function buttonArrPosition(val) {
        for (let i = 0; i < buttonArr.length; i++) {
            if (buttonArr[i] == val) return i;
        }
    }

    if (gameMode == 0) {

        pushButtonArr.push(num);
        countButtonClick = 1;

        if (countGame == 0) { firstMove = num }

        if (countGame == 0) {
            buttonArr = [0, 1, 2, 3, 4, 5, 6, 7];
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
                setTimeout(() => countButtonClick = 0, 100) //1500ms-------------------------------------------
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
                if (gameOver) eighthButton.innerHTML = 'Lost';
                if (gameDraw) {
                    gameOver = true;
                    eighthButton.innerHTML = 'Draw'
                };
            }, 80); //1000ms-------------------------------------------------------------------------------------

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
                setTimeout(() => countButtonClick = 0, 100) //1500ms-----------------------------------------------
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
                if (gameOver) eighthButton.innerHTML = 'Lost';
            }, 80); //1000ms----------------------------------------------------------------------------------------------
        }
    }
    else {

        if (gameMode == 1) {

            pushButtonArr.push(num);
            countButtonClick = 1;

            if (countGame == 0) { firstMove = num }

            if (countGame == 0) {
                buttonArr = [0, 1, 2, 3, 4, 5, 6, 7];
            }

            if (firstMove == 8) {

                if (countGame == 0) { buttonArr.push(num) }

                if (!gameOver) {
                    setButton[buttonArr[buttonArrPosition(num)]].innerHTML = 'O';
                    buttonChangeClassPlayer(num);
                    setTimeout(() => countButtonClick = 0, 100) //1500ms-------------------------------------------
                };

                setTimeout(() => {

                    if (!gameOver) switch (countGame) {
                        case (0):
                            countGame++;
                            setButton[buttonArr[0]].innerHTML = 'X';
                            buttonChangeClassComp(buttonArr[0]);
                            pushButtonArr.push(buttonArr[0]);
                            break;
                        case (1):
                            countGame++;
                            numberMove = getNotluseArray(pushButtonArr,vinPosZero)[3];
                            setButton[buttonArr[numberMove]].innerHTML = 'X'
                            buttonChangeClassComp(buttonArr[numberMove]);
                            pushButtonArr.push(buttonArr[numberMove]);
                            break;
                        case (2):
                            countGame++;
                            numberMove = getNotluseArray(pushButtonArr,vinPosZero)[5];
                            setButton[buttonArr[numberMove]].innerHTML = 'X'
                            buttonChangeClassComp(buttonArr[numberMove]);
                            pushButtonArr.push(buttonArr[numberMove]);
                            break;
                        case (3):
                            countGame++;
                            numberMove = getNotluseArray(pushButtonArr,vinPosZero)[7];
                            setButton[buttonArr[numberMove]].innerHTML = 'X'
                            buttonChangeClassComp(buttonArr[numberMove]);
                            pushButtonArr.push(buttonArr[numberMove]);
                            gameDraw = true;
                            break;
                    }
                    if (gameOver) eighthButton.innerHTML = 'Lost';
                    if (gameDraw) {
                        gameOver = true;
                        eighthButton.innerHTML = 'Draw'
                    };
                }, 80)

            }
            else {
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
                        setTimeout(() => countButtonClick = 0, 100) //1500ms-------------------------------------------
                    };

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
                        setTimeout(() => countButtonClick = 0, 100) //1500ms-----------------------------------------------
                    };
                }
            }

        }

    }

}

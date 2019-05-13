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


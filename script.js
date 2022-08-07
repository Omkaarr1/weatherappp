let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let pressure = document.querySelector('.pressure');
let desc = document.querySelector('.desc');

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=40d245fa5c83f5a221b2d10fd75b9b65`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert('Wrong City name')); 

})

const displayData=(weather)=>{
    temp.innerText=`temp: ${weather.main.temp}°C`
    humidity.innerText=`humidity: ${weather.main.humidity}%`
    pressure.innerText=`pressure: ${weather.main.pressure}hPa`
    desc.innerText=`desc: ${weather.weather[0].main}`
}
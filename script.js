// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// 6559be52f873213d324c36186574f1c6

const weatherApi = {
    key: "6559be52f873213d324c36186574f1c6",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchBoxInput = document.getElementById('inputBox');

searchBoxInput.addEventListener('keypress', (event) =>{
    if(event.keyCode == 13){
        console.log(searchBoxInput.value);
        getWeatherReport(searchBoxInput.value);
    }
    
});

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city-name');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temprature = document.getElementById('temp');
    temprature.innerText = `${weather.main.temp}`;

    let min_max = document.getElementById('min-max');
    min_max.innerText = `${weather.main.temp_min} min / ${weather.main.temp_max} max`;

    let allDayWeather = document.getElementById('weather');
    allDayWeather.innerText = `${weather.weather[0].main}`

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = manageDate(todayDate);
}

function manageDate(dateArgs){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let months = ['January', 'Febuaray', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December'];

    let year = dateArgs.getFullYear();
    let month = months[dateArgs.getMonth()];
    let date = dateArgs.getDate();
    let day = days[dateArgs.getDay()];
    return `${date} ${month} (${day}), ${year}`;
}

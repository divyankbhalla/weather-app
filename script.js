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
}
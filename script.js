let button = document.querySelector(".button");
let inputValue = document.querySelector(".inputValue");
let country = document.querySelector(".country");
let temp = document.querySelector(".temp");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");

button.addEventListener("click", function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&units=metric&appid=0472079cde31593875aada1c9cca517f")
        .then((res) => res.json())
        .then((data) => {
            const countryVal = data['name'];
            const tempVal = data['main']['temp'];
            const windVal = data['wind']['speed'];
            const humidityVal = data['main']['humidity'];

            country.innerHTML = countryVal;
            temp.innerHTML = tempVal + "°C";
            wind.innerHTML = "Wind Speed : " + windVal + "Km/h";
            humidity.innerHTML = "Humidity : " + humidityVal + "%";
        })
    
})


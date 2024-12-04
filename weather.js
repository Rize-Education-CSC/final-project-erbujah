document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "64cd4aef0e4c7659e3c72a82ba4280f2"; // API Key
    const weatherSection = document.createElement("section");
    weatherSection.innerHTML = `
        <h2>Weather Update</h2>
        <div>
            <label for="cityInput"><strong>Enter City:</strong></label>
            <input type="text" id="cityInput" placeholder="Enter city name" />
            <button id="getWeather">Get Weather</button>
        </div>
        <div id="weatherInfo" style="margin-top: 20px;">Weather data will appear here...</div>
    `;
    document.querySelector("main").appendChild(weatherSection);

    const getWeatherButton = document.getElementById("getWeather");
    const weatherInfo = document.getElementById("weatherInfo");

    getWeatherButton.addEventListener("click", () => {
        const city = document.getElementById("cityInput").value.trim();

        if (!city) {
            weatherInfo.innerHTML = `<p style="color: red;">Please enter a city name.</p>`;
            return;
        }

        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

        fetch(apiURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("City not found");
                }
                return response.json();
            })
            .then((data) => {
                weatherInfo.innerHTML = `
                    <p><strong>City:</strong> ${data.name}</p>
                    <p><strong>Temperature:</strong> ${data.main.temp}°F</p>
                    <p><strong>Condition:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${data.wind.speed} mph</p>
                `;
            })
            .catch((error) => {
                weatherInfo.innerHTML = `<p style="color: red;">Error: ${error.message}. Please try again.</p>`;
            });
    });
});

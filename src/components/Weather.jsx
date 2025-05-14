import {useState, useEffect} from "react";

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const API_KEY = "673df61b7e195d05430955fdd2e07fe3";
    const CITY = "Toronto";

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => setWeather(data))
            .catch(error => console.error("Cannot fetch weather data:", error));
    }, []);

    return (
       <div className="mt-1 text-sm text-white">
            <h2 className="text-lg font-bold">Weather in {CITY}</h2>
            {weather ? (
                <div>
                    <p className="text-md"> Temperature: {weather.main.temp}°C</p>
                    <p className="text-md"> Condition: {weather.weather[0].description}</p>
                    <p className="text-md"> Wind: {weather.wind.speed} m/s</p>
                </div>
            ) : (
                <p>Loading weather...</p>
            )}
        </div>
    );
};

export default Weather;
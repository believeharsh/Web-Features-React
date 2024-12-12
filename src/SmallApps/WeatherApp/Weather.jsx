import { useState, useEffect } from "react";
import Search from "./Search";

const Weather = () => {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [weatherData, setWeatherData] = useState(null);

  // Fetch weather data
  const getWeatherData = async (param) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=431109ed26f86630f03ac7cf879fe2a3`
      );
      const data = await response.json();
      if (data.cod !== 200) throw new Error(data.message); // Handle invalid city
      setWeatherData(data);
      setLoading(false);
      setError(null);
    } catch (e) {
      console.error(e.message);
      setError(e.message);
      setLoading(false);
    }
  };

  // Fetch default weather for Delhi on first load
  useEffect(() => {
    getWeatherData("Delhi");
  }, []);

  const handleClick = () => {
    if (searchInput.trim()) {
      getWeatherData(searchInput);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Weather App</h1>
        <Search
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleClick={handleClick}
        />
        {loading && <p className="text-center mt-6 text-blue-500">Loading...</p>}
        {error && (
          <p className="text-center mt-6 text-red-500">
            Error: {error}
          </p>
        )}
        {weatherData && (
          <div className="mt-6 text-gray-700">
            <h2 className="text-xl font-semibold text-center mb-4">
              {weatherData.name}, {weatherData.sys?.country}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather?.[0]?.icon}@2x.png`}
                  alt="Weather Icon"
                  className="w-16 h-16"
                />
                <p className="capitalize text-sm">
                  {weatherData.weather?.[0]?.description}
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">
                  {Math.round(weatherData.main?.temp - 273.15)}°C
                </p>
                <p className="text-sm text-gray-500">
                  Feels like: {Math.round(weatherData.main?.feels_like - 273.15)}°C
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <p className="text-sm">
                <strong>Humidity:</strong> {weatherData.main?.humidity}%
              </p>
              <p className="text-sm">
                <strong>Wind Speed:</strong> {weatherData.wind?.speed} m/s
              </p>
              <p className="text-sm">
                <strong>Pressure:</strong> {weatherData.main?.pressure} hPa
              </p>
              <p className="text-sm">
                <strong>Visibility:</strong> {weatherData.visibility / 1000} km
              </p>
              <p className="text-sm">
                <strong>Sunrise:</strong> {new Date(weatherData.sys?.sunrise * 1000).toLocaleTimeString()}
              </p>
              <p className="text-sm">
                <strong>Sunset:</strong> {new Date(weatherData.sys?.sunset * 1000).toLocaleTimeString()}
              </p>
              <p className="text-sm">
                <strong>Cloudiness:</strong> {weatherData.clouds?.all}%
              </p>
              <p className="text-sm">
                <strong>Longitude:</strong> {weatherData.coord?.lon}
              </p>
              <p className="text-sm">
                <strong>Latitude:</strong> {weatherData.coord?.lat}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;

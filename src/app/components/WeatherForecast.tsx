import React from "react";

interface WeatherForecastProps {
    data: {
        list: {
            main: {
                temp: number;
                humidity: number;
            };
            weather: {
                icon: string;
                description: string;
            }[];
        }[];
    };
}

const WeatherForecast = ({ data }) => {

    const getWeatherIconUrl = (iconCode) => {
        return `https://openweathermap.org/img/wn/${iconCode}.png`;
    };

    const today = new Date();
    const fiveDayForecast = [];
    for (let i = 0; i < 5; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        fiveDayForecast.push(date);
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {fiveDayForecast.map((day, index) => (
                <div key={index} className="bg-white/40 p-4 text-center rounded-lg flex flex-col items-center">
                    <p className="text-lg font-semibold">
                        {day.toLocaleDateString("en-US", { weekday: "short" })}
                    </p>
                    <img src={getWeatherIconUrl(data.list[index].weather[0].icon)} alt="Weather Icon" className="w-12 h-12 mt-2" />
                    <p className="mt-2">
                        {data.list[index].weather[0].description}
                    </p>
                    <p className="mt-1">
                        Temperature: {data.list[index].main.temp.toFixed(1)} °C
                    </p>
                    <p>
                        Humidity: {data.list[index].main.humidity}%
                    </p>
                </div>
            ))}
        </div>
    );
};

export default WeatherForecast;

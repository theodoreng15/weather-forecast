import React from "react";

interface WeatherForecastProps {
    data: {
        list: {
            dt: number;
            main: {
                temp_min: number;
                temp_max: number;
                humidity: number;
            };
            weather: {
                icon: string;
                description: string;
            }[];
        }[];
    };
}

const WeatherForecast = ({ data }: WeatherForecastProps) => {
    const getWeatherIconUrl = (iconCode: string) => {
        return `https://openweathermap.org/img/wn/${iconCode}.png`;
    };

    const groupByDay = (list: WeatherForecastProps["data"]["list"]) => {
        return list.reduce((acc, curr) => {
            const date = new Date(curr.dt * 1000).toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" });
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(curr);
            return acc;
        }, {} as Record<string, WeatherForecastProps["data"]["list"]>);
    };

    const calculateDailyHighLow = (dailyData: WeatherForecastProps["data"]["list"]) => {
        let tempMin = dailyData[0].main.temp_min;
        let tempMax = dailyData[0].main.temp_max;
        let icon = dailyData[0].weather[0].icon;
        let description = dailyData[0].weather[0].description;

        dailyData.forEach(entry => {
            if (entry.main.temp_min < tempMin) {
                tempMin = entry.main.temp_min;
            }
            if (entry.main.temp_max > tempMax) {
                tempMax = entry.main.temp_max;
            }
        });

        return { tempMin, tempMax, icon, description };
    };

    const groupedData = groupByDay(data.list);
    const fiveDayForecast = Object.keys(groupedData).slice(0, 5).map(key => ({
        date: key,
        ...calculateDailyHighLow(groupedData[key])
    }));

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {fiveDayForecast.map((forecast, index) => (
                <div key={index} className="bg-white/40 p-4 text-center rounded-lg flex flex-col items-center">
                    <p className="text-lg font-semibold">{forecast.date}</p>
                    <img src={getWeatherIconUrl(forecast.icon)} alt="Weather Icon" className="w-12 h-12 mt-2" />
                    <p className="mt-2">{forecast.description}</p>
                    <p className="mt-1">High: {forecast.tempMax.toFixed(1)} °C</p>
                    <p>Low: {forecast.tempMin.toFixed(1)} °C</p>
                </div>
            ))}
        </div>
    );
};

export default WeatherForecast;

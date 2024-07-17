import React from "react";
import { getCurrentDate } from "../utils/currentDate"
import { MdLocationOn } from "react-icons/md"

interface CurrentProps {
    data: {
        current?: {
            condition: {
                icon: string;
                text: string;
            };
            temp_f: number;
        };
        location?: {
            name: string;
            region: string;
        };
    };
}


const Current = ({ data }) => {
    const currentDate = getCurrentDate();
    let weatherIcon = "https://openweathermap.org/img/wn/"
    weatherIcon += data.list && data.list.length > 0
        ? (data.list[0].weather && data.list[0].weather.length > 0
            ? data.list[0].weather[0].icon
            : null) + ".png"
        : null;
    const status = data.list && data.list.length > 0 && data.list[0].weather.length > 0
        ? data.list[0].weather[0].description
        : '';
    const capitalizedStatus = status.charAt(0).toUpperCase() + status.slice(1);


    return (
        <div className="flex flex-col mb-8 items-center gap-6 p-6 rounded-xl md:flex-row md:justify-center">
            <div className="flex items-center">
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-3xl text-white">Today</h1>
                        <div>
                            {weatherIcon && (
                                <img className="w-[50px] object-cover" src={weatherIcon} alt={data.list[0].weather[0].id} />
                            )}
                        </div>
                    </div>
                    <p className="text-white">{currentDate}</p>

                    <div>
                        <p className="text-5xl text-white">
                            {data.list[0].main.temp.toFixed()}
                            <span>°C</span>
                        </p>
                        <span className="text-white text-lg">
                            {capitalizedStatus}
                        </span>
                    </div>

                    <div className="flex items-center mt-1">
                        <div className="bg-white/90 p-2 rounded-xl flex items-center">
                            <MdLocationOn className="text-black" />
                            <span>
                                {data.city.name}, {data.city.country}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );



}

export default Current;

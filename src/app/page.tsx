"use client";
import React, { useState } from 'react'
import Input from "./components/input"
import Current from "./components/Current"
import WeekForecast from "./components/WeatherForecast"

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=4f2d48161730a9c4ccab59cc7119b7e5&units=metric`
  //NEXT_PUBLIC_WEATHER_API_KEY doesn't work?

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();//prevents refresh
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json(); //turn ur data to json
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City Not Found");
        setData({});
      }

    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {


    content = (
      <>
        <div className="text-white text-center h-screen mt-[5rem] ">
          <h2 className="text-xl font-bold"> Welcome to the Weather App </h2>
          <p> Enter a city name to get its weather forecast </p>
        </div>
      </>
    );
  } else if (error !== "") {
    content = (
      <div>
        <p> City Not Found </p>
        <p> Enter Valid City </p>
      </div>
    )
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between mt-[-4rem] flex-center ">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
      </>
    )
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-blue-300 w-full flex flex-col h-fit">
        {/* Input logo*/}
        <div className="flex justify-between items-center p-12 md: flex-row">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-8  px-4 rounded-xl italic font-bold">Weather App</h1>

        </div>

        {content}
      </div>
    </div>

  )
};

export default Home;

//justify center puts the item in the center of horizontal axis
//item center puts the item in the center on vertical axis
//h screen sets the height of element equal to  height of  viewport
//flex col sets direction of flex items
//text is just ur text size
//mb margine from bottom of the content


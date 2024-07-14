"use client";
import Input from "./components/input";

const Home = () => {
  return (
    <div className ="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen">
      <div className="bg-white/25 w-full flex flex-col h-fit">
        {/* Input logo*/}
        <div className="flex justify-between items-center p-12 md: flex-row">
          <Input />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-8  px-4 rounded-xl italic font-bold">Weather App</h1>

        </div>
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


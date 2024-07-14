"use client";
import {AiOutlineSearch} from "react-icons/ai";

const Input = () => {
    return(
        <form className="flex items-center md:w-2/4 w-full">
            <input className="w-full bg-transparent placeholder-white outline-none border-b-2" type="text" placeholder="Search City" />
            
            <div className="ml-[-25px] text-white cursor-pointer"> 
                <AiOutlineSearch />
            </div>
        </form>
    );
}

export default Input;

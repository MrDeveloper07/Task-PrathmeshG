import React, { useState } from 'react';
import { BsGrid3X2GapFill } from "react-icons/bs";
import { FaArrowRight, FaArrowLeft, FaPlus } from "react-icons/fa";
import img1 from '../assets/first.jpg';
import img2 from '../assets/second.jpg';
import img3 from '../assets/third.jpg';

const RightSection = () => {
  const [theme, setTheme] = useState("about");
  const [currentIndex, setCurrentIndex] = useState(0); 
  const content = {
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maxime, labore excepturi optio autem et deleniti molestias eius, nisi veritatis aperiam nulla, laudantium aliquam dignissimos nesciunt itaque tempore saepe esse. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam optio quisquam minus odio, assumenda tempora alias laudantium laborum cum, voluptates cupiditate libero, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel adipisci explicabo perferendis porro ab doloribus nemo perspiciatis nam vitae, non quaerat cupiditate libero voluptas similique sequi suscipit ratione veritatis aliquid. in totam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas magnam veritatis quisquam labore facere ab, distinctio voluptatum nulla ipsa deleniti illum eum voluptate laudantium quis quaerat delectus, iure sed est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reiciendis sit soluta sint iusto fugit dolore quidem iure quibusdam voluptas placeat suscipit ipsa, esse tempora, rem vel velit et odio! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod excepturi a sed ex laborum, veniam repellendus iure facilis, sit sunt inventore rem aut, enim qui vitae aspernatur debitis dolor adipisci!",
    experiences: "This is the 'Experiences' section. Share your professional journey, past jobs, and what you've learned along the way.",
    recommended: "This is the 'Recommended' section. Display recommendations, testimonials, or any other content you'd like to showcase.",
    experiences: "This is the 'Experiences' section. Share your professional journey, past jobs, and what you've learned along the way.",
    recommended: "This is the 'Recommended' section. Display recommendations, testimonials, or any other content you'd like to showcase."
  };

  const imagedata = [
    { img1: img1, img2: img1, img3: img1 },
    { img1: img2, img2: img2, img3: img2 },
    { img1: img3, img2: img3, img3: img3 }
  ];

  const handleTheme = (e) => {
    setTheme(e);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagedata.length); 
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagedata.length) % imagedata.length); 
  };

  return (
    <div className='flex flex-col justify-center h-full gap-8 items-center'>
      <div className="top border-2 w-10/12 rounded-2xl h-64 bg-gray-800 shadow-[4px_8px_8px_rgba(0,0,0,0.38)]">
        <div className="topsec w-full flex justify-center flex-col items-center relative">
          <div className="flex gap-20 bg-black text-white items-center p-1 mt-2 w-10/12 rounded-2xl">
            <div
              className={`one py-4 duration-300 w-36 h-10 flex justify-center items-center cursor-pointer ${theme === "about" ? 'rounded-xl bg-gray-800 font-semibold shadow-[8px_6px_20px_10px_#000000]' : 'text-gray-400'}`}
              onClick={() => handleTheme("about")}
            >
              About Me
            </div>
            <div
              className={`one py-4 duration-300 w-36 h-10 flex justify-center items-center cursor-pointer ${theme === "experiences" ? 'rounded-xl bg-gray-800 font-semibold shadow-[8px_6px_20px_10px_#000000]' : 'text-gray-400'}`}
              onClick={() => handleTheme("experiences")}
            >
              Experiences
            </div>
            <div
              className={`one py-4 duration-300 w-36 h-10 flex justify-center items-center cursor-pointer ${theme === "recommended" ? 'rounded-xl bg-gray-800 font-semibold shadow-[8px_6px_20px_10px_#000000]' : 'text-gray-400'}`}
              onClick={() => handleTheme("recommended")}
            >
              Recommended
            </div>
          </div>
          <div className="flex">
            <div className="h-36">
              <div className="rotate-90 ml-3 flex justify-center items-center h-full">
                <BsGrid3X2GapFill color='gray' size={28} />
              </div>
            </div>
            <div className="body px-6 mr-8 mt-4 text-gray-400 font-normal text-md text-justify overflow-y-scroll h-40 custom-scrollbar">
              {content[theme]}
            </div>
          </div>
          <div className="topleft left-4 text-gray-300 border-2 border-gray-300 rounded-full w-4 h-4 items-center justify-center flex p-2 font-bold text-sm absolute top-4">?</div>
        </div>
      </div>
  
      <hr className='text-white bg-slate-800 w-9/12 h-1' />
      {/* Second section */}
      <div className="top border-2 w-10/12 rounded-2xl h-64 bg-gray-800 shadow-[4px_8px_8px_rgba(0,0,0,0.38)]">
        <div className="topsec w-full flex justify-center flex-col items-center relative">
          <div className="flex gap-20 text-white justify-between items-center p-1 mt-2 w-10/12 rounded-2xl">
            <div className='one py-4 w-36 h-12 shadow-[inset_11px_17px_17px_10px_rgba(0,0,0,0.24)] flex bg-black justify-center items-center cursor-pointer rounded-xl font-semibold text-white'>
              Gallery
            </div>
            <div className="flex w-56">
            <label className="p-3 rounded-full text-xs w-36 flex items-center h-full justify-center font-semibold shadow-custom cursor-pointer">
                <FaPlus size={10} /> ADD IMAGE
                <input type="file" className="hidden" />
              </label>
              <div className='one py-4 w-36 h-10 flex justify-center gap-4 items-center'>
                <div className="next shadow-custom p-2 bg-slate-900 rounded-full cursor-pointer" onClick={handlePrev}>
                  <FaArrowLeft />
                </div>
                <div className="previous shadow-custom bg-slate-900 p-2 rounded-full cursor-pointer" onClick={handleNext}>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex w-full">
            <div className="h-36">
              <div className="rotate-90 ml-3 flex justify-center items-center h-full">
                <BsGrid3X2GapFill color='gray' size={28} />
              </div>
            </div>
            <div className="body mr-8 ml-4 gap-8 justify-center text-gray-400 font-normal text-md text-justify w-full h-40 flex items-center">
              {Object.values(imagedata[currentIndex]).map((imgSrc, index) => (
                <div key={index} className="h-36 w-36 overflow-hidden rounded-xl">
                  <img src={imgSrc} alt={`gallery-img-${index}`} className='w-full h-full' />
                </div>
              ))}
            </div>
          </div>
          <div className="topleft left-4 text-gray-300 border-2 border-gray-300 rounded-full w-4 h-4 items-center justify-center flex p-2 font-bold text-sm absolute top-4">?</div>
        </div>
      </div>
      
      <hr className='text-white bg-slate-800 w-9/12 h-1' />
    </div>
    
  );
};

export default RightSection;

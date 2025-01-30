import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { timelineData } from "../utils/achievmentsItem";

const Achievements = () => {
  return (
    <div className="mt-4 p-4 py-9 bg-gray-100">
      <div className="relative py-5 px-3">
        <h1 className="text-blue-500 font-semibold">Achievements</h1>
        <h1 className="text-3xl capitalize font-semibold md:mt-9 mt-4">
          Highlights of Our Journey
        </h1>
        <div className="flex absolute right-4 top-2">
          <button className="hidden md:block border rounded-full p-2 cursor-pointer">
            <IoIosArrowRoundBack />
          </button>
          <button className="hidden md:block border rounded-full p-2 ml-2 cursor-pointer">
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center md:mt-9 mt-6">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md p-4 md:py-9 ${
              index === 0
                ? "bg-white text-black border" 
                : "bg-slate-800 text-white" 
            }`}
          >
            <h2 className="text-xl font-semibold capitalize text-center mb-3">{item.title}</h2>
            <p className="mt-2 capitalize text-justify">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

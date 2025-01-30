import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { testimonialsData } from "../utils/testimonialData";
import img1 from '../assets/progbiz-img/img-16.png'


const Testimonials = () => {
  return (
    <div className="pt-5 p-4">
      <h1 className="sansFont capitalize text-blue-500 mb-5 ml-5 mt-6">testimonials</h1>

      <div className="relative p-4 py-9">
        {/* heading */}
        <h1 className="sansFont text-[50px] capitalize">client stories</h1>
        <p className="sansFont text-[18px] max-w-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit Dolores ipsam ratione praesentium, voluptatem reprehenderit laudantium pariatur in commodi.
        </p>
        {/* pagination div */}
        <div className="flex absolute md:right-16 lg:right-[140px] bottom-3">
          {/* pagination btn */}
          <button className="hidden md:block border rounded-full p-2 cursor-pointer hover:bg-gray-300 transition ease-in duration-300">
            <IoIosArrowRoundBack />
          </button>
          <button className="hidden md:block border rounded-full p-2 ml-2 cursor-pointer hover:bg-gray-300 transition ease-in duration-300">
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>

      {/* card container  */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-[80%] mx-auto m-3 gap-4">
        {testimonialsData.map((testimonial, index) => (
          // card 
          <div
            key={index}
            className="border p-9 rounded-lg bg-blue-100 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <p className="sansFont text-justify capitalize">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iusto fuga eaque cupiditate perspiciatis libero optio modi consequuntur voluptates aut! Iure consectetur, veniam alias ullam facere dolores voluptatibus dolorem tempore.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-[40px] h-[40px] border rounded-full bg-white"></div>
              <h4 className="capitalize sansFont">{testimonial.name}</h4>
            </div>
            <div className="flex items-center justify-between mt-3">
              <h5 className="sansFont capitalize">{testimonial.company}</h5>
              <div className="flex">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* img div  */}
      <div className="w-[80%] mx-auto mt-3 md:mt-9 relative">
         <img src={img1} alt="ac-img" className="w-full opacity-70 rounded-md"/>
         <div className="absolute inset-0 flex items-center justify-center ">
          <span className="border-2 w-12 flex items-center justify-center rounded-full h-9 py-6 px-6  cursor-pointer hover:bg-black hover:text-white uppercase sansFont hover:border-none transition ease-in duration-300 text-[18px]">play</span>
         </div>
      </div>
    </div>
  );
};

export default Testimonials;
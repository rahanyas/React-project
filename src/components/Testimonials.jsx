import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { CiStar } from "react-icons/ci";

const Testimonials = () => {
  return (
    <div className="pt-5 p-4">
      <h1 className="sansFont capitalize text-blue-500 mb-5 ml-5 mt-6">testimonials</h1>
      <div className="relative  p-4 py-9">
        <h1 className="sansFont text-[50px] md:text-[50px] capitalize">client stories</h1>

        {/* device property for breaking accrding to devices */}
        <p className="sansFont text-[18px] max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit Dolores ipsam ratione praesentium, voluptatem  reprehenderit laudantium pariatur in commodi.</p>

        {/* pagination btn div */}
        <div className="flex absolute md:right-16 lg:right-[140px] bottom-3">

          {/* pagination btn */}
          <button className="hidden md:block border rounded-full p-2 cursor-pointer hover:bg-gray-300 transition ease-in duration-300">
            <IoIosArrowRoundBack />
          </button>
          <button className="hidden md:block border rounded-full p-2 ml-2 cursor-pointer hover:bg-gray-300 transition ease-in duration-300 ">
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
      
      {/* review container */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-[80%] mx-auto m-3 gap-4">

        {/* card 1 */}
         <div className="border p-9 rounded-lg bg-blue-100">
           <p className="sansFont text-justify capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iusto fuga eaque cupiditate perspiciatis libero optio modi consequuntur voluptates aut! Iure consectetur, veniam alias ullam facere dolores voluptatibus dolorem tempore.</p>
           <div className="flex items-center gap-3 mt-4">
           <div className="w-[40px] h-[40px] border rounded-full bg-white"></div>
            <h4 className="capitalize sansFont">david anderson</h4>
           </div>
           <div className="flex items-center justify-between mt-3">
            <h5 className="sansFont capitalize">health service group</h5>
            <div className="flex">
            <CiStar/>
            <CiStar/>
            <CiStar/>
            <CiStar/>
            <CiStar/>
            </div>
           </div>
         </div>

         {/* card 2 */}
         <div className="border p-9 rounded-lg bg-blue-100">
           <p className="sansFont text-justify capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iusto fuga eaque cupiditate perspiciatis libero optio modi consequuntur voluptates aut! Iure consectetur, veniam alias ullam facere dolores voluptatibus dolorem tempore.</p>
           <div className="flex items-center gap-3 mt-4">
           <div className="w-[40px] h-[40px] border rounded-full bg-white"></div>
            <h4 className="capitalize sansFont">david harris</h4>
           </div>
           <div className="flex items-center justify-between mt-3">
            <h5 className="sansFont capitalize">medical solution</h5>
            <div className="flex">
            <CiStar/>
            <CiStar/>
            <CiStar/>
            <CiStar/>
            <CiStar/>
            </div>
           </div>
         </div>

         {/* card 3 */}
         <div className="border p-9 rounded-lg bg-blue-100">
           <p className="sansFont text-justify capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iusto fuga eaque cupiditate perspiciatis libero optio modi consequuntur voluptates aut! Iure consectetur, veniam alias ullam facere dolores voluptatibus dolorem tempore.</p>
           <div className="flex items-center gap-3 mt-4">
           <div className="w-[40px] h-[40px] border rounded-full bg-white"></div>
            <h4 className="capitalize sansFont">james clarke</h4>
           </div>
           <div className="flex items-center justify-between mt-3">
            <h5 className="sansFont capitalize">health management</h5>
            <div className="flex">
            <CiStar/>
            <CiStar/>
            <CiStar/>
            <CiStar/>
            <CiStar/>
            </div>
           </div>
         </div>
      </div>

    </div>
  )
};

export default Testimonials
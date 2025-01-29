import { GoArrowUpRight } from "react-icons/go";
const Footer = () => {
  return (
    <div className="p-2 bg-gray-800  text-white">
      <div className="m-4">
        <h2 className="text-2xl md:text-[30px] capitalize mb-4">ready to experience superior <br /> cooling?</h2>
        <div className="flex items-center ">
        <button className='rounded-full px-5 md:px-7 py-2 mr-4 flex items-center border border-white flex-nowrap whitespace-nowrap gap-2 cursor-pointer hover:bg-gray-600 transition ease-in duration-300'>lets talk <GoArrowUpRight /></button>
        <span className="underline cursor-pointer">info@cooltech.com</span>
        </div>
      </div>
    </div>
  )
};

export default Footer
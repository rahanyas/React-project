import { GoArrowUpRight } from "react-icons/go";
import { imgText, lorem, serviceImg } from "../utils/serviceImgTxt";

const Services = () => {
  return (
    <div className="mt-10 p-6 grid gap-8 lg:grid-cols-3">
      {/* Left Section */}
      <div className="col-span-1">
        <h1 className="text-2xl md:text-4xl sansFont text-blue-500">Our Services</h1>
        <h2 className="text-xl md:text-2xl mt-2 sansFont text-gray-700">
          Professional Services Tailored for You
        </h2>
        <p className="text-gray-600 text-base md:text-lg mt-4 leading-7 sansFont">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem atque
          sunt, iure ipsum dicta consequatur. Nihil, inventore atque velit
          repellendus harum corrupti quam voluptate laboriosam.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <button className="serviceBtn">
            Installation Air Condition <GoArrowUpRight />
          </button>
          <button className="serviceBtn">
            Maintenance <GoArrowUpRight />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-2 grid md:grid-cols-2 gap-6">
        {imgText.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white shadow-lg rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105 hover:shadow-2xl ease-in duration-300"
          >
            <img
              src={serviceImg[index]}
              alt="service-img"
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg sansFont capitalize text-gray-800">
                {item}
              </h3>
              <p className="text-sm text-gray-600 mt-2 snasFont">{lorem}</p>
              <button className="flex items-center text-blue-500 mt-2 font-medium">
                Know More <GoArrowUpRight className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
